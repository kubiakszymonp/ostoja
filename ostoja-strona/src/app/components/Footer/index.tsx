import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className={cx(styles.footer, "transition duration-500")}
      id="contact"
    >
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.socialMedia}>
            <h4>Znajdź nas w internecie</h4>
            <a
              href="https://www.facebook.com/wspolnotaostoja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-3 align-items-center my-3 justify-center">
                <Image
                  src={"/images/facebook.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                Facebook
              </div>
            </a>
            <a
              href="https://www.instagram.com/stowarzyszenie.ostoja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-3 align-items-center my-3 justify-center">
                <Image
                  src={"/images/instagram.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                Instagram
              </div>
            </a>
          </div>
          <div className={styles.contactInfo}>
            <h4>Kontakt</h4>
            <p>email: wczasorekolekcjeostoja@gmail.com</p>
            <p>telefon: +48 111 222 333</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
