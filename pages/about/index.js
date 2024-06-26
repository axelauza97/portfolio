import classes from "styles/About.module.css";
import { FontAwesomeIcon } from "../../utils/fontawesome";
import Button from "@/components/UI/Button";
import yolo from "public/yolo.mp4";
import { useContext, useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Modal } from "@/components/UI/Modal";
import { ModalContext } from "@/context/modal";
import { Loader } from "@/components/UI/Loader";
import { LoaderContext } from "@/context/loader";
function AboutPage() {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const { reveal } = useReveal({ document, classes, window });
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);
  return (
    <section className={classes.main}>
      {showModal ? <Modal /> : ""}
      {isLoading.isLoading ? <Loader /> : ""}

      <article className={classes.grid_main}>
        <section className={classes.about}>
          <h1 className={classes.title}>Goal</h1>
          <p>
            My professional goal is to deliver well structure code that makes
            people life easier or speed up tasks, also I like to improve my
            abilities everyday pushing myself in new projects.
          </p>
        </section>

        <section className={`${classes.contact}  ${classes.reveal}`}>
          <h3 className={classes.title}>Contact</h3>
          <p>
            For any questions or information, send a mail and I'll get in touch.
          </p>
          <div>axelauza97@hotmail.com</div>
          <div className={classes.button}>
            <Button onClick={() => setShowModal((prev) => !prev)}>
              Send Email
            </Button>
          </div>
        </section>
        <section className={`${classes.open} ${classes.reveal}`}>
          <h3 className={classes.title}>Open to work</h3>
          <p>
            I'm looking for a job currently, If you see me as a good candidate,
            check my CV
          </p>
          <div className={classes.button}>
            <Button
              onClick={() =>
                window.open(
                  "https://espolec-my.sharepoint.com/:f:/g/personal/aaauza_espol_edu_ec/Ehb3aeqqzjBMoHzUdRX2J2QB1ZKc9e5EE-Y_-eex4peseQ?e=j1agWC",
                )
              }
            >
              Download CV
            </Button>
          </div>
        </section>

        <section className={`${classes.stack} ${classes.reveal}`}>
          <h3 className={classes.title}>Tech Stack</h3>
          <div className={classes.container}>
            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "java"]} />
              </div>
              <div className={classes.logo_title}>Java</div>
            </div>

            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "html5"]} />
              </div>
              <div className={classes.logo_title}>HTML</div>
            </div>

            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "css3"]} />
              </div>
              <div className={classes.logo_title}>CSS</div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "js"]} />
              </div>
              <div className={classes.logo_title}>JS</div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "react"]} />
              </div>
              <div className={classes.logo_title}>React</div>
            </div>

            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "python"]} />
              </div>
              <div className={classes.logo_title}>Python</div>
            </div>

            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "android"]} />
              </div>
              <div className={classes.logo_title}>Android</div>
            </div>

            <div>
              <div>
                <FontAwesomeIcon icon={["fab", "gitlab"]} />
              </div>
              <div className={classes.logo_title}>Git</div>
            </div>
          </div>
        </section>
      </article>
      <section className={`${classes.degree} ${classes.reveal}`}>
        <h3 className={classes.title}>Degree</h3>
        <div className={classes.university}>
          <p>
            Escuela Superior Politécnica del Litoral (ESPOL) <br />
            Guayaquil - Ecuador | 2017-2021 Graduate | B.S. Computer
          </p>
          <div className={classes.button}>
            <Button
              onClick={() =>
                window.open(
                  "https://espolec-my.sharepoint.com/:f:/g/personal/aaauza_espol_edu_ec/EsFdvqvxptdGnZSn4pfd758BGgjERheoQ13AuRA0u1-QSg?e=TKduZc",
                )
              }
            >
              View
            </Button>
          </div>
        </div>
      </section>

      <section className={`${classes.degree} ${classes.reveal}`}>
        <h3 className={classes.title}>Results of my thesis</h3>
        <div className={classes.university}>
          <p>
            I made a modification to YOLOv4 to make it learn in from a new
            channel called "Thermal" for enchance detection on low lights
            conditions. <br /> On left side is the rgb channels and right side
            thermal channel colored.
          </p>
          <div className={classes.button}>
            <Button
              onClick={() =>
                window.open(
                  "https://espolec-my.sharepoint.com/:f:/g/personal/aaauza_espol_edu_ec/EsFdvqvxptdGnZSn4pfd758BGgjERheoQ13AuRA0u1-QSg?e=TKduZc",
                )
              }
            >
              View
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.video}>
          <video src={yolo} controls preload="true" />
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
