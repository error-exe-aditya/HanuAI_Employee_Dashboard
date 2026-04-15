"use client";

import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ContinuityElements() {
  const { scrollYProgress } = useScroll();
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  // Adding a slight spring smooths out hardware pointer chop significantly
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // Both mouse and touch tracking
    const updatePosition = (clientX: number, clientY: number) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // passive: true prevents blocking the main scrolling thread
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  // Single massive rectangle covers top-to-bottom, moves left-to-right on scroll
  const xBlockMain = useTransform(scrollYProgress, [0, 1], ["-40vw", "100vw"]);

  const verticalBlockStyle: React.CSSProperties = {
    position: "absolute",
    top: "-10vh",
    height: "120vh", // Covers top to bottom consistently
    border: "2px solid rgba(222, 229, 255, 0.1)",
    boxShadow: "var(--ambient-shadow)",
  };

  // Construct efficient CSS values outside React render cycles
  const maskImageTemplate = useMotionTemplate`radial-gradient(circle 800px at ${smoothX}px ${smoothY}px, black 30%, transparent 100%)`;
  const backgroundTemplate = useMotionTemplate`radial-gradient(circle 400px at ${smoothX}px ${smoothY}px, rgba(59, 191, 250, 0.08), transparent 80%)`;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 0, overflow: "hidden", background: "var(--surface)" }}>

      {/* Interactive Cyber Grid reacting to touch and mouse */}
      <motion.div style={{
        position: "absolute",
        width: "101%",
        height: "101%",
        backgroundImage: "linear-gradient(rgba(163, 170, 196, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 170, 196, 0.2) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        opacity: 0.9,
        // The grid lights up intensely closely around the cursor / finger without re-renders
        maskImage: maskImageTemplate,
        WebkitMaskImage: maskImageTemplate
      }} />

      {/* Single Massive Left-to-Right sliding vertical block */}
      <motion.div
        style={{
          ...verticalBlockStyle,
          width: "45vw",
          background: "var(--surface-container-low)",
          opacity: 0.8,
          x: xBlockMain
        }}
      />

      {/* Ambient Spot Glow Tracker */}
      <motion.div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          background: backgroundTemplate,
          zIndex: 1
        }}
      />
    </div>
  );
}
