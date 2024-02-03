import { Fragment } from "react";
import classes from "./RepoList.module.css";
import Button from "../UI/Button";

function RepoList(props) {
  const { repos } = props;
  const filterRepos = repos.filter((repo) => repo.description != null);
  return (
    <Fragment>
      {filterRepos.map((git) => (
        <div key={git.id} className={classes.repo}>
          <h4 className={classes.name}>{git.name}</h4>
          <div className={classes.description}>
            {git.description ? git.description : "No description"}
          </div>
          <Button
            className={classes.button}
            onClick={() => window.open(git.html_url)}
          >
            View
          </Button>
        </div>
      ))}
    </Fragment>
  );
}

export default RepoList;
