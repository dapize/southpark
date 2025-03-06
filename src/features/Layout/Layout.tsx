import { Outlet } from "react-router";
import Box from "@mui/system/Box";
import { Footer } from "@features/Footer";
import { Header } from "@features/Header";

export const Layout = () => {
  return (
    <Box
      display="flex"
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      bgcolor="#f8f8f8"
    >
      <Header />
      <Box
        component="main"
        width="100%"
        paddingBlock={4}
        position="relative"
        minHeight="calc(100vh - 185px)"
      >
        <Box maxWidth={1440} marginLeft="auto" marginRight="auto">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
