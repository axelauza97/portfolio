import classes from 'styles/Home.module.css';
import hero from 'public/axel.avif';
import portfolioImage from 'public/portfolioImage.avif';
import bazarImage from 'public/bazarImage.avif';
import clarifonImage from 'public/clarifonImage.avif';
import uneatlanticoImage from 'public/uneatlanticoImage.avif';
import transporterImage from 'public/transporterImage.avif';

import architectureImage from 'public/architectureImage.avif';

import Image from 'next/image';
import Button from '@/components/UI/Button';
import RepoList from '@/components/repos/RepoList';
//import responseData from "@/mocks/response.json";
import { useContext, useEffect } from 'react';
import rocket from 'public/rocket.svg';
import { useReveal } from '@/hooks/useReveal';
import { ModalContext } from '@/context/modal';
import { LoaderContext } from '@/context/loader';
import { Modal } from '@/components/UI/Modal';
import { Loader } from '@/components/UI/Loader';
import { disableScroll, enableScroll } from '@/utils/scroll';
import { ProjectCard } from '@/components/UI/ProjectCard';
export default function Home(props) {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const { reveal } = useReveal({ document, classes, window });
    window.addEventListener('scroll', reveal);
    reveal();
  }, []);

  useEffect(() => {
    if (showModal) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [showModal, setShowModal]);
  return (
    <>
      <div className={classes.container}>
        <section className={classes.main}>
          <Image className={classes.image} src={hero} alt="personalImage" priority={false} />
          <div className={classes.profession}>
            <h1>Full Stack Developer</h1>
            <h3>Guayaquil-Ecuador</h3>
          </div>
          <p className={classes.mainDescription}>
            Dedicated full-stack developer with a strong passion for crafting innovative web
            applications. I specialize in React and Django, combining the power of both to build
            robust and user-friendly software solutions.
          </p>
          <Image src={rocket} alt="rocket" className={classes.rocketImage} priority={false} />
        </section>
      </div>
      {showModal ? <Modal /> : ''}
      {isLoading.isLoading ? <Loader /> : ''}
      <div className={classes.contactButton}>
        <Button onClick={() => setShowModal((prev) => !prev)}>Contact me!</Button>
      </div>

      <section className={`${classes.section} ${classes.reveal} p-2`}>
        <h2 className="mt-4">Main Projects</h2>
        <ul className="mt-4 grid gap-8">
          {props.projects && props.projects.map((project) => <ProjectCard project={project} />)}
        </ul>
      </section>
      <section className={`${classes.section} ${classes.reveal}`}>
        <ul className={classes.projects}>
          <li>
            <h3>All Projects</h3>
          </li>
          <li>
            <Button
              className={classes.button}
              onClick={() => window.open('https://github.com/axelauza97')}
            >
              View Github
            </Button>
          </li>
        </ul>
        <div className={classes.repo_list}>
          {/*isLoading && <>Loading...</>*/}
          {/*isLoading && data && data.message*/}
          {
            /*!isLoading &&*/ props.repos && !props.repos.message && (
              <RepoList repos={props.repos} />
            )
          }
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/axelauza97/repos');
  const resData = await response.json();

  const projects = [
    {
      title: 'Uneatlantico',
      image: uneatlanticoImage,
      description: `This project involved creating scientific dockerized repositories for various universities
            affiliated with the ONG FUNIBER, aiming to enhance accessibility and scalability. Additionally, 
            a network of interconnected scientific repositories was established, leveraging technologies such 
            as Gitlab CI/CD, Kubernetes, and Docker to ensure independence and scalability. Automation was 
            facilitated through the creation of JOBS scripts, streamlining processes between universities. 
            Furthermore, as a Data Scientist specializing in scoring leads, responsibilities included feature 
            engineering, model training, testing, and accuracy enhancement, both with proprietary models and 
            utilizing Vertex AI.`,
      source: null,
      link: 'https://repositorio.uneatlantico.es/'
    },
    {
      title: 'Django Microservice',
      image: architectureImage,
      description: `This project highlights a single-page application (SPA) built with a responsive design 
          using the React.js framework. It offers functionalities such as user creation, trip customization, 
          and deletion within a seamless user interface. Notably, the project demonstrates a microservice 
          backend architecture developed with Django, emphasizing the separation of authentication and trip 
          data retrieval for enhanced efficiency and scalability.`,
      source: 'https://github.com/axelauza97/marWebsite',
      link: null
    },
    {
      title: 'TransporterBackend',
      image: transporterImage,
      description: `Project with Django, authentication user with social media OAUTH2, credit card payments 
      using library paymentez`,
      source: 'https://github.com/axelauza97/TransporterBackend',
      link: null
    },

    {
      title: 'Portfolio',
      image: portfolioImage,
      description: `My portfolio has the purpose to showcase my comprehensive skill
              set in both front-end and back-end development, providing
              potential clients and employers with a clear demostration of my
              abilities, expertise, and creativity in building dynamic and
              responsive web applications. By highlighting a diverse range of
              projects and detailing my contributions.`,
      source: 'https://github.com/axelauza97/portfolio',
      link: null
    },
    {
      title: 'ECommerce',
      image: bazarImage,
      description: `This project is focused to show a Website SPA with responsive
              design in NextJS framework. Here you can search items and manage
              cart shopping. This is a project where I developed a SSR with
              skeleton loaders for enhancing user experience.`,
      source: 'https://github.com/axelauza97/react/tree/main/bazar',
      link: 'https://bazar-store-axel.vercel.app/'
    },
    {
      title: 'Clarifion',
      image: clarifonImage,
      description: `This project serves as a prime demonstration of my prowess as a frontend developer, 
              showcasing my ability to meticulously craft pixel-perfect designs using ReactJS and CSS. 
              Through meticulous attention to detail and a deep understanding of frontend technologies, I have 
              created an immersive and visually stunning user experience. From responsive layouts, every aspect of this 
              project reflects my dedication to delivering polished and high-quality frontend solutions.`,
      source: 'https://github.com/axelauza97/react/tree/main/clarifon-test',
      link: 'https://clarifion-axel-auza.netlify.app/'
    }
  ];
  return {
    props: {
      repos: resData,
      projects
    },
    revalidate: 36000
  };
}
