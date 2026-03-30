import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
export default function Home() {
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
      <Projects />
      <Experience />
      <About />

      {/* Contact placeholder — will be replaced in Phase 8 */}
      <section id="contact" className="section-container text-center">
        <a
          href="mailto:axelauza97@hotmail.com"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium text-lg hover:shadow-lg hover:shadow-accent-purple/25 transition-all"
        >
          Say Hello
        </a>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 36000,
  };
}
