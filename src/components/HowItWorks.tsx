import { Upload, Scan, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Photo",
    description: "Take or upload a 'front relaxed' photo. Our AI works best with good lighting and clear visibility of your physique."
  },
  {
    icon: Scan,
    number: "02", 
    title: "AI Analysis",
    description: "Advanced computer vision analyzes your physique, measuring key metrics like V-Taper ratio, body fat %, symmetry, and muscle development."
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Get Insights & Plan",
    description: "Receive detailed scores, actionable training advice, and recommendations for your next phase (bulk, cut, or recomp)."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-teal-glow border border-accent/20">
            <Scan className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            From Photo to
            <span className="block text-accent">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional-level physique analysis in under 30 seconds. 
            No equipment needed, just your smartphone.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Connection line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 mt-20 w-px h-16 bg-gradient-to-b from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;