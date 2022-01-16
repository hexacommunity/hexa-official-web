import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { App } from "./App";

const rootElement = document.getElementById("root");
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", serif',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
