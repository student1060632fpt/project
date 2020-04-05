import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: "red",
    color: "#ffffff",
    "& span": {
      fontSize: 15,
    },
  },
  title: {
    fontSize: 100,
  },
}));

export default useStyles;
