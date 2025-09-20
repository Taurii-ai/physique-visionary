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
    <section className="py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />

      <div className="container px-4 relative">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Everything You Need to
            <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Perfect Your Physique
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop relying on subjective opinions. Get data-driven insights
            that help you build your dream physique with scientific precision.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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