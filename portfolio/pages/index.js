import classes from "styles/Home.module.css";
import hero from "public/axel.jpg";
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
export async function getServerSideProps() {
  const response = await fetch(process.env.API_URL);

  const resData = await response.json();
  return {
    props: {
      repos: resData,
    },
  };
}
