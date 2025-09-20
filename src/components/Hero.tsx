import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Teal glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-teal-glow border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Powered Analysis</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Transform Your Physique with
                <span className="block text-accent">AI Precision</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Stop guessing. Get objective, data-driven insights about your physique progress. 
                Upload a photo and receive detailed analysis with actionable recommendations.
              </p>
            </div>

            {/* Features preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/20 backdrop-blur-sm border border-border/30">
                <Target className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm font-medium">V-Taper Score</div>
                  <div className="text-xs text-muted-foreground">Shoulder ratio</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/20 backdrop-blur-sm border border-border/30">
                <BarChart3 className="w-5 h-5 text-success" />
                <div>
                  <div className="text-sm font-medium">Body Fat %</div>
                  <div className="text-xs text-muted-foreground">AI estimated</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/20 backdrop-blur-sm border border-border/30">
                <Zap className="w-5 h-5 text-warning" />
                <div>
                  <div className="text-sm font-medium">Symmetry</div>
                  <div className="text-xs text-muted-foreground">Balance score</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Free Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-3xl" />
            <img 
              src={heroImage} 
              alt="Physique AI app interface showing AI-powered body analysis" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-card border border-border/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;