import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground">Your privacy is our priority. Here's how we protect your data.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Local Storage Only</h3>
                <p className="text-muted-foreground">
                  All your photos and analysis results are stored locally on your device. 
                  We never upload or store your personal images on our servers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">AI Processing</h3>
                <p className="text-muted-foreground">
                  Photos are temporarily sent to our AI service for analysis only. 
                  They are immediately deleted after processing and never stored.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">No Account Required</h3>
                <p className="text-muted-foreground">
                  You can use Physique AI without creating an account or providing 
                  any personal information.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Data Control</h3>
                <p className="text-muted-foreground">
                  You have complete control over your data. Clear your browser 
                  storage to remove all traces of your analysis history.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Analytics</h3>
                <p className="text-muted-foreground">
                  We only collect anonymous usage statistics to improve the app. 
                  No personal data or images are included in these analytics.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Contact</h3>
                <p className="text-muted-foreground">
                  Questions about privacy? Contact us at privacy@physiqueai.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 rounded-xl bg-card border border-border">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Last updated:</strong> September 2025 •
                <strong className="text-foreground ml-4">Effective:</strong> Immediately upon use
              </p>
              <Link to="/privacy-policy">
                <Button variant="outline" size="sm" className="gap-2">
                  View Full Privacy Policy
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;