import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type SignInFormModel = {
  email: string;
  password: string;
};

export const useSignInForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<SignInFormModel>({
    values: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const handleFormSubmit = handleSubmit((data: SignInFormModel) => {
    signInMutation.mutate(data);
  });

  const errorMessage = signInMutation.error ? "Sign in failed" : undefined;

  return {
    handleFormSubmit,
    errorMessage,
    control,
    isPending: signInMutation.isPending,
  };
};
