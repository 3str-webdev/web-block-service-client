import { ReactNode } from "react";

export type UiFormPageLayoutProps = {
  header?: ReactNode;
  title: string;
  form?: ReactNode;
};

export const UiFormPageLayout = ({
  header,
  form,
  title,
}: UiFormPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <main className="grow flex flex-col">
        <div className="rounded-xl shadow px-14 py-8 w-full max-w-sm m-auto bg-slate-50">
          <h1 className="text-2xl pb-5">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};
