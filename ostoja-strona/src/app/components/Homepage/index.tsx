"use client";

import React from "react";
import { Article } from "../Article";
import { Footer } from "../Footer";
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
    <div className={styles.page}>
      <Navbar links={links} />

      <Section id="main">
        <Title description={description} title={title} />
      </Section>

      <main className={styles.main}>
        {sections.map((section) => (
          <Section id={String(section.id)} key={section.id}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            <div className={styles.sectionItems}>
              {section.items.map((item) => (
                <Article
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </Section>
        ))}
      </main>

      <Footer email={email} phone={phone} bankAccount={bankAccount} />
    </div>
  );
};
