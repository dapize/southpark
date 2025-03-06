import { TextField } from "@components/TextField";
import { Typography } from "@components/Typography";
import * as S from "./LoginForm.styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormFields } from "./LoginForm.d";
import { joiResolver } from "@hookform/resolvers/joi";
import { LoginFormSchema } from "./LoginForm.schema";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginFormFields>({
    resolver: joiResolver(LoginFormSchema),
  });

  const handleOnSubmit: SubmitHandler<ILoginFormFields> = (
    data: ILoginFormFields
  ) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        component="h4"
      >
        Sign In
      </Typography>
      <TextField
        placeholder="Email"
        id="email"
        label="Email"
        type="email"
        fullWidth
        required
        {...register("email")}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
        fullWidth
        required
        {...register("password")}
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
    </S.Form>
  );
};
