import { BoxProps, ResponsiveStyleValue } from "@mui/system";

export type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';

export interface TypographyProps extends BoxProps {
  variant?: TVariant | ResponsiveStyleValue;
}
