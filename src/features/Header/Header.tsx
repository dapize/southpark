import Box from "@mui/system/Box";
import Logo from "./assets/logo.png";

export const Header = () => {
  return (
    <Box
      bgcolor="#111111"
      height={110}
      component="header"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Box
        component="img"
        src={Logo}
        marginBlock="auto"
        width={445}
        maxWidth="90%"
      />
    </Box>
  );
};
