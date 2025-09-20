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
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-level physique analysis in under 30 seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground text-xl font-bold flex items-center justify-center mx-auto">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;