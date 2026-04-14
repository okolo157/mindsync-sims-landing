import { Sun, Moon, Menu, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { CTAButton } from "@/components/ui/ctaButton";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { preloadCalendly } from "@/utils/calendly";
import logoDark from "@/assets/mind-dark.png";
import logoLight from "@/assets/mind-light.png";
import { InteractiveBadge } from "../ui/InteractiveBadge";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  // Determine effective theme for logo
  useEffect(() => {
    const checkTheme = () => {
      if (theme === "system") {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      } else {
        setIsDark(theme === "dark" || theme === "dark-blue");
      }
    };

    checkTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") checkTheme();
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 bg-white/70 dark:bg-black/20 backdrop-blur-md border-b border-white/10 dark:border-white/5 transition-all duration-300">
      <div className="flex items-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* LEFT — Logo */}
        <div className="flex flex-1 items-center gap-3">
          <img
            src={isDark ? logoDark : logoLight}
            alt="Logo"
            onClick={() => navigate("/")}
            className="w-20 sm:w-28 h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
          <InteractiveBadge variant="primary" className="hidden sm:inline-flex scale-90">
            SIMS
          </InteractiveBadge>
        </div>

        {/* CENTER — Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-semibold tracking-wide text-black dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/products")}
            className="text-sm font-semibold tracking-wide text-black dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            Products
          </button>

          <button
            onClick={() => navigate("/plans")}
            className="text-sm font-semibold tracking-wide text-black dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            Plans
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="text-sm font-semibold tracking-wide text-black dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>

        {/* RIGHT — Actions */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-slate-300" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600" />
            )}
          </Button>

          <CTAButton
            onClick={() => navigate("/schedule-demo")}
            onMouseEnter={preloadCalendly}
            size="sm"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0"
            icon={Calendar}
          >
            Book Demo
          </CTAButton>
        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-6 mt-10">
                <button
                  onClick={() => navigate("/")}
                  className="text-lg font-semibold text-slate-700 dark:text-slate-300"
                >
                  Home
                </button>

                <button
                  onClick={() => navigate("/products")}
                  className="text-lg font-semibold text-slate-700 dark:text-slate-300"
                >
                  Products
                </button>

                <button
                  onClick={() => navigate("/plans")}
                  className="text-lg font-semibold text-slate-700 dark:text-slate-300"
                >
                  Plans
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-lg font-semibold text-slate-700 dark:text-slate-300"
                >
                  Contact
                </button>

                <CTAButton
                  onClick={() => navigate("/schedule-demo")}
                  onMouseEnter={preloadCalendly}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  icon={Calendar}
                >
                  Book Demo
                </CTAButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
