import { useState } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Midnight Teal",
    preview: "hsl(175 80% 50%)",
    vars: {
      "--background": "220 20% 4%",
      "--foreground": "210 20% 92%",
      "--card": "220 18% 8%",
      "--card-foreground": "210 20% 92%",
      "--popover": "220 18% 8%",
      "--popover-foreground": "210 20% 92%",
      "--primary": "175 80% 50%",
      "--primary-foreground": "220 20% 4%",
      "--secondary": "220 16% 14%",
      "--secondary-foreground": "210 20% 85%",
      "--muted": "220 14% 12%",
      "--muted-foreground": "215 12% 50%",
      "--accent": "175 80% 50%",
      "--accent-foreground": "220 20% 4%",
      "--border": "220 14% 16%",
      "--input": "220 14% 16%",
      "--ring": "175 80% 50%",
      "--gradient-primary": "linear-gradient(135deg, hsl(175 80% 50%), hsl(200 90% 55%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(175 80% 50% / 0.15), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(220 18% 10%), hsl(220 18% 6%))",
      "--shadow-glow": "0 0 40px hsl(175 80% 50% / 0.2)",
    },
  },
  {
    name: "Deep Violet",
    preview: "hsl(270 80% 60%)",
    vars: {
      "--background": "260 25% 5%",
      "--foreground": "260 15% 92%",
      "--card": "260 22% 9%",
      "--card-foreground": "260 15% 92%",
      "--popover": "260 22% 9%",
      "--popover-foreground": "260 15% 92%",
      "--primary": "270 80% 60%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "260 18% 15%",
      "--secondary-foreground": "260 15% 85%",
      "--muted": "260 16% 12%",
      "--muted-foreground": "260 10% 50%",
      "--accent": "270 80% 60%",
      "--accent-foreground": "0 0% 100%",
      "--border": "260 16% 18%",
      "--input": "260 16% 18%",
      "--ring": "270 80% 60%",
      "--gradient-primary": "linear-gradient(135deg, hsl(270 80% 60%), hsl(290 90% 55%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(270 80% 60% / 0.15), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(260 22% 11%), hsl(260 22% 7%))",
      "--shadow-glow": "0 0 40px hsl(270 80% 60% / 0.2)",
    },
  },
  {
    name: "Warm Rose",
    preview: "hsl(350 80% 60%)",
    vars: {
      "--background": "350 15% 5%",
      "--foreground": "350 10% 92%",
      "--card": "350 12% 9%",
      "--card-foreground": "350 10% 92%",
      "--popover": "350 12% 9%",
      "--popover-foreground": "350 10% 92%",
      "--primary": "350 80% 60%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "350 12% 15%",
      "--secondary-foreground": "350 10% 85%",
      "--muted": "350 10% 12%",
      "--muted-foreground": "350 8% 50%",
      "--accent": "350 80% 60%",
      "--accent-foreground": "0 0% 100%",
      "--border": "350 10% 18%",
      "--input": "350 10% 18%",
      "--ring": "350 80% 60%",
      "--gradient-primary": "linear-gradient(135deg, hsl(350 80% 60%), hsl(10 90% 55%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(350 80% 60% / 0.15), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(350 12% 11%), hsl(350 12% 7%))",
      "--shadow-glow": "0 0 40px hsl(350 80% 60% / 0.2)",
    },
  },
  {
    name: "Ocean Blue",
    preview: "hsl(220 90% 56%)",
    vars: {
      "--background": "222 25% 4%",
      "--foreground": "210 20% 92%",
      "--card": "222 22% 8%",
      "--card-foreground": "210 20% 92%",
      "--popover": "222 22% 8%",
      "--popover-foreground": "210 20% 92%",
      "--primary": "220 90% 56%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "222 18% 14%",
      "--secondary-foreground": "210 18% 85%",
      "--muted": "222 16% 12%",
      "--muted-foreground": "220 12% 50%",
      "--accent": "220 90% 56%",
      "--accent-foreground": "0 0% 100%",
      "--border": "222 16% 18%",
      "--input": "222 16% 18%",
      "--ring": "220 90% 56%",
      "--gradient-primary": "linear-gradient(135deg, hsl(220 90% 56%), hsl(240 80% 60%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(220 90% 56% / 0.15), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(222 22% 10%), hsl(222 22% 6%))",
      "--shadow-glow": "0 0 40px hsl(220 90% 56% / 0.2)",
    },
  },
  {
    name: "Amber Gold",
    preview: "hsl(38 92% 55%)",
    vars: {
      "--background": "30 18% 5%",
      "--foreground": "35 15% 90%",
      "--card": "30 15% 9%",
      "--card-foreground": "35 15% 90%",
      "--popover": "30 15% 9%",
      "--popover-foreground": "35 15% 90%",
      "--primary": "38 92% 55%",
      "--primary-foreground": "30 18% 5%",
      "--secondary": "30 14% 15%",
      "--secondary-foreground": "35 12% 85%",
      "--muted": "30 12% 12%",
      "--muted-foreground": "30 10% 50%",
      "--accent": "38 92% 55%",
      "--accent-foreground": "30 18% 5%",
      "--border": "30 12% 18%",
      "--input": "30 12% 18%",
      "--ring": "38 92% 55%",
      "--gradient-primary": "linear-gradient(135deg, hsl(38 92% 55%), hsl(25 90% 50%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(38 92% 55% / 0.15), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(30 15% 11%), hsl(30 15% 7%))",
      "--shadow-glow": "0 0 40px hsl(38 92% 55% / 0.2)",
    },
  },
  {
    name: "Emerald",
    preview: "hsl(160 84% 40%)",
    vars: {
      "--background": "160 18% 4%",
      "--foreground": "160 12% 92%",
      "--card": "160 15% 8%",
      "--card-foreground": "160 12% 92%",
      "--popover": "160 15% 8%",
      "--popover-foreground": "160 12% 92%",
      "--primary": "160 84% 40%",
      "--primary-foreground": "160 18% 4%",
      "--secondary": "160 14% 14%",
      "--secondary-foreground": "160 10% 85%",
      "--muted": "160 12% 11%",
      "--muted-foreground": "160 8% 48%",
      "--accent": "160 84% 40%",
      "--accent-foreground": "160 18% 4%",
      "--border": "160 12% 16%",
      "--input": "160 12% 16%",
      "--ring": "160 84% 40%",
      "--gradient-primary": "linear-gradient(135deg, hsl(160 84% 40%), hsl(140 70% 45%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(160 84% 40% / 0.15), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(160 15% 10%), hsl(160 15% 6%))",
      "--shadow-glow": "0 0 40px hsl(160 84% 40% / 0.2)",
    },
  },
  {
    name: "Light Minimal",
    preview: "hsl(220 14% 96%)",
    vars: {
      "--background": "0 0% 98%",
      "--foreground": "220 20% 10%",
      "--card": "0 0% 100%",
      "--card-foreground": "220 20% 10%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "220 20% 10%",
      "--primary": "220 70% 50%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "220 14% 92%",
      "--secondary-foreground": "220 14% 30%",
      "--muted": "220 10% 94%",
      "--muted-foreground": "220 10% 45%",
      "--accent": "220 70% 50%",
      "--accent-foreground": "0 0% 100%",
      "--border": "220 13% 88%",
      "--input": "220 13% 88%",
      "--ring": "220 70% 50%",
      "--gradient-primary": "linear-gradient(135deg, hsl(220 70% 50%), hsl(250 70% 55%))",
      "--gradient-glow": "radial-gradient(ellipse at center, hsl(220 70% 50% / 0.08), transparent 70%)",
      "--gradient-card": "linear-gradient(135deg, hsl(0 0% 100%), hsl(220 14% 97%))",
      "--shadow-glow": "0 0 40px hsl(220 70% 50% / 0.1)",
      "--shadow-card": "0 8px 32px hsl(220 20% 80% / 0.2)",
    },
  },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Midnight Teal");

  const applyTheme = (theme: (typeof themes)[0]) => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    setActive(theme.name);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Switch theme"
      >
        <Palette size={20} className="text-primary" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 p-3 rounded-xl bg-card border border-border shadow-xl flex flex-col gap-2 min-w-[160px]"
          >
            <span className="text-xs font-semibold text-muted-foreground px-1 mb-1">
              Full Theme
            </span>
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => applyTheme(theme)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === theme.name
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-border/50 shrink-0"
                  style={{ background: theme.preview }}
                />
                {theme.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
