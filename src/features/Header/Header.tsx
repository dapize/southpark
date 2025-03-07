import Box from "@mui/system/Box";
import Logo from "./assets/logo.png";
import { Link } from "react-router";
import { routes } from "@routes/routes";
import LogoutIcon from "./assets/logout-icon.png";
import { useUserStore } from "@hooks/user";
import * as S from "./Header.styled";

export const Header = () => {
  const cleanUserData = useUserStore((state) => state.cleanData);
  const userData = useUserStore((state) => state.userData);

  return (
    <Box
      bgcolor="#111111"
      height={110}
      component="header"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      position="relative"
    >
      <Box component={Link} to={routes.home} width={445} maxWidth="60%">
        <Box component="img" src={Logo} marginBlock="auto" width="100%" />
      </Box>
      {!!userData && (
        <S.LogoutButton onClick={cleanUserData}>
          <Box
            component="img"
            src={LogoutIcon}
            width="100%"
            sx={{ pointerEvents: "none" }}
          />
        </S.LogoutButton>
      )}
    </Box>
  );
};
