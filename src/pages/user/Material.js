import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./../../style";

export default function Material() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <h3 className={classes.title}>Button Demo</h3>
      <span>Demo Material</span>
      <Button variant="contained" color="secondary">
        Primary
      </Button>
    </div>
  );
}
