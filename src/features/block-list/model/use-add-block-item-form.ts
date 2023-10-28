import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDto } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export const useAddBlockItemForm = () => {
  const { handleSubmit, register, watch, reset } = useForm<AddBlockItemDto>();

  const addBlockItemMutation = useAddBlockItemMutation();

  const handleAddBlockItemSubmit = handleSubmit((data: AddBlockItemDto) => {
    addBlockItemMutation.mutate(data, { onSuccess: () => reset() });
  });

  const type = watch("type");

  return {
    handleSubmit: handleAddBlockItemSubmit,
    isLoading: addBlockItemMutation.isPending,
    register,
    type,
  };
};
