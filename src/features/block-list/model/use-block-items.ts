import { useBlockListQuery } from "@/entities/block-list";
import { useDebouncedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export const useBlockItems = () => {
  const [q, setQ] = useState<string>("");

  const blockListQuery = useBlockListQuery(useDebouncedValue(q, 300));

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
};
