import classes from "styles/About.module.css";
import { FontAwesomeIcon } from "../../utils/fontawesome";
import Button from "@/components/UI/Button";
import yolo from "public/yolo.mp4";
function AboutPage() {
  return (
    <section className={classes.main}>
      <article className={classes.grid_main}>
        <section className={classes.about}>
          <h1 className={classes.title}>About Me</h1>
          <p>
            My professional goal is to deliver well structure code that makes
            people life easier or speed up tasks, also I like to improve my
            abilities everyday pushing myself in new projects.
          </p>
        </section>

        <section className={classes.contact}>
          <h3 className={classes.title}>Contact</h3>
          <p>
            For any questions or information, send a mail and I'll get in touch.
          </p>
          <div>axelauza97@hotmail.com</div>
        </section>
        <section className={classes.open}>
          <h3 className={classes.title}>Open to work</h3>
          <p>
            I'm looking for a job currently, If you see me as a good candidate,
            check my CV
          </p>
          <div className={classes.button}>
            <Button
              onClick={() =>
                window.open(
                  "https://espolec-my.sharepoint.com/:b:/g/personal/aaauza_espol_edu_ec/ERJQ1YVXBTxIhMWNFpeUl6oBBdp9qOAXV7PrnQpg8DFDBA?e=LdlEST"
                )
              }
            >
              Download CV
            </Button>
          </div>
        </section>

        <section className={classes.stack}>
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
      <section className={classes.degree}>
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
                  "https://espolec-my.sharepoint.com/:b:/g/personal/aaauza_espol_edu_ec/Ea69xpdLsu1Aq0C_n9rIh6ABjW6waB3Il1ljAV7MR3481w?e=eoGQBi"
                )
              }
            >
              View
            </Button>
          </div>
        </div>
      </section>

      <section className={classes.degree}>
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
                  "https://espolec-my.sharepoint.com/:v:/g/personal/aaauza_espol_edu_ec/EZ_NNGrlQ7hHkQTgJ96bZ6gBQtSeTAWolL6U5Vdxb8__Mw?e=6BjW9V"
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
          <video src={yolo} controls autoplay preload />
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
