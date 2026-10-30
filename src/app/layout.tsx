import type { Metadata } from "next";
import { Mulish, Nunito, Quicksand } from "next/font/google";
import "./globals.css";

// const mulish = Mulish({
//   variable: "--font-mulish",
//   subsets: ["latin"],
//   display: "swap",
// });

// const nunito = Nunito({
//   variable: "--font-nunito",
//   subsets: ["latin"],
//   display: "swap",
// });

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial Rounded MT Bold", "Century Gothic", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Doces Guerra",
  description: "Doces e salgados feitos com qualidade e carinho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-body">
        {children}
      </body>
    </html>
  );
}