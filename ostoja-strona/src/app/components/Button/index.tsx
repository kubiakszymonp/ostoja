import cx from "classnames";
import styles from "./styles.module.scss";
import React from "react";

export const Button: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <button
      className={cx(
        styles.c,
        "shadow-md hover:shadow-xl transition duration-500"
      )}
    >
      {children}
    </button>
  );
};
