import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold mb-3">
            <span className="text-gradient">Nextgen</span> Solution
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            We craft digital experiences that drive growth. From concept to launch, we build websites that make an impact.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm text-foreground">Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Services", "Portfolio", "Testimonials", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@nextgensolution.com</span>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
      <div className="glow-line mt-10 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nextgen Solution. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
