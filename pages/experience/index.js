import classes from "styles/Experience.module.css";
import { FontAwesomeIcon } from "../../utils/fontawesome";
import Button from "@/components/UI/Button";
import ExperiencesList from "@/components/experiences/ExperiencesList";

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
  const DUMMY_EXPERIENCES = [
    {
      title: "Senior Full Stack Developer (Remote)",
      date: "March 2024 - Present",
      occupation: "RealState company in USA",
      descriptions: [
        "Transform Designs into Reality: Work closely with our design team to convert pixel-perfect designs",
        "Feature Development: Collaborate with our backend team to add and enhance features on our NodeJS platform",
        "Optimize Website Performance: Drive significant improvements in our website’s SEO metrics and overall performance",
      ],
      techs: ["React", "NodeJS", "CSS", "Tailwind"],
      link: "https://sell2rent.com/",
    },
    {
      title: "Full Stack Developer in Telconet",
      date: "June 2022 - May 2024",
      occupation: "Telecomunications leader in Ecuador",
      descriptions: [
        "Develop new features for app used by technicians who install internet on houses and companies.",
        "Fixing bugs that exist on the same app",
        "Develop new features for frontend on ExtJS used to manage daily installations via web",
        "Develop new features for backend on Symfony",
      ],
      techs: ["Java (Mobile Development)", "ExtJS", "Symfony", "Gitlab"],
      link: "https://www.telconet.net/",
    },
    {
      title:
        "Junior Full Stack Developer - Semi Senior Full Stack Developer in Funiber",
      date: "March 2021 - May 2023",
      occupation: "ONG that provides online studies",
      descriptions: [
        "Create scientific dockerized repositories for all the universities of the ONG FUNIBER.",
        "Create a network of universities, independent and automatically scalable using technologies like Kubernetes.",
        "Create scripts for automatization between universities",
        "Data Scientist in the field of Score leads (Feature Engineering, train, test, improve accuracy) with own models and using Vertex AI",
      ],
      techs: [
        "Docker, Kubernetes",
        "Google Cloud Platform, GITLAB",
        "HTML, CSS, JavaScript, JQuery",
        "Gitlab",
        "Python, Flask",
        "MySQL",
      ],
      link: "https://repositorio.uneatlantico.es/",
    },
    {
      title: "Junior Full Stack Developer in Hangaroa",
      date: "August 2020 - October 2021",
      occupation: "Enterprise that builds IT solutions to Guayaquil StartUps",
      descriptions: [
        "Creation of startup applications using front and back end technologies",
        "Integration and creating new features to already created startup apps",
        "Corrections of bugs of created startup apps",
        "Also coded in hosted backend of all apps that is pythonanywhere in Django",
      ],
      techs: [
        "GIT",
        "Angular",
        "React Native",
        "Django",
        "HTML, CSS, JavaScript, JQuery",
        "MySQL",
      ],
      link: "https://github.com/axelauza97/TransporterBackend",
    },
    {
      title: "Software Developer in CIDIS",
      date: "June 2019 - March 2020",
      occupation: "Research center in ESPOL university",
      descriptions: [
        "Django Backend creation with webpage for investigation project management.",
        "Creation of a banana dataset using multispectral cameras",
        "Creation and configuration of an environment in CARLA Simulator for a dataset construction.",
      ],
      techs: ["GIT", "Django", "Python", "MySQL", "Computer Vision"],
      link: "https://github.com/axelauza97/CARLA-SIMULATOR",
    },
  ];
  return {
    props: {
      experiences: DUMMY_EXPERIENCES,
    },
  };
}
export default ExperiencePage;
