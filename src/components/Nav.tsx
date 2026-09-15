"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

/** Anchors on the homepage, or a route of their own. */
const NAV_ITEMS = [
  { key: "work", label: "Projects", href: "#work" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "articles", label: "Articles", href: "/articles" },
  { key: "contact", label: "Contact", href: "#contact" },
];

interface NavProps {
  /** On the homepage anchors scroll in place; on other pages they point back to the homepage */
  mode?: "home" | "page";
  /** Nav item to mark as the current page */
  current?: string;
}

export default function Nav({ mode = "home", current }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  // Mobile sheet: lock page scroll while open, close on Escape or once the viewport grows past the breakpoint
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 821px)");
    const onResize = () => mq.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const close = () => setMenuOpen(false);
  const resolve = (href: string) => (href.startsWith("#") && mode !== "home" ? `/${href}` : href);

  return (
    <>
      <header className={`onInkChrome ${styles.bar} ${menuOpen ? styles.barSolid : ""}`}>
        <div className={`sheet ${styles.inner}`}>
          <Link href="/" className={styles.logo} onClick={close}>
            <span className={styles.mark} aria-hidden="true" />
            <span>Cyril Vijayakumar</span>
          </Link>

          <nav className={styles.desktop} aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((n) => (
              <li key={n.key}>
                <a
                  href={resolve(n.href)}
                  aria-current={current === n.key ? "page" : undefined}
                  className={current === n.key ? styles.current : undefined}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
            <button className={styles.theme} onClick={toggleTheme} aria-label="Switch to the other colour scheme">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <a className={styles.cta} href={resolve("#contact")}>
              Get in touch
            </a>
            <button
              className={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`onInkChrome ${styles.menuSheet}`} hidden={!menuOpen}>
        <ul>
          {NAV_ITEMS.map((n) => (
            <li key={n.key}>
              <a href={resolve(n.href)} onClick={close} aria-current={current === n.key ? "page" : undefined}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button className={styles.sheetTheme} onClick={toggleTheme}>
          {theme === "dark" ? "Switch to light" : "Switch to dark"}
        </button>
      </div>
    </>
  );
}
