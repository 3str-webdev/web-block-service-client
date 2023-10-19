import { SignInForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/uikit/layouts";
import { UiHeader } from "@/shared/uikit/ui-header";

export const SignInPage = () => {
  return (
    <UiFormPageLayout
      header={<UiHeader />}
      form={<SignInForm />}
      title="Sign In"
    />
  );
};
