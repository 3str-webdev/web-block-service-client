import { AddBlockItemDtoType } from "@/shared/api/generated";
import { UiButton } from "@/shared/uikit/ui-button";
import { UiFormElementWrapper } from "@/shared/uikit/ui-form-element-wrapper";
import { UiSelectField, UiSelectOption } from "@/shared/uikit/ui-select-field";
import { UiTextField } from "@/shared/uikit/ui-text-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";

const typeSelectOptions: UiSelectOption<AddBlockItemDtoType>[] = [
  {
    value: AddBlockItemDtoType.KeyWord,
    label: "KeyWord",
  },
  {
    value: AddBlockItemDtoType.Website,
    label: "Website",
  },
];

export const AddBlockItemForm = () => {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  const textFieldPlaceholderVariants: Record<typeof type, string> = {
    KeyWord: "Enter Key Word...",
    Website: "Enter Website URL...",
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiFormElementWrapper className="grow min-w-[200px]">
        <UiSelectField
          placeholder="Select Type Blocking"
          options={typeSelectOptions}
          {...register("type")}
        />
      </UiFormElementWrapper>

      <UiFormElementWrapper className="grow">
        <UiTextField
          placeholder={textFieldPlaceholderVariants[type]}
          {...register("data")}
        />
      </UiFormElementWrapper>

      <UiButton type="submit" disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
};
