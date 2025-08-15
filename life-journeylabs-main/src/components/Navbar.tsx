import { Brain, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  onStartJourney: () => void;
}

export const Navbar = ({ onStartJourney }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 glass border-b border-primary/10 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl gradient-text">DreamMapper</h1>
              <p className="text-xs text-muted-foreground">AI Life Architect</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              How It Works
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onStartJourney}
              className="btn-3d bg-gradient-to-br from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground px-6 py-2 rounded-2xl shadow-medium font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Start Your Journey
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/10">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                How It Works
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};