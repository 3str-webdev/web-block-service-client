import { UiButton } from "@/shared/uikit/ui-button";
import { useSignOut } from "../model/use-sign-out";

export const SignOutButton = () => {
  const { signOut, isPending } = useSignOut();
  return (
    <UiButton
      disabled={isPending}
      variant="outlined"
      onClick={() => signOut({})}
    >
      Sign Out
    </UiButton>
  );
};
