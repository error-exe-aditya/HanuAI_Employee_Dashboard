"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Cloud, Database, Activity, Shield, Network } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Develop intelligent models for prediction, detection, and automation.",
    icon: <Cpu size={32} />,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" /* Temporary Unsplash AI abstract */
  },
  {
    title: "Cloud Systems",
    description: "Build scalable backend systems and distributed infrastructure.",
    icon: <Cloud size={32} />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Data Engineering",
    description: "Process, analyze, and transform large-scale data.",
    icon: <Database size={32} />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Automation & Monitoring",
    description: "Create systems that improve efficiency and operational monitoring.",
    icon: <Activity size={32} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI-Powered Road Intelligence",
    description: "AI-driven solutions for road safety, defect detection, and infrastructure management.",
    icon: <Shield size={32} />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Edge & IoT Systems",
    description: "Deploy remote autonomous systems with low-latency device communication.",
    icon: <Network size={32} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "High-Performance Computing",
    description: "Accelerate complex simulations and massive parallel dataset workloads.",
    icon: <Cpu size={32} />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Smart Road Survey Systems",
    description: "process large-scale road imagery using AI to generate accurate survey data.",
    icon: <Cpu size={32} />,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ServicesSection() {
  return (
    <section className={`section-pad max-w-container ${styles.servicesSection}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ marginTop: "-15vh", position: "relative", zIndex: 10 }} // Overlaps Hero
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="text-display-lg" style={{ marginBottom: "1rem" }}>Our Core Work</h2>
          <p className="text-body-lg" style={{ color: "var(--on-surface-variant)" }}>Driving deep tech across eight main disciplines.</p>
        </div>

        <div className={styles.gridContainer}>
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className={`ghost-card ${styles.serviceCard}`}>

              {/* Background Image injected here */}
              <div
                className={styles.cardBackgroundImage}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Consistent darkblue hue overlay */}
              <div className={styles.cardOverlayTint} />

              <div className={styles.cardContent}>
                {/* Icons temporarily removed per user request */}
                <h3 className="text-title-md" style={{ marginBottom: "0.75rem", color: "var(--on-surface)" }}>
                  {service.title}
                </h3>
                <p className="text-body-lg" style={{ color: "var(--on-surface-variant)" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
