import DataProvider from '@/context/DataProvider';
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Results summary component",
  description: "A summary of your results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          {children}
        </DataProvider>
        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.linkedin.com/in/francisco-borja-lobato/">Francisco Borja</a>.
        </footer>
      </body>
    </html>
  );
}
