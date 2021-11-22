import { createTheme } from "@material-ui/core";

export const PrimaryColors = {
  main: "#F75757",
};
export const SecondaryColors = {
  main: "#78D25B",
};
export const TertiaryColors = {
  main: "#FA9441",
};

const customTheme = createTheme({
  palette: {
    primary: { ...PrimaryColors, contrastText: "#fff" },
    secondary: { ...SecondaryColors, contrastText: "#fff" },
    tertiary: { ...TertiaryColors, contrastText: "#fff" },
  },
});

export default customTheme;
