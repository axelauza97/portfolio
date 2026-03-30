import classes from "styles/Experience.module.css";
import { FontAwesomeIcon } from "../../utils/fontawesome";
import Button from "@/components/UI/Button";
import ExperiencesList from "@/components/experiences/ExperiencesList";
import { experiences } from "@/mocks/experience";

function ExperiencePage(props) {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Experience</h1>
      <article>
        <ExperiencesList experiences={props.experiences} />
      </article>
    </main>
  );
}
export async function getStaticProps() {
  // Map shared experience data to the legacy page schema
  const mapped = experiences.map((exp) => ({
    title: `${exp.role} — ${exp.company}`,
    date: exp.period,
    occupation: `${exp.company} · ${exp.type}`,
    descriptions: exp.bullets,
    techs: exp.tags,
    link: exp.link || null,
  }));
  return {
    props: {
      experiences: mapped,
    },
  };
}
export default ExperiencePage;
