import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/10">
        <div className="container px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-accent">Physique AI</h1>
              <p className="text-sm text-muted-foreground">Privacy Policy</p>
            </div>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Physique AI, we take your privacy seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our AI-powered body analysis service.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-accent">Photos and Images</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect photos you upload for AI analysis. These images are processed to provide
                    body composition insights and are not stored longer than necessary for analysis.
                  </p>

                  <h3 className="text-lg font-semibold text-accent">Usage Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect information about how you use our service, including analysis results,
                    preferences, and interaction patterns to improve our AI models.
                  </p>

                  <h3 className="text-lg font-semibold text-accent">Device Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect device information such as IP address, browser type, and operating system
                    for security and optimization purposes.
                  </p>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Provide AI-powered body analysis and insights</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Improve our AI models and service quality</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Ensure service security and prevent misuse</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Provide customer support and technical assistance</span>
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>End-to-end encryption for data transmission</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Secure data storage with access controls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Regular security audits and updates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Automatic deletion of uploaded images after analysis</span>
                  </li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Request deletion of your data</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Opt-out of data collection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Request data portability</span>
                  </li>
                </ul>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or your data, please contact us at:
                </p>
                <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                  <p className="text-accent font-medium">privacy@physique-ai.com</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>
              </section>

              {/* Updates */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Policy Updates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any
                  significant changes by posting the new Privacy Policy on this page and updating
                  the "Last updated" date.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-border/30 text-center">
              <Link to="/">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Return to Physique AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;