import classes from "styles/Home.module.css";
import hero from "public/axel.jpg";
import Image from "next/image";
import Button from "@/components/UI/Button";
import RepoList from "@/components/repos/RepoList";
//import responseData from "@/mocks/response.json";
import { useContext, useEffect } from "react";
import rocket from "public/rocket.svg";
import { useReveal } from "@/hooks/useReveal";
import { ModalContext } from "@/context/modal";
import { LoaderContext } from "@/context/loader";
import { Modal } from "@/components/UI/Modal";
import { Loader } from "@/components/UI/Loader";
import { disableScroll, enableScroll } from "@/utils/scroll";
export default function Home(props) {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const { reveal } = useReveal({ document, classes, window });
    window.addEventListener("scroll", reveal);
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
          <Image className={classes.image} src={hero} alt="" />
          <div className={classes.profession}>
            <h1>Full Stack Developer</h1>
            <h3>Guayaquil-Ecuador</h3>
          </div>
          <p className={classes.mainDescription}>
            Dedicated full-stack developer with a strong passion for crafting
            innovative web applications. I specialize in React and Django,
            combining the power of both to build robust and user-friendly
            software solutions.
          </p>
          <Image src={rocket} alt="rocket" className={classes.rocketImage} />
        </section>
      </div>
      {showModal ? <Modal /> : ""}
      {isLoading.isLoading ? <Loader /> : ""}
      <div className={classes.contactButton}>
        <Button onClick={() => setShowModal((prev) => !prev)}>
          Contact me!
        </Button>
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
