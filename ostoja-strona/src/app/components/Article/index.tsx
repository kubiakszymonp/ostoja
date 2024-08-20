import React from "react";
import { motion, useInView } from "framer-motion";
import cx from "classnames";
import styles from "./styles.module.scss";

export interface IArticleProps {
  title: string;
  createdAt: string;
  content: string;
}

export const Article: React.FC<IArticleProps> = ({
  title,
  createdAt,
  content,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={cx(styles.news)}>
        <div className="flex justify-between">
          <h2>{title}</h2>
          <span className="text-sm">{createdAt}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </motion.div>
  );
};
