"use client";

import React from "react";
import { Article } from "../Article";
import { Footer } from "../Footer";
import Media from "../Media";
import { Navbar } from "../Navbar";
import { Section } from "../Section";
import { Title } from "../Title";
import styles from "./styles.module.scss";
import { HomepageSection } from "@/data/homepage";

export interface HomepageProps {
  title: string;
  description: string;
  sections: HomepageSection[];
  phone: string;
  email: string;
  bankAccount: string;
}

export const Homepage: React.FC<HomepageProps> = ({
  title,
  description,
  sections,
  phone,
  email,
  bankAccount,
}) => {
  const links = [
    { label: "Strona główna", sectionId: "main" },
    ...sections.map((section) => ({
      label: section.title,
      sectionId: String(section.id),
    })),
    { label: "Kontakt", sectionId: "contact" },
  ];

  return (
    <div>
      <Media greaterThanOrEqual="md">
        <Navbar links={links} />
      </Media>

      <Section id="main" className={styles.titleSection}>
        <Title description={description} title={title} />
      </Section>
      <div className="flex justify-center mt-10 p-4">
        <div className="container">
          {sections.map((section) => (
            <Section
              id={String(section.id)}
              key={section.id}
              className={styles.section}
            >
              <h1 className="text-5xl"> {section.title}</h1>

              {section.items.map((item) => (
                <Article
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  createdAt={""}
                />
              ))}
            </Section>
          ))}
        </div>
      </div>
      <Footer email={email} phone={phone} bankAccount={bankAccount} />
    </div>
  );
};
