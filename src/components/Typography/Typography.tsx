import { FC } from "react";
import Box from "@mui/system/Box";
import { TypographyProps } from "./Typography.d";

export const Typography: FC<TypographyProps> = ({
  children,
  variant = "body1",
  ...rest
}) => {
  const { fontWeight, ...restProps } = rest;
  return (
    <Box sx={{ typography: variant, fontWeight }} {...restProps}>
      {children}
    </Box>
  );
};
