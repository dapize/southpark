import { FC } from "react";
import { Box } from "@mui/system";
import * as S from "./YellowButton.styled";
import { YellowButtonProps } from "./YellowButton.d";

export const YellowButton: FC<YellowButtonProps> = ({ children, ...rest }) => {
  const { isLoading = false, ...restProps } = rest;
  return (
    <Box
      component="button"
      bgcolor="#fc0"
      height={42}
      border={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      columnGap={2}
      marginLeft="auto"
      marginRight="auto"
      disabled={isLoading}
      sx={{
        ":hover": { opacity: 0.85, cursor: "pointer" },
        transition: "opacity 0.1s ease-in-out",
        typography: "button",
      }}
      fontWeight={700}
      color="#000"
      {...restProps}
    >
      {isLoading ? (
        <>
          Loading...
          <S.Spinning></S.Spinning>
        </>
      ) : (
        children
      )}
    </Box>
  );
};
