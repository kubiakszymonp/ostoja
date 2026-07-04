// Treść strony wcześniej pochodziła z CMS-a (Strapi). CMS został usunięty,
// więc dane są zahardkodowane tutaj. Aby zmienić treść — edytuj ten plik.
// Snapshot pobrany z https://stowarzyszenieostoja.pl (2026).

export interface SectionItem {
  id: number;
  title: string;
  /** HTML renderowany przez dangerouslySetInnerHTML w komponencie Article */
  content: string;
}

export interface HomepageSection {
  id: number;
  title: string;
  /** Kolejność wyświetlania (od góry) */
  items: SectionItem[];
}

export interface HomepageContent {
  title: string;
  description: string;
  email: string;
  phone: string;
  bankAccount: string;
  sections: HomepageSection[];
}

export const homepage: HomepageContent = {
  title: "Wspólnota Ostoja",
  description:
    "Wspólnota, która łączy osoby niepełnosprawne, ich opiekunów z Bogiem, tworząc więzi oparte na wzajemnym wsparciu i duchowej bliskości. Razem budujemy relacje, które przynoszą nadzieję i radość przez cały rok.",
  email: "wczasorekolekcjeostoja@gmail.com",
  phone: "663 369 801",
  bankAccount: "70 1020 2212 0000 5602 0487 8742",
  sections: [
    {
      id: 1,
      title: "Aktualności",
      items: [
        {
          id: 3,
          title: "Wczasorekolekcje „Ostoja” – Rzeczka 2025",
          content: `<p>Z radością informujemy, że wczasorekolekcje dla <strong>osób z niepełnosprawnością</strong> odbędą się w dniach <strong>13–20 lipca 2025</strong> roku. Po raz pierwszy udamy się poza granice naszej diecezji - do malowniczej miejscowości<strong> Rzeczka </strong>w Górach Sowich. Tym samym niektórzy z naszych podopiecznych będą mogli zobaczyć górskie widoki! Oczywiście, zadbamy o transport na miejsce i do domu.</p><p>&nbsp;</p><hr><p><br>To wyjątkowy czas modlitwy, odpoczynku, wspólnoty i radości – stworzony z myślą o tych, którzy potrzebują wsparcia, bliskości drugiego człowieka i umocnienia duchowego. Serdecznie zapraszamy wolontariuszy, którzy chcieliby podarować swój czas i serce - pomagając w opiece, animacji czasu wolnego i tworzeniu atmosfery otwartości i miłości. Będziemy Was potrzebować już od 12 lipca, aby przygotować ośrodek na przyjazd naszych podopiecznych.</p><p><br>Jeśli chcesz do nas dołączyć jako wolontariusz –<strong> wypełnij formularz!</strong></p><p><a target="_blank" rel="noopener noreferrer" href="https://forms.gle/F1swVwnNYKniUSZg7">https://forms.gle/F1swVwnNYKniUSZg7</a></p><p>&nbsp;</p><p>Jeśli masz jakieś pytania - <strong>skontaktuj się z nami! </strong><a href="mailto:wczasorekolekcjeostoja@gmail.com"><strong>wczasorekolekcjeostoja@gmail.com</strong></a></p><p>Jeśli chcesz wesprzeć organizację tegorocznych wczasorekolekcji możesz wpłacić dowolną kwotę na konto Stowarzyszenia „Ostoja” 70 1020 2212 0000 5602 0487 8742.</p>`,
        },
        {
          id: 1,
          title: "Odbyły się tegoroczne wczasorekolekcje",
          content: `<p>W Chojniku odbyły się wczasorekolekcje Wspólnoty Ostoja, w których uczestniczyło 60 osób niepełnosprawnych wraz z opiekunami-wolontariuszami. To wydarzenie, organizowane przez kapłanów diecezji kaliskiej, powróciło po czterech latach przerwy dzięki staraniom ks. Artura Filipiaka, ks. Łukasza Urbana i ks. Mateusza Kołodziejskiego.</p><p>&nbsp;</p><hr><p>&nbsp;</p><p>Podczas rekolekcji, które trwają od 10 lipca, uczestników odwiedziło Radio Rodzina. Neoprezbiter ks. Piotr Perskawiec przewodniczył Mszy Świętej w kościele pw. Chrystusa Króla.</p><p>&nbsp;</p><p>Wczasorekolekcje są często jedyną okazją dla osób niepełnosprawnych, aby spędzić wakacje i wziąć udział w Eucharystii. Więcej o tym wydarzeniu, w tym zdjęcia i nagrania, można znaleźć w reportażu Radia Rodzina Kalisz.</p>`,
        },
      ],
    },
    {
      id: 2,
      title: "Do pobrania",
      items: [
        {
          id: 2,
          title: "Standardy ochrony osób z niepełnosprawnościami",
          content: `<p>Dokument „Standardy ochrony osób z niepełnosprawnością w Stowarzyszeniu Ostoja” to zbiór zasad i procedur mających na celu zapewnienie bezpieczeństwa dzieciom, młodzieży i dorosłym z niepełnosprawnościami. Obejmuje polityki rekrutacji, edukacji personelu, a także procedury interwencyjne w przypadkach krzywdzenia. Dokument uwzględnia specyficzne potrzeby osób z niepełnosprawnościami i promuje działania zapobiegające wszelkim formom przemocy.</p><p><br>Pobierz cały dokument: <a target="_blank" rel="noopener noreferrer" href="/uploads/STANDARDY_OCHRONY_OSOB_Z_NIEPELNOSPRAWNOSCIA_a0e74ed5df.docx"><u>kliknij tutaj</u></a></p>`,
        },
      ],
    },
  ],
};
