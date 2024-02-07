import { Fragment, useEffect, useRef } from "react";
import classes from "./ExperiencesList.module.css";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

const carousel = (slider) => {
  const z = 600;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    //console.log('chas');
  }

  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 8000);
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);

  slider.on("detailsChanged", rotate);
};

function ExperiencesList(props) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel],
  );

  return (
    <>
      <div className={classes.container}>
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              {props.experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`carousel__cell number-slide${i + 1} ${
                    classes.experience
                  }`}
                >
                  <h4 className={classes.title}>{exp.title}</h4>
                  <div className={classes.occupation}>{exp.occupation}</div>
                  <div className={classes.date}>{exp.date}</div>
                  <div
                    className={classes.more}
                    onClick={() => window.open(exp.link)}
                  >
                    Click to see more{" "}
                  </div>
                  <div className={classes.description}>
                    <ul className={classes.rocket_list}>
                      {exp.descriptions
                        ? exp.descriptions.map((descp, index) => (
                            <li key={index}>{descp}</li>
                          ))
                        : "No description"}
                    </ul>
                  </div>
                  <div className={classes.tech}>
                    Technologies used:
                    <ul>
                      {exp.techs.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperiencesList;
