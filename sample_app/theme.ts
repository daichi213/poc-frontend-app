import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    // コンポーネント名
    MuiButton: {
      styleOverrides: {
        // CSSルール名
        contained: {
          // CSS定義
          color: "white",
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ff8e88",
    },
  },
});
