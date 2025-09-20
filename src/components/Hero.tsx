import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Smartphone, Monitor } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      <div className="container px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Powered Analysis</span>
            </div>

            {/* Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                Transform Your
                <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Physique
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Get objective, data-driven insights about your physique progress with professional-grade AI analysis.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="xl" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Start Free Analysis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="border-accent/20 hover:border-accent/40">
                  Watch Demo
                </Button>
              </div>

              {/* App Store Buttons */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Download the app:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-border/50 hover:border-accent/30 bg-card/50 backdrop-blur-sm"
                    disabled
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Coming Soon</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-border/50 hover:border-accent/30 bg-card/50 backdrop-blur-sm"
                    disabled
                  >
                    <Monitor className="w-5 h-5 mr-2" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Coming Soon</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 text-sm text-muted-foreground">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  100% Private & Secure
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Results in 30 Seconds
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  No Signup Required
                </span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative lg:order-last">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent blur-2xl opacity-70"></div>
              <img
                src={heroImage}
                alt="Physique AI app interface showing AI-powered body analysis"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-accent/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;