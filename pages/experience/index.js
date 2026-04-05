import Head from "next/head";
import classes from "styles/Experience.module.css";
import ExperiencesList from "@/components/experiences/ExperiencesList";
import { experiences } from "@/mocks/experience";

function ExperiencePage(props) {
  return (
    <>
      <Head>
        <title>Experience — Axel Auza</title>
        <meta
          name="description"
          content="Professional experience, delivery highlights, and technology stack used by Axel Auza across product, research, and full stack roles."
        />
        <meta property="og:title" content="Experience — Axel Auza" />
        <meta
          property="og:description"
          content="Professional experience, delivery highlights, and technology stack used by Axel Auza."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axelauza.com/experience" />
        <meta property="og:image" content="https://axelauza.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experience — Axel Auza" />
        <meta
          name="twitter:description"
          content="Professional experience, delivery highlights, and technology stack used by Axel Auza."
        />
        <link rel="canonical" href="https://axelauza.com/experience" />
      </Head>

      <div className={classes.main}>
        <h1 className={classes.title}>Experience</h1>
        <article>
          <ExperiencesList experiences={props.experiences} />
        </article>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const mapped = experiences.map((exp) => ({
    title: `${exp.role} — ${exp.company}`,
    date: exp.period,
    occupation: `${exp.company} · ${exp.type}`,
    descriptions: exp.bullets,
    techs: exp.tags,
    link: exp.link || null,
  }));
  return { props: { experiences: mapped } };
}
export default ExperiencePage;
