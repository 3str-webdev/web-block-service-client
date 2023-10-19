import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";
import { UiHeader } from "@/shared/uikit/ui-header";

export function HomePage() {
  const { data } = useSessionQuery();
  return (
    <>
      <UiHeader
        contentElement={
          <div className="flex items-center gap-2">
            {data?.email}
            <SignOutButton />
          </div>
        }
      />
    </>
  );
}
