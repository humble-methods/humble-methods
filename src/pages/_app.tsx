import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import { GoogleAnalytics } from "@next/third-parties/google"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics gaId="G-LH1KNVGC54" />
      <Component {...pageProps} />
    </Layout>
  );
}
