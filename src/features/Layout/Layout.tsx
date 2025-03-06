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
      justifyContent="center"
      alignItems="center"
      bgcolor="#000"
    >
      <Header />
      <Box component="main" width="100%" paddingBlock={4} maxWidth={1440}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
