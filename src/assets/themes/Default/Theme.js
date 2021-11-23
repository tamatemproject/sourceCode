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
export const TextColors = {
  main: "#1E3A56",
};
export const GreyColors = {
  main: "#B0CAD1",
};

const customTheme = createTheme({
  palette: {
    primary: { ...PrimaryColors, contrastText: "#fff" },
    secondary: { ...SecondaryColors, contrastText: "#fff" },
    tertiary: { ...TertiaryColors, contrastText: "#fff" },
    text: { ...TextColors, contrastText: "#fff" },
    grey: { ...GreyColors, contrastText: "#fff" },
  },
  spacing: 10,
  shape: {
    borderRadius: 23.5,
  },
});

export default customTheme;
