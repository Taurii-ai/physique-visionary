import { Upload, Scan, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "1",
    title: "Upload Photo",
    description: "Take a front-facing photo with good lighting."
  },
  {
    icon: Scan,
    number: "2", 
    title: "AI Analysis",
    description: "Get detailed metrics on your physique in seconds."
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Get Plan",
    description: "Receive actionable training recommendations."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container px-4 relative">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional-level physique analysis in under 30 seconds.
            No complex setup, no learning curve.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-accent/50 via-accent to-accent/50 transform -translate-y-1/2" />

            {steps.map((step, index) => (
              <div key={index} className="relative text-center space-y-6 group">
                {/* Step number */}
                <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground text-2xl font-bold flex items-center justify-center shadow-lg shadow-accent/25 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/50 to-accent/20 -z-10 blur opacity-50" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:border-accent/30 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;