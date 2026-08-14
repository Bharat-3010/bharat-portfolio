import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "DevOps", href: "#devops" },
  { name: "Credentials", href: "#credentials" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();

  /*
   * Detect the section currently visible on screen.
   */
  useMotionValueEvent(scrollY, "change", () => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const scrollPosition = window.scrollY + 180;

    let currentSection = "about";

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  });

  /*
   * Smoothly navigate to a section.
   * This is specifically used for mobile navigation.
   */
  const handleMobileNavigation = (href) => {
    const section = document.querySelector(href);

    setMobileOpen(false);

    if (!section) {
      return;
    }

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      /*
       * Update browser URL without jumping.
       */
      window.history.replaceState(null, "", href);
    }, 150);
  };

  /*
   * Go back to the top.
   */
  const handleLogoClick = (event) => {
    event.preventDefault();

    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* =========================================
            LOGO
        ========================================= */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="font-mono text-sm font-semibold text-white"
        >
          <span className="text-emerald-400">~/</span>
          bharat
        </a>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}
        <div className="hidden items-center gap-1 lg:flex">

          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 font-mono text-xs transition ${
                  isActive
                    ? "text-emerald-400"
                    : "text-gray-500 hover:text-gray-200"
                }`}
              >
                {item.name}

                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute bottom-0 left-3 right-3 h-px bg-emerald-400"
                  />
                )}
              </a>
            );
          })}

        </div>

        {/* =========================================
            DESKTOP RESUME
        ========================================= */}
        <a
          href="/Bharat_Mohite_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 font-mono text-xs text-emerald-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 lg:block"
        >
          Resume ↗
        </a>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}
        <button
          type="button"
          onClick={() => setMobileOpen((previous) => !previous)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-emerald-400/30 hover:text-emerald-400 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="relative flex h-5 w-5 flex-col justify-center">

            {/* Top line */}
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 6 : -5,
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 h-px w-5 bg-current"
            />

            {/* Middle line */}
            <motion.span
              animate={{
                opacity: mobileOpen ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 h-px w-5 bg-current"
            />

            {/* Bottom line */}
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -6 : 5,
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 h-px w-5 bg-current"
            />

          </div>
        </button>

      </nav>

      {/* =========================================
          MOBILE MENU
      ========================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-white/5 bg-black/95 lg:hidden"
          >

            <div className="px-6 py-5">

              {/* Navigation links */}
              <div className="space-y-1">

                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() =>
                        handleMobileNavigation(item.href)
                      }
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-mono text-sm transition ${
                        isActive
                          ? "bg-emerald-400/5 text-emerald-400"
                          : "text-gray-500 hover:bg-white/[0.03] hover:text-gray-200"
                      }`}
                    >
                      <span>{item.name}</span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                    </button>
                  );
                })}

              </div>

              {/* =================================
                  MOBILE RESUME
              ================================= */}
              <a
                href="/Bharat_Mohite_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 font-mono text-xs text-emerald-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                View Resume ↗
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;