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
                Last updated: September 21, 2025
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">

              {/* Introduction */}
              <section className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy describes our policies and procedures on collecting, using, and disclosing
                  your information when you use the Service and tells you about your privacy rights and how the
                  law protects you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We use your Personal data to provide and improve the Service. By using the Service, you agree
                  to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Interpretation and Definitions */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Interpretation and Definitions</h2>

                <h3 className="text-lg font-semibold text-accent">Interpretation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The words of which the initial letter is capitalized have meanings defined under the following
                  conditions. The following definitions shall have the same meaning regardless of whether they
                  appear in singular or in plural.
                </p>

                <h3 className="text-lg font-semibold text-accent">Definitions</h3>
                <p className="text-muted-foreground leading-relaxed">For the purposes of this Privacy Policy:</p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li><strong>Company</strong> refers to SculptyAI.</li>
                  <li><strong>Device</strong> means any device that can access the Service.</li>
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Usage Data</strong> refers to data collected automatically from use of the Service.</li>
                  <li><strong>Website</strong> refers to SculptyAI, accessible from sculptyai.com</li>
                  <li><strong>You</strong> refers to the individual accessing or using the Service.</li>
                </ul>
              </section>

              {/* Collecting and Using Personal Data */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Collecting and Using Your Personal Data</h2>

                <h3 className="text-lg font-semibold text-accent">Types of Data Collected</h3>

                <h4 className="text-md font-semibold text-foreground">Personal Data</h4>
                <p className="text-muted-foreground leading-relaxed">
                  While using our Service, we may ask you to provide us with certain personally identifiable
                  information that can be used to contact or identify you. Personally identifiable information
                  may include, but is not limited to:
                </p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Email address</li>
                  <li>• First name and last name</li>
                  <li>• Usage Data</li>
                </ul>

                <h4 className="text-md font-semibold text-foreground">Usage Data</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Usage Data is collected automatically when using the Service. Usage Data may include information
                  such as your Device's Internet Protocol address, browser type, browser version, the pages of our
                  Service that you visit, the time and date of your visit, the time spent on those pages, unique
                  device identifiers and other diagnostic data.
                </p>

                <h4 className="text-md font-semibold text-foreground">Information from Third-Party Social Media Services</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The Company allows you to create an account and log in to use the Service through third-party
                  Social Media Services. If you decide to register through a Social Media Service, we may collect
                  Personal data that is already associated with your Social Media Service's account.
                </p>
              </section>

              {/* Use of Personal Data */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Use of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">The Company may use Personal Data for the following purposes:</p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                  <li>• <strong>To manage your Account</strong>: to manage your registration as a user of the Service.</li>
                  <li>• <strong>To contact you</strong>: To contact you by email or other equivalent forms of electronic communication.</li>
                  <li>• <strong>To provide you</strong> with news, special offers and general information about other goods, services and events.</li>
                  <li>• <strong>To manage your requests</strong>: To attend and manage your requests to us.</li>
                  <li>• <strong>For business transfers</strong>: We may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
                  <li>• <strong>For other purposes</strong>: We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                </ul>
              </section>

              {/* Retention of Personal Data */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Retention of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Company will retain your Personal Data only for as long as is necessary for the purposes
                  set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary
                  to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>
              </section>

              {/* Security of Personal Data */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Security of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your Personal Data is important to us, but remember that no method of transmission
                  over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                  identifiable information from anyone under the age of 13. If you are a parent or guardian and you
                  are aware that your child has provided us with Personal Data, please contact us.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, you can contact us:
                </p>
                <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                  <p className="text-muted-foreground">By email: <span className="text-accent font-medium">[email protected]</span></p>
                  <p className="text-muted-foreground">On this page: <span className="text-accent font-medium">sculptyai.com</span></p>
                </div>
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