import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import projectNgo from "@/assets/project-ngo.jpg";
import projectHoney from "@/assets/project-honey.jpg";
import projectTrading from "@/assets/project-trading.jpg";

const projects = [
  {
    title: "Hope Foundation",
    category: "NGO Website",
    description:
      "A compassionate, impact-driven website for a non-profit organization. Features donation integration, volunteer sign-up, event management, and storytelling sections that highlight community impact.",
    tags: ["React", "Tailwind CSS", "Payment Gateway", "CMS"],
    image: projectNgo,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Golden Harvest Honey",
    category: "E-Commerce",
    description:
      "A warm, inviting e-commerce platform for an artisanal honey brand. Complete with product catalog, cart system, secure checkout, and a blog showcasing the honey-making journey from hive to jar.",
    tags: ["E-Commerce", "Stripe", "Product Catalog", "Blog"],
    image: projectHoney,
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "TradeView Academy",
    category: "Trading Platform",
    description:
      "An educational trading platform combining real-time market data visualization with structured learning modules. Features interactive charts, paper trading, courses, and community discussions.",
    tags: ["Real-time Data", "Charts", "LMS", "WebSockets"],
    image: projectTrading,
    color: "from-emerald-500/20 to-cyan-500/20",
  },
];

const Portfolio = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Work
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-5">
              Projects We're{" "}
              <span className="text-gradient">Proud Of</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Every project tells a story. Here are three recent builds that
              showcase our craft, creativity, and commitment to results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-24">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden group ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 z-10 pointer-events-none`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
                        View Details <ExternalLink size={16} />
                      </span>
                    </div>
                  </motion.div>

                  {/* Info */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-secondary-foreground text-xs font-medium"
                        >
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

      {/* Stats bar */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-border/50">
            {[
              { value: "3", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "∞", label: "Ideas to Explore" },
            ].map((stat) => (
              <AnimatedSection key={stat.label} className="py-12 text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              Want to Be Our{" "}
              <span className="text-gradient">Next Success</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's collaborate and build something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;
