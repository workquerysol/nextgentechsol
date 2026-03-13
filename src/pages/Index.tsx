import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap, Globe, BarChart3, Shield, Smartphone, Cloud, Headphones, ExternalLink, Star, Quote, Target, Eye, Heart, Share2, Mail, MapPin, Phone, Send, Calendar, Clock, Video, Loader2 } from "lucide-react";
import { toast } from "sonner";

import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import projectNgo from "@/assets/project-ngo.jpg";
import projectHoney from "@/assets/project-honey.jpg";
import projectTrading from "@/assets/project-trading.jpg";
import calendlyImage from "@/assets/calendly-cta.jpg";

const services = [
  { icon: Code2, title: "Custom Web Development", desc: "Tailored websites and web applications built with cutting-edge technologies.", features: ["React & Next.js", "API Integration", "CMS Development"] },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that converts. Intuitive interfaces backed by research.", features: ["Wireframing", "Prototyping", "User Testing"] },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect designs that look stunning on every device.", features: ["Mobile-First", "Cross-Browser", "Adaptive Layouts"] },
  { icon: Zap, title: "Performance Optimization", desc: "Lightning-fast websites that rank higher and convert better.", features: ["Core Web Vitals", "Caching Strategy", "Code Splitting"] },
  { icon: Globe, title: "SEO & Digital Marketing", desc: "Data-driven strategies to improve your online visibility.", features: ["Technical SEO", "Content Strategy", "Analytics Setup"] },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure that grows with your business.", features: ["Cloud Migration", "Auto-Scaling", "DevOps"] },
  { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade security to protect your data.", features: ["SSL/TLS", "GDPR Compliance", "Security Audits"] },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Comprehensive analytics to track user behavior and impact.", features: ["Dashboard Setup", "A/B Testing", "ROI Tracking"] },
  { icon: Headphones, title: "Ongoing Support", desc: "Dedicated support and maintenance to keep you running 24/7.", features: ["24/7 Monitoring", "Regular Updates", "Priority Support"] },
  { icon: Share2, title: "Social Media Management", desc: "Strategic social media presence that builds your brand and engages your audience.", features: ["Content Creation", "Scheduling & Posting", "Growth Strategy"] },
];

const projects = [
  {
    title: "Hope Foundation",
    category: "NGO Website",
    description: "A compassionate, impact-driven website for a non-profit organization. Features donation integration, volunteer sign-up, event management, and storytelling sections.",
    tags: ["React", "Tailwind CSS", "Payment Gateway", "CMS"],
    image: projectNgo,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Golden Harvest Honey",
    category: "E-Commerce",
    description: "A warm, inviting e-commerce platform for an artisanal honey brand with product catalog, cart system, secure checkout, and a blog.",
    tags: ["E-Commerce", "Stripe", "Product Catalog", "Blog"],
    image: projectHoney,
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "TradeView Academy",
    category: "Trading Platform",
    description: "An educational trading platform combining real-time market data visualization with structured learning modules, interactive charts, and community discussions.",
    tags: ["Real-time Data", "Charts", "LMS", "WebSockets"],
    image: projectTrading,
    color: "from-emerald-500/20 to-cyan-500/20",
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, Hope Foundation",
    project: "NGO Website",
    content: "NestHub Solution transformed our vision into a beautiful, functional website. Donations increased by 40% within the first month. Their understanding of our mission was remarkable.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Owner, Golden Harvest Honey",
    project: "E-Commerce Platform",
    content: "Our honey brand needed an online presence that matched the quality of our product. NestHub delivered beyond expectations — the site is gorgeous and our online sales have tripled.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rohan Kapoor",
    role: "CEO, TradeView Academy",
    project: "Trading Platform",
    content: "Building a trading education platform is complex, but the NestHub team handled it with precision. Real-time charts, course modules, community features — everything works flawlessly.",
    rating: 5,
    initials: "RK",
  },
];

const values = [
  { icon: Target, title: "Innovation First", desc: "We stay ahead of the curve, leveraging the latest technologies." },
  { icon: Eye, title: "Transparency", desc: "Open communication and honest timelines. You're always in the loop." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is our success. Every decision aligns with your goals." },
];

const stats = [
  { value: "3+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Experience" },
];

const CALENDLY_URL = "https://calendly.com/workquerysol/30min";

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "sf_96hcfm4egdje3k77kii2j9maadd",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New inquiry from ${form.name}`,
          replyTo: form.email,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
                We Build the Future of Web
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
            >
              Digital Solutions{" "}
              <span className="text-gradient">That Drive</span>{" "}
              Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              We craft exceptional web experiences that transform businesses. From stunning designs to powerful applications, we bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Start a Project <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-border/30" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-border/30" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-border/30" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-border/50">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="py-10 md:py-14 text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
              Services That <span className="text-gradient">Deliver</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.06}>
                <div className="glass-card rounded-xl p-8 hover-lift group h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary/80">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
              Projects We're <span className="text-gradient">Proud Of</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-24">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden group ${i % 2 === 1 ? "lg:order-2" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 z-10 pointer-events-none`} />
                    <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
                        View Details <ExternalLink size={16} />
                      </span>
                    </div>
                  </motion.div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-primary text-sm font-semibold uppercase tracking-widest">{project.category}</span>
                    <h3 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-secondary-foreground text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
              What Our Clients <span className="text-gradient">Say</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-10 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <motion.div
                  className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote size={80} className="absolute -top-2 -right-2 text-primary/5 group-hover:text-primary/10 transition-colors" />
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 text-lg leading-relaxed mb-8 relative z-10">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary font-display font-bold text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role} · {t.project}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
              Building the Web, <span className="text-gradient">One Pixel at a Time</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2024, NestHub Solution is a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences. In just 2 years, we've built a reputation for delivering quality work that drives real results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-8 hover-lift text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="glass-card rounded-2xl p-12 md:p-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Build Something{" "}
              <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's turn your ideas into reality. Get in touch and let's start your next project together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Calendly CTA */}
          <AnimatedSection className="max-w-5xl mx-auto mb-20">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[320px]">
                  <img src={calendlyImage} alt="Schedule a consultation call" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/20 lg:to-background/80" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                    <Calendar size={16} /> Schedule a Call
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Book a Free <span className="text-gradient">1-on-1 Discovery Call</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Let's discuss your project in detail. Pick a time that works for you and we'll walk through your vision, goals, and how we can bring it to life.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {[{ icon: Clock, text: "30 min session" }, { icon: Video, text: "Video or Phone" }].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <item.icon size={16} className="text-primary" /> {item.text}
                      </div>
                    ))}
                  </div>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto">
                    Book Your Free Call <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
              Or Send Us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-lg text-muted-foreground">Have an idea? We'd love to hear about it.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <AnimatedSection className="lg:col-span-2 space-y-6" delay={0.1}>
              {[
                { icon: Mail, label: "Email", value: "workquerysol@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 8188941304" },
                { icon: MapPin, label: "Office", value: "Jaipur, Rajasthan, India" },
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
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" disabled={sending} className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
                  {sending ? (<>Sending... <Loader2 size={18} className="animate-spin" /></>) : (<>Send Message <Send size={18} /></>)}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
