"use client";

import { useEffect } from "react";
import { SortAsc, SortDesc } from "lucide-react";

const Sort = ({
  direction,
  onSort,
  field,
  label,
}: {
  direction: "asc" | "desc";
  field: string;
  onSort: (direction: "asc" | "desc", field: string) => void;
  label: string;
}) => {
  useEffect(() => {
    onSort(direction, field);
  }, [direction, field]);

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center gap-2 cursor-pointer hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
        onClick={() => {
          onSort(direction === "asc" ? "desc" : "asc", label);
        }}
      >
        <span className="text-md font-semibold">{label}</span>
        {direction === "asc" && field === label ? <SortAsc /> : <SortDesc />}
      </button>
    </div>
  );
};

export default Sort;
