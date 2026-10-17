import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import ApplyButton from "../ui/ApplyButton";
import Logo from "./Logo";
import { NAV } from "./nav";

const link = ({ isActive }: { isActive: boolean }) =>
  `inline-flex min-h-11 items-center border-b-2 px-1 text-sm font-semibold transition-colors ${isActive ? "border-navy text-navy" : "border-transparent text-navy/75 hover:text-navy"}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-spark">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" aria-label="SkillSpark Bootcamp home" className="shrink-0">
          <Logo className="h-8 sm:h-9" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={link}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="hidden lg:block"><ApplyButton onBlue /></div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-navy hover:bg-white/30 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto bg-white px-5 py-6 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) => `flex min-h-14 items-center border-b border-line text-xl font-bold ${isActive ? "text-spark-dark" : "text-navy"}`}
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6"><ApplyButton className="w-full" /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
