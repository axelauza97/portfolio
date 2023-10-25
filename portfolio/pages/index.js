import classes from "styles/Home.module.css";
import hero from "public/axel.jpg";
import Image from "next/image";
import Button from "@/components/UI/Button";
import RepoList from "@/components/repos/RepoList";
import useSWR from "swr";
import responseData from "@/mocks/response.json";
import { useEffect } from "react";
import rocket from "public/rocket.svg";
import { useReveal } from "@/hooks/useReveal";
export default function Home(props) {
  useEffect(() => {
    const { reveal } = useReveal({ document, classes, window });
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);
  return (
    <>
      <div className={classes.container}>
        <section className={classes.main}>
          <Image className={classes.image} src={hero} alt="" />
          <div className={classes.profession}>
            <h1>Full Stack Developer</h1>
            <h3>Guayaquil-Ecuador</h3>
          </div>
          <p className={classes.mainDescription}>
            I am a person who loves to create, simplify and innovate new things,
            always seeking to be and make greater things. Also I have been
            assistant since 2017 until 2020 on my university, so I have
            experience in work and soft skills, surrounding me with teachers and
            other students duties.
          </p>
          <Image src={rocket} alt="rocket" className={classes.rocketImage} />
        </section>
      </div>
      <section className={`${classes.section} ${classes.reveal}`}>
        <ul>
          <li>
            <h3>Projects</h3>
          </li>
          <li>
            <Button
              className={classes.button}
              onClick={() => window.open("https://github.com/axelauza97")}
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
  const response = await fetch("https://api.github.com/users/axelauza97/repos");
  const resData = await response.json();
  return {
    props: {
      repos: resData,
    },
    revalidate: 17280,
  };
}
