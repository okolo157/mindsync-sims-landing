import logoLight from "@/assets/mind-light.png";
import logoDark from "@/assets/mind-dark.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#02040a] border-t border-slate-200 dark:border-white/5 py-8 text-slate-600 dark:text-slate-400">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
          <div className="flex items-center justify-center">
            <img
              src={logoLight}
              alt="Mindsync Logo"
              className="h-14 w-auto dark:hidden"
            />
            <img
              src={logoDark}
              alt="Mindsync Logo"
              className="h-14 w-auto hidden dark:block"
            />
          </div>
          <span className="text-sm font-medium sm:border-l border-slate-200 dark:border-white/10 sm:pl-3 sm:ml-3 text-center">
            © {new Date().getFullYear()} Mindsync
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-medium">
          <a
            href="/privacy"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="mailto:hello@mindsync.com"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
}
