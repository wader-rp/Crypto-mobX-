import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import CssBaseLine from "@mui/material/CssBaseline";
import "./index.css";
import theme from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <App />
  </ThemeProvider>,
);
