import { Typography } from "@components/Typography";

export const Footer = () => {
  return (
    <Typography
      variant="caption"
      bgcolor="#25252A"
      color="#A8A8AB"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={75}
      width="100%"
      fontWeight="bold"
      textAlign="center"
      paddingInline={2}
    >
      © 2025 South Park - no rights reserved, I always wanted to say that XD
    </Typography>
  );
};
