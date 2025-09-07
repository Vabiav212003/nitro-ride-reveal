import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    SplineApplication: any;
  }
}

const SplineBackground: React.FC = () => {
  const splineViewerRef = useRef<any>(null);
  const splineAppRef = useRef<any>(null);

  useEffect(() => {
    console.log('SplineBackground: Starting initialization...');

    const loadSplineScript = async () => {
      console.log('SplineBackground: Loading Spline script...');
      
      // Check if script is already loaded
      if (document.querySelector('script[src*="spline-viewer"]')) {
        console.log('SplineBackground: Script already exists, initializing...');
        setTimeout(initializeSpline, 500);
        return;
      }

      // Dynamically load the Spline viewer script
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js';
      
      script.onload = () => {
        console.log('SplineBackground: Script loaded successfully');
        setTimeout(initializeSpline, 1000);
      };
      
      script.onerror = (error) => {
        console.error('SplineBackground: Failed to load script', error);
      };
      
      document.head.appendChild(script);
    };

    const initializeSpline = () => {
      console.log('SplineBackground: Initializing Spline viewer...');
      
      if (!splineViewerRef.current) {
        console.log('SplineBackground: Viewer ref not available yet, retrying...');
        setTimeout(initializeSpline, 500);
        return;
      }

      // Multiple attempts to connect to Spline
      let attemptCount = 0;
      const maxAttempts = 20;
      
      const checkSplineReady = () => {
        attemptCount++;
        console.log(`SplineBackground: Attempt ${attemptCount} to connect to Spline...`);
        
        if (splineViewerRef.current) {
          console.log('SplineBackground: Viewer element found:', splineViewerRef.current);
          
          // Try multiple ways to access the Spline application
          const splineApp = splineViewerRef.current.spline || 
                           splineViewerRef.current._spline || 
                           splineViewerRef.current.application;
          
          if (splineApp) {
            console.log('SplineBackground: Spline app connected!', splineApp);
            splineAppRef.current = splineApp;
            setupScrollHandler();
            return;
          }
          
          // Try event listener approach
          splineViewerRef.current.addEventListener('load', (event: any) => {
            console.log('SplineBackground: Spline loaded via event:', event);
            if (event.target && (event.target.spline || event.target.application)) {
              splineAppRef.current = event.target.spline || event.target.application;
              setupScrollHandler();
            }
          });
        }
        
        if (attemptCount < maxAttempts) {
          setTimeout(checkSplineReady, 500);
        } else {
          console.log('SplineBackground: Max attempts reached, setting up basic scroll handler');
          setupBasicScrollHandler();
        }
      };

      checkSplineReady();
    };

    const setupScrollHandler = () => {
      console.log('SplineBackground: Setting up advanced scroll handler...');
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollY / maxScroll, 1);
            
            console.log('SplineBackground: Scroll progress:', scrollProgress);
            
            if (splineAppRef.current) {
              try {
                // Try different methods to find the camera
                let camera = null;
                
                if (splineAppRef.current.findObjectByName) {
                  camera = splineAppRef.current.findObjectByName('Camera');
                }
                
                if (!camera && splineAppRef.current.scene) {
                  camera = splineAppRef.current.scene.getObjectByName?.('Camera');
                }
                
                if (!camera && splineAppRef.current.scene?.children) {
                  camera = splineAppRef.current.scene.children.find((child: any) => 
                    child.type === 'PerspectiveCamera' || child.type === 'OrthographicCamera'
                  );
                }
                
                if (camera) {
                  console.log('SplineBackground: Camera found, updating position...');
                  camera.position.y = 2 + (scrollProgress * 5);
                  camera.position.z = 5 + (scrollProgress * 10);
                  camera.rotation.x = -(scrollProgress * 0.5);
                } else {
                  console.log('SplineBackground: Camera not found, using viewer transform');
                  applyViewerTransform(scrollProgress);
                }
              } catch (error) {
                console.error('SplineBackground: Error controlling camera:', error);
                applyViewerTransform(scrollProgress);
              }
            } else {
              applyViewerTransform(scrollProgress);
            }
            
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      console.log('SplineBackground: Scroll handler attached');
    };

    const setupBasicScrollHandler = () => {
      console.log('SplineBackground: Setting up basic scroll handler...');
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollY / maxScroll, 1);
            
            applyViewerTransform(scrollProgress);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      console.log('SplineBackground: Basic scroll handler attached');
    };

    const applyViewerTransform = (scrollProgress: number) => {
      if (splineViewerRef.current) {
        const rotationX = scrollProgress * 15;
        const translateY = scrollProgress * -100;
        const translateZ = scrollProgress * 200;
        const scale = 1 + (scrollProgress * 0.2);
        
        const transform = `
          perspective(2000px) 
          rotateX(${rotationX}deg) 
          translateY(${translateY}px) 
          translateZ(${translateZ}px)
          scale(${scale})
        `;
        
        splineViewerRef.current.style.transform = transform;
        splineViewerRef.current.style.transformOrigin = 'center center';
        console.log('SplineBackground: Applied viewer transform:', transform);
      }
    };

    loadSplineScript();

    return () => {
      window.removeEventListener('scroll', () => {});
      console.log('SplineBackground: Cleanup completed');
    };
  }, []);

  return (
    <div className="spline-bg">
      <spline-viewer 
        ref={splineViewerRef}
        url="https://prod.spline.design/U2D96neqbHAW1JVW/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default SplineBackground;