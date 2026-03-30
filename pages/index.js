import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

const metadata = {
  title: 'Axel Auza — Full Stack Developer',
  description:
    'Full Stack Developer building React, Django, and cloud-backed web products from Guayaquil, Ecuador.',
  canonical: 'https://axelauza.com',
  ogImage: 'https://axelauza.com/og-image.svg',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Axel Auza Portfolio',
      url: metadata.canonical,
      description: metadata.description,
    },
    {
      '@type': 'Person',
      name: 'Axel Auza',
      url: metadata.canonical,
      image: metadata.ogImage,
      jobTitle: 'Full Stack Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Guayaquil',
        addressCountry: 'EC',
      },
      sameAs: [
        'https://github.com/axelauza97',
        'https://www.linkedin.com/in/axelauza/',
      ],
      knowsAbout: ['React', 'Next.js', 'Django', 'Python', 'Docker', 'Kubernetes'],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Axel Auza" />
        <meta name="creator" content="Axel Auza" />
        <meta name="publisher" content="Axel Auza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.canonical} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Axel Auza portfolio preview card" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />
        <link rel="canonical" href={metadata.canonical} />
        <link rel="sitemap" type="application/xml" href={`${metadata.canonical}/sitemap.xml`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
