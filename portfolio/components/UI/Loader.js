import { LoaderContext } from "@/context/loader";
import classes from "./Loader.module.css";
import { useContext } from "react";
export const Loader = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  return (
    <article className={classes.modal}>
      <section className={classes.box}>
        <h1>{isLoading.message} !</h1>
        <div className={classes.loader}></div>
      </section>
    </article>
  );
};
