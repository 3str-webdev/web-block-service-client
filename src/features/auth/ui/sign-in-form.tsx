import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/uikit/ui-button";
import { UiFormElementWrapper } from "@/shared/uikit/ui-form-element-wrapper";
import { UiLink } from "@/shared/uikit/ui-link";
import { UiTextField } from "@/shared/uikit/ui-text-field";
import { Controller } from "react-hook-form";
import { useSignInForm } from "../model/use-sign-in-form";

export const SignInForm = () => {
  const { handleFormSubmit, control, isPending, errorMessage } =
    useSignInForm();

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-2">
        <Controller
          name="email"
          control={control}
          rules={{
            required: { message: "Email is required field", value: true },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <UiFormElementWrapper
                label="Email"
                errorText={error?.message}
                render={(id) => {
                  return (
                    <UiTextField
                      id={id}
                      type="email"
                      onChange={onChange}
                      value={value}
                    />
                  );
                }}
                isRequired
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: { message: "Password is required field", value: true },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <UiFormElementWrapper
                label="Password"
                errorText={error?.message}
                render={(id) => {
                  return (
                    <UiTextField
                      id={id}
                      type="password"
                      onChange={onChange}
                      value={value}
                    />
                  );
                }}
                isRequired
              />
            );
          }}
        />
      </div>

      <div className="mt-5 flex justify-between items-center">
        <UiLink href={ROUTES.SIGN_UP}>Sign Up</UiLink>
        <UiButton disabled={isPending} type="submit">
          Submit
        </UiButton>
      </div>
      {errorMessage && (
        <p className="text-center text-rose-500 mt-5">{errorMessage}</p>
      )}
    </form>
  );
};
