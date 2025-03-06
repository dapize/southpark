import { BoxProps } from "@mui/system";

export interface TextFieldProps extends BoxProps<"input">  {
  label: string;
  fullWidth?: boolean;
}
