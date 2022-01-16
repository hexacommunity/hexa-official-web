import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

export const CustomButton = withStyles({
  root: {
    width: "100px",
    paddingTop: "15px",
    paddingBottom: "15px",
    textAlign: "center",
    color: "#000",
    backgroundColor: "#FAFAFA",
    color: "#000",
    border: "1px solid #000",

    "&:hover": {
      backgroundColor: "#000",
      color: "#FFF",
    },
  },
})((props) => <Button {...props} />);
