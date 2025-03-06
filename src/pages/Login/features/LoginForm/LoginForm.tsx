import { TextField } from "@components/TextField";
import { Typography } from "@components/Typography";
import { Box } from "@mui/system";

export const LoginForm = () => {
  return (
    <Box
      bgcolor="#111"
      p="35px 42px"
      borderRadius={1.5}
      display="flex"
      marginLeft="auto"
      marginRight="auto"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={480}
      width="80%"
      rowGap={4}
      component="form"
    >
      <Typography variant="h4" fontWeight={700} textAlign="center">
        Sign In
      </Typography>
      <TextField
        placeholder="Email"
        id="email"
        label="Email"
        type="email"
        fullWidth
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
        fullWidth
        required
      />

      <Typography
        component="button"
        variant="button"
        bgcolor="#fc0"
        height={42}
        width="100%"
        border={0}
        fontWeight={700}
        color="#000"
        sx={{
          ":hover": { opacity: 0.85, cursor: "pointer" },
          transition: "opacity 0.1s ease-in-out",
        }}
      >
        Sign In
      </Typography>
    </Box>
  );
};
