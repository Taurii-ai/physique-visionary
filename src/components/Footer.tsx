import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/10 bg-background">
      <div className="container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">SA</span>
                </div>
                <span className="font-bold text-xl text-accent">SculptyAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered body analysis and fitness insights for everyone.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-accent transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground/50">
                    Mobile App (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@physique-ai.com" className="text-muted-foreground hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:support@sculptyai.com" className="text-muted-foreground hover:text-accent transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="mailto:privacy@sculptyai.com" className="text-muted-foreground hover:text-accent transition-colors">
                    Privacy Questions
                  </a>
                </li>
                <li>
                  <a href="mailto:feedback@sculptyai.com" className="text-muted-foreground hover:text-accent transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-border/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 SculptyAI. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy
                </Link>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-muted-foreground">
                  Made with 💪 for fitness enthusiasts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;