import { FC } from "react";
import { Typography, TypographyProps } from "@components/Typography";

export const YellowButton: FC<TypographyProps> = ({ children, ...rest }) => {
  return (
    <Typography
      component="button"
      variant="button"
      bgcolor="#fc0"
      height={42}
      border={0}
      fontWeight={700}
      color="#000"
      display="block"
      marginLeft="auto"
      marginRight="auto"
      sx={{
        ":hover": { opacity: 0.85, cursor: "pointer" },
        transition: "opacity 0.1s ease-in-out",
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
