import type { Metadata } from "next";
import { Luxurious_Script, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

const luxuriousScript = Luxurious_Script({
  variable: "--font-luxurious-script",
  weight: "400",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snatch & Snack Club",
  description: "Welcome to the Snatch & Snack Club!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${luxuriousScript.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

