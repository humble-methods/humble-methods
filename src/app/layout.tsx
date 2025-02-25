import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./StyledComponentRegistry";
import Navbar from "@/app/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Humble Methods",
  description: "Optimize business operations with automated workflows. Humble Methods leverages AI, Zapier, JavaScript and Python to reduce manual tasks, minimize errors, and improve efficiency. Learn more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const today = new Date()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <div className="layout_wrapper">
            <Navbar />
            <main>
              {children}
            </main>
            <footer>
              <div>
                <h3>Humble Methods</h3>
                <p>© {today.getFullYear()} Humble Methods LLC</p>
              </div>
            </footer>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
