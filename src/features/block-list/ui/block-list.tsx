import { UiTextField } from "@/shared/uikit/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { ChangeEvent, HTMLAttributes } from "react";
import { BlockItem } from "./block-item";
import { UiSpinner } from "@/shared/uikit/ui-spinner";
import clsx from "clsx";

type BlockListProps = HTMLAttributes<HTMLElement>;

export const BlockList = ({ className, ...props }: BlockListProps) => {
  const { items, isLoading, q, setQ } = useBlockItems();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const getItemKey = (id: number) => {
    return `block_list_item_${id}`;
  };

  const getBlockListContent = () => {
    if (isLoading) {
      return <UiSpinner className="mx-auto" />;
    }

    if (!items.length) {
      return (
        <p className="text-lg text-center text-slate-400 mt-2">
          Elements not found
        </p>
      );
    }

    return (
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          return (
            <li key={getItemKey(item.id)}>
              <BlockItem id={item.id} type={item.type} data={item.data} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section {...props} className={clsx(className, "flex flex-col gap-2")}>
      <UiTextField
        placeholder="Search..."
        value={q}
        onChange={handleSearchChange}
      />
      {getBlockListContent()}
    </section>
  );
};
