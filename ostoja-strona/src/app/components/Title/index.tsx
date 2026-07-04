import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import React from "react";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

interface ITitleProps {
  title: string;
  description: string;
}

export const Title: React.FC<ITitleProps> = ({ description }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.titleRow}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0)}
          >
            <Image
              src="/images/logo3.png"
              width={300}
              height={300}
              alt="Logo Stowarzyszenia Ostoja"
              className={styles.logo}
              priority
            />
          </motion.div>

          <motion.h1
            className={styles.titleMain}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0.15)}
          >
            Wspólnota
            <span className={styles.titleSub}>Ostoja</span>
          </motion.h1>
        </div>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.4)}
        >
          {description}
        </motion.p>
      </div>

      <svg
        className={styles.wave}
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,64 480,8 720,20 C960,32 1200,60 1440,28 L1440,64 L0,64 Z"
          fill="var(--paper)"
        />
      </svg>
    </div>
  );
};
