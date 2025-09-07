import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon, delay = 0 }) => {
  return (
    <div 
      className="card-racing animate-fade-in hover:animate-glow-pulse"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
          <Icon className="w-8 h-8 text-neon" />
        </div>
        <h3 className="text-xl font-bold gradient-text">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default ServiceCard;