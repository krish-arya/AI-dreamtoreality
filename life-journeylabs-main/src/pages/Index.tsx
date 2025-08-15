import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ChatWindow } from "@/components/ChatWindow";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  BarChart3, 
  Lightbulb,
  Rocket,
  MapPin,
  Clock
} from "lucide-react";
import heroShapes from "@/assets/hero-3d-shapes.jpg";
import floatingOrb from "@/assets/floating-orb.jpg";
import crystalBg from "@/assets/crystal-bg.jpg";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Dream Parsing Agent",
      description: "Advanced AI understands your abstract dreams and goals, translating them into actionable insights with human-like comprehension.",
      gradient: "bg-gradient-to-br from-primary to-primary-glow"
    },
    {
      icon: Target,
      title: "Reality Check Engine",
      description: "Gathers real-time financial, skill, visa, and market data to ground your dreams in achievable reality.",
      gradient: "bg-gradient-to-br from-secondary to-secondary-glow"
    },
    {
      icon: Zap,
      title: "Adaptive Life Simulation",
      description: "Runs multiple parallel life simulations to show probability outcomes for different life choices.",
      gradient: "bg-gradient-to-br from-accent to-accent-glow"
    },
    {
      icon: BarChart3,
      title: "Opportunity Radar",
      description: "Autonomous scouting agent that finds grants, competitions, jobs, and networking events relevant to your journey.",
      gradient: "bg-gradient-to-br from-primary to-secondary"
    },
    {
      icon: Lightbulb,
      title: "XAI Explanations",
      description: "Every recommendation comes with clear explanations of why each step exists and how it impacts your success rate.",
      gradient: "bg-gradient-to-br from-secondary to-accent"
    },
    {
      icon: Clock,
      title: "Micro-Milestone Generator",
      description: "Breaks big dreams into 5-15 minute actionable tasks that maintain momentum and build consistent progress.",
      gradient: "bg-gradient-to-br from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-lg"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/15 to-accent/15 blur-2xl"></div>
      </div>

      <Navbar onStartJourney={() => setIsChatOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 shadow-glow">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Life Architecture</span>
              </div>

              <h1 className="font-poppins font-bold text-5xl lg:text-7xl leading-tight mb-6">
                Turn Your{" "}
                <span className="gradient-text relative">
                  Dreams
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 rounded-lg"></div>
                </span>
                <br />
                Into Reality
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg relative">
                From "I want to open a cafe in Italy" to a step-by-step roadmap. 
                Our AI reverse-engineers your biggest dreams into achievable life plans.
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-60"></div>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsChatOpen(true)}
                  className="btn-3d bg-gradient-to-br from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground px-8 py-4 rounded-2xl shadow-strong text-lg font-semibold relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Rocket className="w-5 h-5 mr-3 relative z-10" />
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 ml-3 relative z-10" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-2xl border-primary/30 hover:bg-primary/5 text-lg font-medium hover:shadow-medium transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-strong">
                <img 
                  src={heroShapes} 
                  alt="3D Dream Visualization" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20"></div>
                <div className="absolute inset-0 border border-primary/30 rounded-3xl"></div>
              </div>
              
              {/* Static decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl shadow-glow">
                <img 
                  src={floatingOrb} 
                  alt="Floating Dream Orb" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 border-2 border-primary/40 rounded-2xl"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-32 h-20 rounded-xl shadow-medium">
                <img 
                  src={crystalBg} 
                  alt="Crystal Formation" 
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
                <div className="absolute inset-0 border border-secondary/50 rounded-xl"></div>
              </div>

              {/* Glowing accent dots */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full shadow-glow animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-2 h-2 bg-gradient-to-br from-accent to-primary rounded-full shadow-glow animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl mb-6 gradient-text">
              Powered by Advanced AI Agents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multi-agent system combines dream parsing, reality checking, and adaptive planning 
              to create personalized roadmaps that actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl mb-12 gradient-text">
            From Dream to Reality in 3 Steps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-glow">
                1
              </div>
              <h3 className="font-poppins font-semibold text-xl">Share Your Dream</h3>
              <p className="text-muted-foreground">Tell our AI about any goal, no matter how abstract or ambitious.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-secondary-glow flex items-center justify-center text-2xl font-bold text-secondary-foreground shadow-glow">
                2
              </div>
              <h3 className="font-poppins font-semibold text-xl">AI Analysis</h3>
              <p className="text-muted-foreground">Our agents analyze feasibility, resources, and create multiple success paths.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center text-2xl font-bold text-accent-foreground shadow-glow">
                3
              </div>
              <h3 className="font-poppins font-semibold text-xl">Get Your Roadmap</h3>
              <p className="text-muted-foreground">Receive a personalized, step-by-step plan with explanations and milestones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 glass border border-primary/20 shadow-strong">
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl mb-6 gradient-text">
              Ready to Map Your Dream?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands who've turned their wildest dreams into structured, achievable plans. 
              Your personalized roadmap is just one conversation away.
            </p>
            <Button
              onClick={() => setIsChatOpen(true)}
              className="btn-3d bg-gradient-to-br from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground px-10 py-4 rounded-2xl shadow-strong text-lg font-semibold"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Start Mapping Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
