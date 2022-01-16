import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { App } from "./App";

const rootElement = document.getElementById("root");

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", serif',
    h1: {
      fontSize: "5rem",
    },
    h2: {
      fontSize: "3.125rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "1.7708rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1.0416rem",
    },
    body2: {
      fontSize: "0.8291rem",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
