import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../utils/fontawesome'; // Path to the fontawesome.js file
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { ModalProvider } from '@/context/modal';
import { LoaderProvider } from '@/context/loader';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
      <Head>
        <meta name="author" content="Axel Auza" />
        <meta name="keywords" content="Axel Auza, Next.js, Tailwind, FrontEnd, FullStack" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ModalProvider>
          <LoaderProvider>
            <Component {...pageProps} />
          </LoaderProvider>
        </ModalProvider>
        <Analytics />
      </Layout>
    </div>
  );
}
