import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={cx(styles.footer, "transition duration-500")}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.socialMedia}>
            <h4>Znajdź nas</h4>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className={styles.contactInfo}>
            <h4>Kontakt</h4>
            <p>Email: wspolnotaostoja@gmail.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
