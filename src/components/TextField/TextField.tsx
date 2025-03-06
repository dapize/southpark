import { FC } from "react";
import { TextFieldProps } from "./TextField.d";
import { Box } from "@mui/system";

export const TextField: FC<TextFieldProps> = ({
  label,
  fullWidth = false,
  id,
  ...rest
}) => {
  return (
    <Box
      width={fullWidth ? "100%" : "394px"}
      bgcolor="#262626"
      height={51}
      position="relative"
    >
      <Box
        component="input"
        width="100%"
        height="100%"
        padding="13px 24px 16px 12px"
        border="1px solid transparent"
        bgcolor="transparent"
        id={id}
        sx={{
          typography: "subtitle2",
          fontWeight: 700,
          outline: 0,
          ":focus, :not(:placeholder-shown)": {
            borderColor: "white",
            "+ label": {
              top: "-25px",
              left: 0,
              typography: "body2",
              fontWeight: 700,
            },
          },
          "::placeholder": {
            color: "transparent",
          },
        }}
        {...rest}
      />
      <Box
        component="label"
        htmlFor={id}
        color="white"
        sx={{
          typography: "subtitle2",
          pointerEvents: "none",
          transition: "top .16s ease-in-out, left .15s ease-in-out",
        }}
        position="absolute"
        left={15}
        top={15}
      >
        {label}
      </Box>
    </Box>
  );
};
