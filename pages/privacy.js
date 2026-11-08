import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Axel Auza</title>
        <meta
          name="description"
          content="Privacy policy for Axel Auza's portfolio website."
        />
        <meta property="og:title" content="Privacy Policy — Axel Auza" />
        <meta
          property="og:description"
          content="Privacy policy for Axel Auza's portfolio website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axelauza.com/privacy" />
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
        <meta name="twitter:title" content="Privacy Policy — Axel Auza" />
        <meta
          name="twitter:description"
          content="Privacy policy for Axel Auza's portfolio website."
        />
        <meta
          name="twitter:image"
          content="https://axelauza.com/og-image.png"
        />
        <link rel="canonical" href="https://axelauza.com/privacy" />
      </Head>

      <section className="section-container">
        <div className="mx-auto max-w-3xl glass-card p-8">
          <h1 className="mb-4 text-3xl font-bold text-text-primary">
            Privacy Policy
          </h1>
          <p className="mb-4 text-text-secondary">
            This portfolio collects only the information you choose to send
            directly, such as an email or contact form submission. That
            information is used solely to respond to your inquiry and discuss
            relevant work opportunities or projects.
          </p>
          <p className="mb-4 text-text-secondary">
            Basic analytics may be used to understand traffic and improve the
            site experience. No personal information is sold, rented, or shared
            for advertising purposes.
          </p>
          <p className="text-text-secondary">
            For privacy-related questions, contact{" "}
            <a
              href="mailto:axelauza97@hotmail.com"
              className="text-accent-blue hover:underline"
            >
              axelauza97@hotmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
