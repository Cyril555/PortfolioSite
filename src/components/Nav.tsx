"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import styles from "./Nav.module.css";

const NAV_ITEMS = [
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

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const links =
    mode === "home" ? (
      NAV_ITEMS.map((n) => (
        <li key={n.id}>
          <a href={`#${n.id}`} onClick={() => setMenuOpen(false)}>
            {n.label}
          </a>
        </li>
      ))
    ) : (
      <li>
        <Link href="/#projects">← All projects</Link>
      </li>
    );

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Cyril<span>V.</span>
          </Link>

          <ul className={styles.links}>{links}</ul>

          <div className={styles.right}>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
            </button>
            <a className={styles.cta} href="#contact">
              Get in touch
            </a>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <ul className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>{links}</ul>
    </>
  );
}
