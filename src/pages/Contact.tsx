import { useState } from "react";
import { Mail, MapPin, Phone, Send, Calendar } from "lucide-react";
import { toast } from "sonner";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const CALENDLY_URL = "https://calendly.com/your-link"; // Replace with actual Calendly link

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-5">
              Let's Start Your{" "}
              <span className="text-gradient">Next Project</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have an idea? We'd love to hear about it. Reach out and let's discuss how we can help.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Info */}
            <AnimatedSection className="lg:col-span-2 space-y-6" delay={0.1}>
              {[
                { icon: Mail, label: "Email", value: "hello@nextgensolution.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Calendly CTA */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 flex items-start gap-4 group hover:border-primary/50 transition-colors block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Schedule a Call</p>
                  <p className="text-foreground font-medium">Book a 1-on-1 Discussion</p>
                  <p className="text-xs text-muted-foreground mt-1">Pick a time that works for you</p>
                </div>
              </a>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
