import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/system";
import { Global } from "@emotion/react";
import { theme } from "@theme/theme";
import { globalStyles } from "@theme/globalStyles";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <App />
  </ThemeProvider>
);
