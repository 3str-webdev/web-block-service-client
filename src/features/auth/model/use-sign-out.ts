import { useResetSession } from "@/entities/session";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useSignOut = () => {
  const router = useRouter();
  const resetSession = useResetSession();

  const { mutate: signOut, isPending } = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: () => {
      router.replace(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    signOut,
    isPending,
  };
};
