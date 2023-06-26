import { Fragment } from "react";
import classes from "./ExperiencesList.module.css";
import Button from "../UI/Button";

function ExperiencesList(props) {
  return (
    <div className={classes.container}>
      {props.experiences.map((exp, i) => (
        <div
          key={i}
          className={classes.experience}
          onClick={() => window.open(exp.link)}
        >
          <h4 className={classes.title}>{exp.title}</h4>
          <div className={classes.occupation}>{exp.occupation}</div>
          <div className={classes.date}>{exp.date}</div>
          <div className={classes.more}>Click to see more </div>
          <div className={classes.description}>
            <ul>
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
  );
}

export default ExperiencesList;
