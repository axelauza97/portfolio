import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found — Axel Auza</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on Axel Auza's portfolio. Return to the home page to browse projects, experience, and contact details."
        />
        <meta property="og:title" content="Page Not Found — Axel Auza" />
        <meta
          property="og:description"
          content="The page you are looking for does not exist on Axel Auza's portfolio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axelauza.com/404" />
        <meta
          property="og:image"
          content="https://axelauza.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Axel Auza portfolio preview card"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Not Found — Axel Auza" />
        <meta
          name="twitter:description"
          content="The page you are looking for does not exist on Axel Auza's portfolio."
        />
        <meta
          name="twitter:image"
          content="https://axelauza.com/og-image.png"
        />
        <link rel="canonical" href="https://axelauza.com/404" />
      </Head>

      <section className="section-container">
        <div className="mx-auto max-w-3xl glass-card p-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-text-primary">
            404 — Page not found
          </h1>
          <p className="mb-6 text-text-secondary">
            The page you are looking for does not exist or was moved.
          </p>
          <Link href="/" className="text-accent-blue hover:underline">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
