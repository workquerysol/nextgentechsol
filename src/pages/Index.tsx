import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap, Globe, BarChart3, Shield } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Code2, title: "Web Development", desc: "Custom-built websites with modern frameworks and blazing performance." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces that delight users and drive conversions." },
  { icon: Zap, title: "Performance", desc: "Lightning-fast load times and optimized user experiences." },
  { icon: Globe, title: "SEO & Marketing", desc: "Get found online with data-driven strategies that work." },
  { icon: BarChart3, title: "Analytics", desc: "Track, measure, and optimize with actionable insights." },
  { icon: Shield, title: "Security", desc: "Enterprise-grade security to protect your digital assets." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
  { value: "8+", label: "Years Experience" },
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Grid lines decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-border/30" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-border/30" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-border/30" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                delay={i * 0.1}
                className={`py-10 md:py-14 text-center ${i < 3 ? "border-r border-border/50" : ""}`}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
              Services That <span className="text-gradient">Deliver</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-8 hover-lift group cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
