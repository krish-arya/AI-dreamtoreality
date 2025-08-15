import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group relative p-8 rounded-3xl glass border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-soft hover:shadow-strong transform hover:-translate-y-2"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center shadow-glow relative overflow-hidden`}>
          <Icon className="w-8 h-8 text-white relative z-10" />
          {/* Icon shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        {/* Decorative geometric shapes */}
        <div className="absolute -top-1 -right-1 w-4 h-4 border border-primary/40 rounded-md rotate-45 opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-secondary to-accent rounded-full opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="font-poppins font-semibold text-xl mb-4 gradient-text group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Corner accents */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-br from-accent to-primary rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
    </div>
  );
};