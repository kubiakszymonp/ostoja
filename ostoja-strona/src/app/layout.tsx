import "./globals.css";
import { DM_Sans, Permanent_Marker } from "next/font/google";

export const PermanentMarker = Permanent_Marker({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--permanentMarker",
});

export const DMSans = DM_Sans({
  weight: ["200", "300", "400", "500", "700"],
  style: "normal",
  subsets: ["latin-ext"],
  variable: "--dmSans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PermanentMarker.variable} ${DMSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
