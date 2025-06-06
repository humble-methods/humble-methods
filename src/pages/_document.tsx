import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import type { Metadata } from "next";
import { ServerStyleSheet } from "styled-components";

export const metadata: Metadata = {
  title: "Humble Methods",
  description: "Optimize business operations with automated workflows. Humble Methods leverages AI, Zapier, JavaScript and Python to reduce manual tasks, minimize errors, and improve efficiency. Learn more.",
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://humblemethods.com" />
          <meta property="og:image" content="https://humblemethods.com/og.png" />
          <meta property="og:description" content="Optimize business operations with automated workflows. Humble Methods leverages AI, Zapier, JavaScript and Python to reduce manual tasks, minimize errors, and improve efficiency. Learn more." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
