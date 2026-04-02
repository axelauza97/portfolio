import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../utils/fontawesome'; // Path to the fontawesome.js file
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { ModalProvider } from '@/context/modal';
import { LoaderProvider } from '@/context/loader';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
// Syne: geometric display font for headings — distinctive character vs generic Inter
const syne = Syne({ subsets: ['latin'], variable: '--font-display', weight: ['700', '800'] });

config.autoAddCss = false;
const isProduction = process.env.NODE_ENV === 'production';

function PageTransition({ children, routeKey }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} font-sans`}>
      <Head>
        <meta name="author" content="Axel Auza" />
        <meta name="keywords" content="Axel Auza, Next.js, Tailwind, FrontEnd, FullStack" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ModalProvider>
          <LoaderProvider>
            <PageTransition routeKey={router.pathname}>
              <Component {...pageProps} />
            </PageTransition>
          </LoaderProvider>
        </ModalProvider>
        {isProduction ? <Analytics /> : null}
      </Layout>
    </div>
  );
}
