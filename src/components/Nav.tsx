"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import styles from "./Nav.module.css";

/** Anchors on the homepage, or a route of their own. */
const NAV_ITEMS = [
  { key: "work", label: "Work", href: "#work" },
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

  // Mobile menu: lock page scroll while open, close on Escape or when the viewport grows past the breakpoint
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 861px)");
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
  const links = NAV_ITEMS.map((n) => (
    <li key={n.key}>
      <a
        href={resolve(n.href)}
        onClick={close}
        aria-current={current === n.key ? "page" : undefined}
        className={current === n.key ? styles.current : undefined}
      >
        {n.label}
      </a>
    </li>
  ));

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={close} aria-label="Cyril Vijayakumar, home">
            <Logo size={30} />
          </Link>

          <ul className={styles.links}>{links}</ul>

          <div className={styles.right}>
            <button className={styles.icon} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} strokeWidth={1.75} /> : <Moon size={14} strokeWidth={1.75} />}
            </button>
            <a className={styles.cta} href={resolve("#contact")}>
              Get in touch ↗
            </a>
            <button
              className={`${styles.icon} ${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <ul id="mobile-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {links}
      </ul>
    </>
  );
}
