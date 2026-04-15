"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section style={{ 
      minHeight: "60vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: "transparent",
      padding: "2rem",
      marginTop: "-15vh", // Pulls the section significantly upward
      position: "relative",
      zIndex: 5
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: "center", maxWidth: "800px" }}
      >
        <h2 className="text-display-lg" style={{ marginBottom: "2rem", color: "var(--primary)" }}>
          The Future is Computed.
        </h2>
        <p className="text-headline-md" style={{ color: "var(--on-surface)", lineHeight: "1.4" }}>
          &quot;Our mission is to build intelligent technology systems that transform infrastructure, safety, and decision-making through data and AI.&quot;
        </p>
      </motion.div>
    </section>
  );
}
