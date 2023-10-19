import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type SignUpFormModel = {
  email: string;
  password: string;
};

export const useSignUpForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<SignUpFormModel>({
    values: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const handleFormSubmit = handleSubmit((data: SignUpFormModel) => {
    signUpMutation.mutate(data);
  });

  const errorMessage = signUpMutation.error ? "Sign up failed" : undefined;

  return {
    handleFormSubmit,
    errorMessage,
    control,
    isPending: signUpMutation.isPending,
  };
};
