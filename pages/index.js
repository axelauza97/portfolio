import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Button from '@/components/UI/Button';
import { useContext, useEffect } from 'react';
import { ModalContext } from '@/context/modal';
import { LoaderContext } from '@/context/loader';
import { Modal } from '@/components/UI/Modal';
import { Loader } from '@/components/UI/Loader';
import { disableScroll, enableScroll } from '@/utils/scroll';
import classes from 'styles/Home.module.css';

export default function Home() {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { isLoading } = useContext(LoaderContext);

  useEffect(() => {
    if (showModal) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [showModal]);

  return (
    <>
      <Head>
        <title>Axel Auza — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React and Django. Building innovative web applications from Guayaquil, Ecuador." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Axel Auza — Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in React and Django. Building innovative web applications from Guayaquil, Ecuador." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Axel Auza — Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React and Django." />
        <link rel="canonical" href="https://axelauza.com" />
      </Head>

      <Hero />
      {showModal && <Modal />}
      {isLoading?.isLoading && <Loader />}

      {/* Temporary contact button — will be replaced in Phase 8 */}
      <div id="contact" className={classes.contactButton}>
        <Button onClick={() => setShowModal((prev) => !prev)}>Contact me!</Button>
      </div>

      <Projects />
      <Experience />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 36000,
  };
}
