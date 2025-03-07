import { ThemeProvider } from "@mui/system";
import { Global } from "@emotion/react";
import { theme } from "@theme/theme";
import { globalStyles } from "@theme/globalStyles";
import { AppRoutes } from "@routes/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
