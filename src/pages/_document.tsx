import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Humble Methods",
  description: "Optimize business operations with automated workflows. Humble Methods leverages AI, Zapier, JavaScript and Python to reduce manual tasks, minimize errors, and improve efficiency. Learn more.",
};

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
