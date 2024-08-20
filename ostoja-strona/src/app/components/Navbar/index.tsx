import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

const NAVBAR_OFFSET = 150;

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

  const handleScroll = () => {
    let scrollPos = window.scrollY + 100 + NAVBAR_OFFSET;

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
        top: section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET,
        behavior: "smooth",
      });
      setActiveSection(href);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cx(styles.navbarContainer, "shadow-lg")}>
      <div className={styles.navbarLinks}>
        {links.map((link, index) => (
          <span
            key={index}
            className={cx(styles.navbarLinkWrapper, {
              [styles.navbarLinkWrapper__active]:
                activeSection === link.sectionId,
            })}
            onClick={() => handleClick(link.sectionId)}
          >
            <a className={styles.navbarLink}>{link.label}</a>
          </span>
        ))}
      </div>
    </div>
  );
};
