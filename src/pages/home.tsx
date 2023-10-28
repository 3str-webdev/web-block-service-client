import { AddBlockItemForm, BlockList } from "@/features/block-list";
import { ToggleBlockButton } from "@/features/toggle-block";
import { UiHeader } from "@/shared/uikit/ui-header";
import { ProfileHeader } from "@/widgets/profile-header";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UiHeader contentElement={<ProfileHeader />} />
      <div className="grow grid grid-cols-[230px_1fr]">
        <aside className="p-5 border-r border-purple-700 bg-slate-50">
          <ToggleBlockButton className="w-full" />
        </aside>
        <main className="p-5">
          <AddBlockItemForm />
          <BlockList className="mt-5" />
        </main>
      </div>
    </div>
  );
}
