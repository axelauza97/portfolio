import Head from "next/head";
import classes from "styles/Home.module.css";
import hero from "public/axel.jpg";
//import yolo from "public/yolo.mp4";
import Image from "next/image";
import Button from "@/components/UI/Button";
import RepoList from "@/components/repos/RepoList";
import useSWR from "swr";

export default function Home(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/users/axelauza97/repos",
    fetcher
  );

  return (
    <>
      <Head>
        <title>Full Stack Developer Axel Auza</title>
        <meta name="description" content="Nice to meet you!" />
      </Head>
      <div className={classes.container}>
        <section className={classes.main}>
          <Image className={classes.image} src={hero} alt="" />
          <div>
            <h1>Full Stack Developer</h1>
            <h3>Guayaquil-Ecuador</h3>
          </div>
        </section>
      </div>
      <section className={classes.section}>
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
          {isLoading && <>Loading...</>}
          {isLoading && data && data.message}
          {!isLoading && data && !data.message && <RepoList repos={data} />}
        </div>
      </section>
    </>
  );
}
/*<div className={classes.video}>
        <video src={yolo} controls autoplay preload />
      </div>*/
export async function getServerSideProps() {
  const response = await fetch("https://api.github.com/users/axelauza97/repos");

  const resData = await response.json();
  return {
    props: {
      repos: resData,
    },
  };
}
