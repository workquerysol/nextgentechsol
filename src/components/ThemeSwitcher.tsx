import { useState } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Teal",
    primary: "175 80% 50%",
    accent: "175 80% 50%",
    gradient: "linear-gradient(135deg, hsl(175 80% 50%), hsl(200 90% 55%))",
    preview: "hsl(175 80% 50%)",
  },
  {
    name: "Violet",
    primary: "270 80% 60%",
    accent: "270 80% 60%",
    gradient: "linear-gradient(135deg, hsl(270 80% 60%), hsl(290 90% 55%))",
    preview: "hsl(270 80% 60%)",
  },
  {
    name: "Rose",
    primary: "350 80% 60%",
    accent: "350 80% 60%",
    gradient: "linear-gradient(135deg, hsl(350 80% 60%), hsl(10 90% 55%))",
    preview: "hsl(350 80% 60%)",
  },
  {
    name: "Amber",
    primary: "38 92% 55%",
    accent: "38 92% 55%",
    gradient: "linear-gradient(135deg, hsl(38 92% 55%), hsl(25 90% 50%))",
    preview: "hsl(38 92% 55%)",
  },
  {
    name: "Emerald",
    primary: "160 84% 40%",
    accent: "160 84% 40%",
    gradient: "linear-gradient(135deg, hsl(160 84% 40%), hsl(140 70% 45%))",
    preview: "hsl(160 84% 40%)",
  },
  {
    name: "Blue",
    primary: "220 90% 56%",
    accent: "220 90% 56%",
    gradient: "linear-gradient(135deg, hsl(220 90% 56%), hsl(240 80% 60%))",
    preview: "hsl(220 90% 56%)",
  },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Teal");

  const applyTheme = (theme: (typeof themes)[0]) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.primary);
    root.style.setProperty("--ring", theme.primary);
    root.style.setProperty("--sidebar-primary", theme.primary);
    root.style.setProperty("--sidebar-ring", theme.primary);
    root.style.setProperty("--gradient-primary", theme.gradient);
    root.style.setProperty(
      "--gradient-glow",
      `radial-gradient(ellipse at center, hsl(${theme.primary} / 0.15), transparent 70%)`
    );
    root.style.setProperty(
      "--shadow-glow",
      `0 0 40px hsl(${theme.primary} / 0.2)`
    );
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
            className="absolute bottom-16 left-0 p-3 rounded-xl bg-card border border-border shadow-xl flex flex-col gap-2 min-w-[140px]"
          >
            <span className="text-xs font-semibold text-muted-foreground px-1 mb-1">
              Color Theme
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
