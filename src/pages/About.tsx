import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Target, title: "Innovation First", desc: "We stay ahead of the curve, leveraging the latest technologies to deliver forward-thinking solutions." },
  { icon: Eye, title: "Transparency", desc: "Open communication and honest timelines. You're always in the loop on your project's progress." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is our success. Every decision we make is aligned with your business goals." },
];

const milestones = [
  { year: "2018", event: "Founded in San Francisco" },
  { year: "2019", event: "First 25 clients onboarded" },
  { year: "2020", event: "Expanded to 30+ team members" },
  { year: "2022", event: "100th project milestone" },
  { year: "2024", event: "Opened European office" },
  { year: "2025", event: "150+ projects delivered" },
];

const About = () => (
  <PageTransition>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-5">
            Building the Web,{" "}
            <span className="text-gradient">One Pixel at a Time</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Nextgen Solution is a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences.
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
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

        {/* Timeline */}
        <AnimatedSection className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.08}>
                <div className="flex gap-6 items-start pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border/50 mt-1" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="text-primary font-display font-bold text-sm">{m.year}</span>
                    <p className="text-foreground mt-0.5">{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Work With Us <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default About;
