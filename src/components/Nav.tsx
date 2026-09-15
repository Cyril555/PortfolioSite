"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { label: "Now", id: "now" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

interface NavProps {
  /** On the homepage we scroll to sections; on project pages we link back */
  mode?: "home" | "project";
}

export default function Nav({ mode = "home" }: NavProps) {
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
  const prefix = mode === "home" ? "" : "/";
  const links = NAV_ITEMS.map((n) => (
    <li key={n.id}>
      <a href={`${prefix}#${n.id}`} onClick={close}>
        {n.label}
      </a>
    </li>
  ));

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={close}>
            <span className={styles.mark} aria-hidden="true" />
            Cyril Vijayakumar
          </Link>

          <ul className={styles.links}>{links}</ul>

          <div className={styles.right}>
            <button className={styles.icon} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} strokeWidth={1.75} /> : <Moon size={14} strokeWidth={1.75} />}
            </button>
            <a className={styles.cta} href={`${prefix}#contact`}>
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
