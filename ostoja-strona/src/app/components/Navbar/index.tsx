import React, { useState, useEffect } from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./styles.module.scss";

const NAVBAR_OFFSET = 88;

export interface ITitleContainerProps {
  links: {
    label: string;
    sectionId: string;
  }[];
}

export const Navbar: React.FC<ITitleContainerProps> = ({ links }) => {
  const [activeSection, setActiveSection] = useState<string>(
    links[0].sectionId
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 8);

    const scrollPos = window.scrollY + NAVBAR_OFFSET + 100;

    links.forEach((link) => {
      const section = document.getElementById(link.sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;

        if (sectionTop <= scrollPos && sectionBottom > scrollPos) {
          setActiveSection(link.sectionId);
        }
      }
    });
  };

  const handleClick = (href: string) => {
    const section = document.getElementById(href);
    if (section) {
      window.scrollTo({
        top:
          section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET,
        behavior: "smooth",
      });
      setActiveSection(href);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={cx(styles.navbar, { [styles.navbarScrolled]: scrolled })}
    >
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => handleClick("main")}
        >
          <Image
            src="/images/logo3.png"
            alt=""
            width={40}
            height={40}
            className={styles.brandLogo}
          />
          <span className={styles.brandName}>Wspólnota Ostoja</span>
        </button>

        <nav
          className={cx(styles.links, { [styles.linksOpen]: menuOpen })}
          aria-label="Nawigacja"
        >
          {links.map((link) => (
            <button
              type="button"
              key={link.sectionId}
              className={cx(styles.link, {
                [styles.linkActive]: activeSection === link.sectionId,
              })}
              onClick={() => handleClick(link.sectionId)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={cx(styles.burger, { [styles.burgerOpen]: menuOpen })}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
