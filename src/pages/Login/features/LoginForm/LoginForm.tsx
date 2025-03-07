import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { IPostLoginResponse, postLogin } from "@services/user";
import { IUseUserStore, useUserStore } from "@hooks/user";
import { TextField } from "@components/TextField";
import { Typography } from "@components/Typography";
import { useMutation } from "@tanstack/react-query";
import { ILoginFormFields } from "./LoginForm.d";
import { joiResolver } from "@hookform/resolvers/joi";
import { LoginFormSchema } from "./LoginForm.schema";
import { YellowButton } from "@components/YellowButton";
import { routes } from "@routes/routes";
import * as S from "./LoginForm.styled";

export const LoginForm = () => {
  const setUserSession = useUserStore((state) => state.setData);
  const { register, handleSubmit } = useForm<ILoginFormFields>({
    resolver: joiResolver(LoginFormSchema),
  });
  const navigate = useNavigate();

  useUserStore.subscribe((state: IUseUserStore) => {
    if (state.userData) {
      navigate(routes.home);
    }
  });

  const { mutate: mutateLogin, status } = useMutation({
    mutationFn: postLogin,
    mutationKey: ["userLogin"],
    onSuccess: (data: IPostLoginResponse) => {
      setUserSession(
        { ...data.user },
        {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresIn: data.expires_in,
          tokenType: data.token_type,
        }
      );
    },
  });

  const handleOnSubmit = (data: ILoginFormFields) => {
    mutateLogin(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        component="h4"
        color="white"
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

      <YellowButton width="100%" isLoading={status === "pending"}>
        Sign In
      </YellowButton>
    </S.Form>
  );
};
