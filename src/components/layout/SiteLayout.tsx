import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteLayout() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const updateScroll = () => {
      const scrollable = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setScrollProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
      setShowBackToTop(window.scrollY > 480);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only z-50 rounded-full bg-spark px-5 py-3 font-bold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-navy transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <button
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={scrollToTop}
        tabIndex={showBackToTop ? 0 : -1}
        aria-hidden={!showBackToTop}
        className={`fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-white/20 bg-navy text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-spark hover:text-navy focus-visible:outline-spark sm:bottom-8 sm:right-8 motion-reduce:transition-none ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp size={21} aria-hidden="true" />
      </button>
    </div>
  );
}
