import { FC } from "react";
import Box from "@mui/system/Box";
import { TypographyProps } from "./Typography.d";

export const Typography: FC<TypographyProps> = ({
  children,
  variant = "body1",
  sx = {},
  ...rest
}) => {
  const { fontWeight, color, ...restProps } = rest;
  return (
    <Box sx={{ typography: variant, fontWeight, color, ...sx }} {...restProps}>
      {children}
    </Box>
  );
};
