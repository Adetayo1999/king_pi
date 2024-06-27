import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Akindele for FESSA President",
  description:
    "I am AKINDELE, Emmanuel Tosin, popularly known as King Pi. I am a penultimate student of the Department of Quantity Surveying, Faculty of Environmental Sciences at the University of Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col gap-y-8 py-[2rem]  min-h-screen bg-primary overflow-x-hidden`}
      >
        <div className="mx-auto w-[90%]  md:w-[80%] ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
