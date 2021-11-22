import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core";
import customTheme from "./assets/themes/Default/Theme";

const ProviderWrapper = ({ children }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

ProviderWrapper.prototypes = {
  children: PropTypes.shape().isRequired,
};

export default ProviderWrapper;
