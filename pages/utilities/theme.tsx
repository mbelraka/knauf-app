import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009FE3",
    },
  },
  typography: {
    fontFamily: [
      "Calibri Light",
      "Candara",
      "Segoe",
      "Segoe UI",
      "Roboto",
      "Optima",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
