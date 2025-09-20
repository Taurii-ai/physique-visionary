import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Transform
              <span className="block text-accent">Your Physique?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands who've discovered the power of data-driven fitness. 
              Get your first AI analysis completely free.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group">
              Start Your Free Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              View Sample Report
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>✓ 100% Private & Secure  ✓ Results in 30 Seconds  ✓ No Signup Required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;