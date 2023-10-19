import { SignUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/uikit/layouts";
import { UiHeader } from "@/shared/uikit/ui-header";

export const SignUpPage = () => {
  return (
    <UiFormPageLayout
      header={<UiHeader />}
      form={<SignUpForm />}
      title="Sign Up"
    />
  );
};
