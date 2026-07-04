import React from "react";
import { motion, useInView } from "framer-motion";
import styles from "./styles.module.scss";

export interface IArticleProps {
  title: string;
  content: string;
  createdAt?: string;
}

// CMS-owe treści zawierają puste akapity (<p>&nbsp;</p>) psujące rytm pionowy
const stripEmptyParagraphs = (html: string) =>
  html.replace(/<p>(?:&nbsp;|\s|<br\s*\/?>)*<\/p>/g, "");

export const Article: React.FC<IArticleProps> = ({
  title,
  content,
  createdAt,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      className={styles.article}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {createdAt && <span className={styles.date}>{createdAt}</span>}
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: stripEmptyParagraphs(content) }}
      ></div>
    </motion.article>
  );
};
