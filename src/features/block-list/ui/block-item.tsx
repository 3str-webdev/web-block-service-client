import { useDeleteBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { TrashIcon } from "@/shared/uikit/icons";
import { UiButton } from "@/shared/uikit/ui-button";
import clsx from "clsx";

type BlockItemProps = {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
};

export const BlockItem = ({ id, type, data }: BlockItemProps) => {
  const deleteBlockItemMutation = useDeleteBlockItemMutation();

  const handleDeleteButtonClick = () => {
    deleteBlockItemMutation.mutate(id);
  };

  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex flex-col">
        <div className="text-lg">{data}</div>
        <div className="text-slate-400 text-sm">{type}</div>
      </div>

      <div>
        <UiButton
          variant="outlined"
          className={clsx(
            "border-2 border-rose-300 text-rose-500",
            "hover:border-rose-400 hover:bg-rose-100"
          )}
          onClick={handleDeleteButtonClick}
          disabled={deleteBlockItemMutation.isPending}
        >
          <TrashIcon />
        </UiButton>
      </div>
    </div>
  );
};
