import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { App } from "./_root/App";
import { MAIN_THEME } from "./styles/variables/themes";

const rootElement = document.getElementById("root");
const theme = createTheme(MAIN_THEME);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
