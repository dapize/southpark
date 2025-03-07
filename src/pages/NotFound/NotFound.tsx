import { Box } from "@mui/system";
import NotFoundImg from "./assets/not-found.png";

export const NotFound = () => {
  return (
    <Box
      component="img"
      src={NotFoundImg}
      display="block"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="80%"
      borderRadius={1}
    />
  );
};
