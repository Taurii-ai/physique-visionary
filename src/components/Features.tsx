import { Brain, Target, TrendingUp, MessageSquare, History, Calculator } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Get objective metrics on muscularity, leanness, and proportions from a single photo."
  },
  {
    icon: Target,
    title: "Goal Comparison",
    description: "Compare your progress against your dream physique and get targeted recommendations."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visual charts track your V-Taper, body fat %, and symmetry scores over time."
  },
  {
    icon: Calculator,
    title: "Smart Planning",
    description: "AI recommends whether to bulk, cut, or recomp based on your current state."
  },
  {
    icon: MessageSquare,
    title: "AI Coach",
    description: "Ask questions and get personalized workout recommendations based on your results."
  },
  {
    icon: History,
    title: "Scan Comparison",
    description: "Compare any two scans and get detailed summaries of your progress."
  }
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to
            <span className="block text-accent">Perfect Your Physique</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop relying on subjective opinions. Get data-driven insights 
            that help you build your dream physique.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;