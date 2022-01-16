import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { App } from "./App";
import { DEFAULT_THEME } from "./styles/themes";

const rootElement = document.getElementById("root");

const theme = createTheme(DEFAULT_THEME);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
