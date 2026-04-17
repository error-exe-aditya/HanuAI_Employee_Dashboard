"use client";

import { motion } from "framer-motion";
import { teamData } from "../data/team";
import styles from "./TeamShowcaseSection.module.css";
import { Circle } from "lucide-react";

export default function TeamShowcaseSection() {
  return (
    <section className={styles.showcaseWrapper}>
      <div className={styles.sectionHeading}>
        <h2 className="text-display-xl" style={{ marginTop: "-25vh", fontSize: "5rem" }}>Meet Our Team</h2>
      </div>
      {teamData.map((member, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={member.id} className={styles.stickySection}>
            <div className={`max-w-container ${styles.contentGrid}`}>
              {/* Conditional flex ordering based on isEven */}
              <motion.div
                className={styles.employeeColumn}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  order: isEven ? 1 : 2,
                  zIndex: 10,
                  marginTop: "-350px",
                  // Symmetrically pull the elements tighter across the gap
                  marginRight: isEven ? "-60px" : "0",
                  marginLeft: isEven ? "0" : "-60px",
                  // Push the image specifically toward the gap boundary so the math is perfectly mirrored
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isEven ? "flex-end" : "flex-start"
                }}
              >
                <div className={styles.employeeImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} className={styles.employeeImage} />
                </div>
                {/* Re-align text to the inner boundaries as well */}
                <h3 className="text-display-lg" style={{ fontSize: "2.5rem", marginTop: "1rem", textAlign: isEven ? "right" : "left", width: "100%" }}>{member.name}</h3>
                <p className="text-label-md" style={{ color: "var(--primary)", marginTop: "0.5rem", textAlign: isEven ? "right" : "left", width: "100%" }}>{member.role}</p>
              </motion.div>

              <motion.div
                className={styles.projectColumn}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{
                  order: isEven ? 2 : 1,
                  zIndex: 5,
                  // Pad the card content to make room symmetrically
                  paddingLeft: isEven ? "100px" : "3rem",
                  paddingRight: isEven ? "3rem" : "100px"
                }}
              > {/* Vision line — shown above project name */}
                <p className={styles.visionquote}>"{member.vision}"</p>
                <br></br>
                <h4 className="text-headline-md" style={{ color: "var(--secondary)", marginBottom: "1rem" }}>{member.projectName}</h4>

                <p className="text-body-lg" style={{ marginBottom: "1.5rem" }}>{member.projectDescription}</p>

                <ul className={styles.bulletList}>
                  {member.bulletPoints.map((bp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.1) }}
                    >
                      <Circle size={10} fill="currentColor" className={styles.bulletIcon} />
                      <span className="text-title-md">{bp}</span>
                    </motion.li>
                  ))}
                </ul>

                <a href={member.projectLink} target="_blank" rel="noreferrer" className={styles.projectLinkWrapper}>
                  <div className={styles.projectImageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.projectImage} alt={member.projectName} className={styles.projectImage} />
                    <div className={`${styles.projectOverlay} cinematic-glass`}>
                      {/* <span className="btn-primary">View Project</span> */}
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
