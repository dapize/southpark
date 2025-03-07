import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/system";
import { Global } from "@emotion/react";
import { theme } from "@theme/theme";
import { globalStyles } from "@theme/globalStyles";
import { AppRoutes } from "@routes/Routes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
