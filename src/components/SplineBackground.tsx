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
    let scriptLoaded = false;

    const loadSplineScript = async () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="spline-viewer"]')) {
        scriptLoaded = true;
        initializeSpline();
        return;
      }

      // Dynamically load the Spline viewer script
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js';
      
      script.onload = () => {
        scriptLoaded = true;
        setTimeout(initializeSpline, 100); // Small delay to ensure Spline is ready
      };
      
      document.head.appendChild(script);
    };

    const initializeSpline = () => {
      if (!splineViewerRef.current) return;

      // Wait for the spline-viewer element to be ready
      const checkSplineReady = () => {
        if (splineViewerRef.current && splineViewerRef.current.spline) {
          splineAppRef.current = splineViewerRef.current.spline;
          setupScrollHandler();
        } else {
          setTimeout(checkSplineReady, 100);
        }
      };

      checkSplineReady();
    };

    const setupScrollHandler = () => {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking && splineAppRef.current) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollY / maxScroll, 1);
            
            // Update camera position based on scroll
            try {
              const camera = splineAppRef.current.findObjectByName('Camera');
              if (camera) {
                // Smooth camera movement based on scroll
                const baseY = 2;
                const baseZ = 5;
                const rotationX = scrollProgress * 0.3;
                const moveZ = scrollProgress * 8;
                
                camera.position.y = baseY + (scrollProgress * 3);
                camera.position.z = baseZ + moveZ;
                camera.rotation.x = -rotationX;
              } else {
                // Alternative: Try to get camera through scene
                const scene = splineAppRef.current.scene;
                if (scene && scene.getObjectByName) {
                  const altCamera = scene.getObjectByName('Camera') || scene.children.find((child: any) => 
                    child.type === 'PerspectiveCamera' || child.type === 'OrthographicCamera'
                  );
                  if (altCamera) {
                    altCamera.position.y = 2 + (scrollProgress * 3);
                    altCamera.position.z = 5 + (scrollProgress * 8);
                    altCamera.rotation.x = -(scrollProgress * 0.3);
                  }
                }
              }
            } catch (error) {
              // Fallback: Control the entire spline container
              if (splineViewerRef.current) {
                const transform = `
                  perspective(1000px) 
                  rotateX(${scrollProgress * 10}deg) 
                  translateY(${scrollProgress * -50}px)
                  translateZ(${scrollProgress * 100}px)
                `;
                splineViewerRef.current.style.transform = transform;
              }
            }
            
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    loadSplineScript();

    return () => {
      // Cleanup
      window.removeEventListener('scroll', () => {});
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
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SplineBackground;