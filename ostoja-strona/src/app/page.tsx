"use client";

import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import Media from "./components/Media";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Title } from "./components/Title";
import styles from "./styles.module.scss";

const links = [
  { label: "Strona główna", sectionId: "main" },
  { label: "Kim jesteśmy", sectionId: "about-us" },
  { label: "Standardy ochrony", sectionId: "safety" },
  { label: "Do pobrania", sectionId: "download" },
  { label: "Kontakt", sectionId: "contact" },
];

export default function Home() {
  return (
    <div>
      <Media greaterThanOrEqual="md">
        <Navbar links={links} />
      </Media>

      <Section id="main" className={styles.titleSection}>
        <Title />
      </Section>
      <div className="flex justify-center mt-10 p-4">
        <div className="container">
          <Section id="about-us">
            <div>
              <h1 className="text-5xl">Aktualności</h1>

              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
            </div>
          </Section>
          <Section id="safety">
            <div>
              <h1 className="text-5xl">Aktualności</h1>

              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
            </div>
          </Section>
          <Section id="download">
            <div>
              <h1 className="text-5xl">Aktualności</h1>

              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
              <Article
                title="Nowa strona internetowa"
                content="<p>
                Witaj na naszej nowej stronie internetowej. Znajdziesz tutaj
                informacje o naszej wspólnocie, standardach ochrony oraz
                możliwość pobrania dokumentów. Witaj na naszej nowej stronie
                internetowej. Znajdziesz tutaj informacje o naszej wspólnocie,
                standardach ochrony oraz możliwość pobrania dokumentów. Witaj na
                naszej nowej stronie internetowej. Znajdziesz tutaj informacje o
                naszej wspólnocie, standardach ochrony oraz możliwość pobrania
                dokumentów.
              </p>"
                createdAt="2021-10-10"
              />
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
