"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import styles from "./Nav.module.css";

const NAV_ITEMS = ["Impact", "Projects", "Credentials", "Contact"];

interface NavProps {
  /** On the homepage we scroll to sections; on project pages we link back */
  mode?: "home" | "project";
}

export default function Nav({ mode = "home" }: NavProps) {
  const [activeNav, setActiveNav] = useState("Impact");
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/London",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (mode !== "home") return;
    const handleScroll = () => {
      const ids = ["impact", "projects", "credentials", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveNav(NAV_ITEMS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Dr. Cyril<em>V</em>
          </Link>

          {mode === "home" ? (
            <ul className={styles.links}>
              {NAV_ITEMS.map((n) => (
                <li
                  key={n}
                  className={activeNav === n ? styles.active : ""}
                  onClick={() => scrollTo(n)}
                >
                  {n}
                </li>
              ))}
            </ul>
          ) : (
            <ul className={styles.links}>
              <li>
                <Link href="/#projects">← Back to Projects</Link>
              </li>
            </ul>
          )}

          <div className={styles.right}>
            <span className={styles.time}>London {time}</span>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
            </button>
            <a className={styles.cta} href="mailto:c.vijayakumar@lse.ac.uk">
              Get in Touch
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <ul className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {mode === "home" ? (
          NAV_ITEMS.map((n) => (
            <li key={n} onClick={() => scrollTo(n)}>
              {n}
            </li>
          ))
        ) : (
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/#projects">← Back to Projects</Link>
          </li>
        )}
      </ul>
    </>
  );
}
