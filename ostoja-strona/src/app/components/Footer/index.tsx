import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Footer: React.FC<{
  email: string;
  phone: string;
  bankAccount: string;
}> = ({ email, phone, bankAccount }) => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.accent} />

      <div className={styles.inner}>
        <div className={styles.column}>
          <h4>Znajdź nas w internecie</h4>
          <a
            href="https://www.facebook.com/wspolnotaostoja"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image src="/images/facebook.png" alt="" width={28} height={28} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/stowarzyszenie.ostoja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image src="/images/instagram.png" alt="" width={28} height={28} />
            Instagram
          </a>
        </div>

        <div className={styles.column}>
          <h4>Kontakt</h4>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Telefon: <a href={`tel:+48${phone.replace(/\s/g, "")}`}>{phone}</a>
          </p>
          <p>Numer konta bankowego: {bankAccount}</p>
        </div>
      </div>
    </footer>
  );
};
