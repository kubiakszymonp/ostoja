import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import cx from "classnames";
import { motion } from "framer-motion";
import Media from "../Media";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

interface ITitleProps {
  title: string;
  description: string;
}

export const Title: React.FC<ITitleProps> = ({ title, description }) => {
  return (
    <div>
      <div className={cx(styles.container, "shadow-lg")}>
        <div className="flex justify-center flex-col items-center">
          <div
            className={cx(styles.titleRow, "flex items-center justify-between")}
          >
            <Media greaterThanOrEqual="md">
              <Image
                src={"/images/logo3.png"}
                width={330}
                height={330}
                alt=""
                className={styles.img}
              />
            </Media>
            <Media lessThan="md">
              <Image
                src={"/images/logo3.png"}
                width={200}
                height={200}
                alt=""
                className={styles.img}
              />
            </Media>

            <motion.h1
              className={styles.titleMain}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Wspólnota
              <div className={styles.titleSub}>Ostoja</div>
            </motion.h1>
          </div>
          <motion.h6
            className={styles.description}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.5 },
              },
            }}
          >
            {description}
          </motion.h6>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.8 },
              },
            }}
          ></motion.div>

          <div className={styles.galleryContainer}></div>
        </div>

        <div className={styles.divider}></div>
      </div>
    </div>
  );
};
