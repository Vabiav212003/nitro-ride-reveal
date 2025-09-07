import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Volume2, 
  Palette, 
  Lightbulb, 
  Shield, 
  Settings, 
  Zap,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import SplineBackground from '@/components/SplineBackground';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const services = [
    {
      title: "Car Audio Systems",
      description: "Premium sound systems with crystal-clear audio and deep bass for the ultimate driving experience.",
      Icon: Volume2,
    },
    {
      title: "Custom Car Interiors",
      description: "Luxurious leather upholstery and custom interior designs that match your style and comfort.",
      Icon: Car,
    },
    {
      title: "Car Lighting & Styling",
      description: "LED ambient lighting, custom headlights, and styling solutions that make your car stand out.",
      Icon: Lightbulb,
    },
    {
      title: "Car Wraps & Paint",
      description: "Full vehicle wraps, custom paint jobs, and paint protection films for lasting beauty.",
      Icon: Palette,
    },
    {
      title: "PPF & Ceramic Coating",
      description: "Advanced paint protection films and ceramic coatings for maximum durability and shine.",
      Icon: Shield,
    },
    {
      title: "Alloy Wheels",
      description: "Premium alloy wheels in various designs and sizes to enhance your car's performance and look.",
      Icon: Settings,
    },
    {
      title: "Performance Upgrades",
      description: "Engine tuning, exhaust systems, and performance modifications for enhanced driving dynamics.",
      Icon: Zap,
    },
    {
      title: "Car Accessories",
      description: "Complete range of automotive accessories from functional to aesthetic enhancements.",
      Icon: Car,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SplineBackground />
      
      <div className="content-overlay">
        {/* Hero Section */}
        <section className="section-racing min-h-screen flex items-center justify-center">
          <div className="container mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black gradient-text mb-6 animate-float">
              RNSINONE
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-neon mb-4">
              Best Car Modification in Bangalore
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Premium Car Customization – Audio, Interiors, Lighting, Wraps, Alloys, PPF & Ceramic Coating
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-racing">
                Book Your Modification
              </Button>
              <Button className="btn-outline-racing">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="section-racing bg-gradient-to-b from-transparent to-card/20">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At <span className="text-neon font-bold">RNSINONE PRIVATE LIMITED – GMS Car Modifiers</span>, 
                  we specialize in transforming ordinary vehicles into extraordinary masterpieces. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With expertise in car interiors, premium audio systems, custom lighting, vehicle wraps, 
                  alloy wheels, PPF & ceramic coatings, we bring your automotive dreams to life.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every project is crafted with precision, creativity, and attention to detail, 
                  ensuring your car reflects your unique personality and style.
                </p>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="card-racing">
                  <div className="text-center">
                    <div className="text-4xl font-black text-neon mb-2">500+</div>
                    <p className="text-muted-foreground">Cars Modified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-racing">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card-racing animate-slide-in-left">
                <h3 className="text-3xl font-bold text-neon mb-6">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted car modification brand in Karnataka, delivering innovation, 
                  creativity, and perfection that redefine car customization standards.
                </p>
              </div>
              
              <div className="card-racing animate-slide-in-right">
                <h3 className="text-3xl font-bold text-cyan-neon mb-6">Our Mission</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Provide world-class car modification services at affordable prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span>Blend style, safety, and performance in every project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span>Serve car enthusiasts across Bangalore & Karnataka</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-racing bg-gradient-to-b from-card/10 to-transparent">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your vehicle with our comprehensive range of premium modification services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-racing bg-gradient-to-t from-card/20 to-transparent">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Contact Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground">
                Ready to transform your car? Get in touch with our experts today!
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="animate-slide-in-left">
                <ContactForm />
              </div>
              
              <div className="animate-slide-in-right space-y-8">
                <div className="card-racing">
                  <h3 className="text-2xl font-bold text-neon mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/20">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Call Us</p>
                        <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-secondary/20">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email Us</p>
                        <p className="text-muted-foreground">info@rnsinone.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/20">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Visit Us</p>
                        <p className="text-muted-foreground">Bangalore, Karnataka</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-racing text-center">
                  <h4 className="text-xl font-bold gradient-text mb-4">
                    Book Your Modification Today
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Join hundreds of satisfied customers who trust us with their dream cars.
                  </p>
                  <Button className="btn-racing">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
