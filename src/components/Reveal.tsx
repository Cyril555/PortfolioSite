"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    setAnimate(true);
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        styles.root,
        animate && !visible ? styles.pending : "",
        animate && visible ? styles.shown : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        animate && visible
          ? { transitionDelay: `${delay}s` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
