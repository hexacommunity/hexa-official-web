import { withStyles, Button } from "@material-ui/core";

export const CustomButton = withStyles({
  root: {
    width: "100px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    color: "#000",
    backgroundColor: "#FAFAFA",
    border: "1px solid #000",

    "&:hover": {
      backgroundColor: "#000",
      color: "#FFF",
    },
  },
})((props) => <Button {...props} />);
