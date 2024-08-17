import React from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

export interface ISectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<ISectionProps> = ({ id, children, className }) => (
  <section className={cx(styles.section, className)} id={id}>
    {children}
  </section>
);
