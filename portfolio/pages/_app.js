import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../utils/fontawesome"; // Path to the fontawesome.js file
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { ModalProvider } from "@/context/modal";
import { LoaderProvider } from "@/context/loader";

config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Full Stack Developer Axel Auza</title>
        <meta
          name="description"
          content="Axel Auza portfolio.
            My professional goal is to deliver well structure code that makes
            people life easier or speed up tasks, also I like to improve my
            abilities everyday pushing myself in new projects.!"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
      </Head>
      <Layout>
        <ModalProvider>
          <LoaderProvider>
            <Component {...pageProps} />
          </LoaderProvider>
        </ModalProvider>
        <Analytics />
      </Layout>
    </>
  );
}
