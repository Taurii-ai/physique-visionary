import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Monitor } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="container px-4 relative">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-medium text-accent">Ready to Start?</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              Ready to Transform
              <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Your Physique?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands who've discovered the power of data-driven fitness.
              Get your first AI analysis completely free.
            </p>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="xl" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-4">
              Start Your Free Analysis
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-accent/20 hover:border-accent/40 text-lg px-8 py-4">
              View Sample Report
            </Button>
          </div>

          {/* App Store Section */}
          <div className="pt-8 space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">Or download the mobile app:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-border/50 hover:border-accent/30 bg-card/50 backdrop-blur-sm"
                  disabled
                >
                  <Smartphone className="w-5 h-5 mr-3" />
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
                  <Monitor className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Coming Soon</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-wrap gap-8 justify-center text-sm text-muted-foreground">
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
      </div>
    </section>
  );
};

export default CTA;