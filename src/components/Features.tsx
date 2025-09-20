import { Brain, Target, TrendingUp, MessageSquare, History, Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced computer vision analyzes your physique photos to provide objective metrics on muscularity, leanness, and proportions.",
    highlight: "Physique Score 0-100"
  },
  {
    icon: Target,
    title: "Dream Physique Mode",
    description: "Compare your progress against your goal physique. Get targeted recommendations on exactly what needs improvement.",
    highlight: "Goal Similarity %"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visual charts track your journey over time. See your V-Taper, body fat %, and symmetry scores improve week by week.",
    highlight: "Historical Data"
  },
  {
    icon: Calculator,
    title: "Smart Planner",
    description: "AI recommends whether to bulk, cut, or recomp based on your current physique and goals. No more guessing your next phase.",
    highlight: "Bulk or Cut?"
  },
  {
    icon: MessageSquare,
    title: "AI Coach Chat",
    description: "Get detailed explanations about your results. Ask specific questions and receive personalized workout recommendations.",
    highlight: "Context-Aware"
  },
  {
    icon: History,
    title: "Scan Comparison",
    description: "Compare any two scans from your history. AI generates detailed summaries of your progress and improvements.",
    highlight: "Side-by-Side"
  }
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
      
      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-teal-glow border border-accent/20">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything You Need to
            <span className="block text-accent">Perfect Your Physique</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop relying on mirror selfies and subjective opinions. Get data-driven insights 
            that actually help you build your dream physique.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/40 backdrop-blur-sm border-border/30 hover:border-accent/30 transition-all duration-300 hover:shadow-glow group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-gradient-teal-glow border border-accent/20 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-accent/80 px-2 py-1 rounded bg-accent/10 border border-accent/20">
                    {feature.highlight}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;