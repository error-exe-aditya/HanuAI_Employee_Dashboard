"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);
  // Starts at 1 so the top half of the heroic image is perfectly solid and hides the grid
  const opacityBackground = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const opacityForeground = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      {/* Background with initial zoom + parallax scroll + soft bottom fade */}
      <motion.div
        className={styles.heroBackground}
        style={{
          y: yBackground,
          opacity: opacityBackground,
          backgroundImage: "url('/images/hero-pg.png')",
          // Top 50% is absolutely solid. Fades into the cyber-grid only on the bottom half.
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, transparent 100%)"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Overlay to dim background fades out alongside image */}
      <motion.div
        className={styles.heroOverlay}
      />

      <motion.div
        className={styles.heroContent}
        style={{ opacity: opacityForeground, y: yForeground, paddingLeft: "5vw", paddingRight: "5vw", margin: 0, maxWidth: "100%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo uploaded by user */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo_no.png" alt="Company Logo" style={{ maxHeight: "80px", marginBottom: "1.5rem", marginLeft: "-1.5vw", filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))" }} />
          <h1 className="text-display-lg" style={{ fontSize: "3.2rem", marginBottom: "1.5rem", color: "var(--on-surface)", textShadow: "0 10px 40px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)" }}>
            Reshaping AI dynamics
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-headline-md" style={{ maxWidth: "800px", color: "var(--on-surface)", textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
            Building intelligent solutions for infrastructure, data systems, and automation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
