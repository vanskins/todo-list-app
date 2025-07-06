"use client";

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
  const isActive = field === label;
  const nextDirection = direction === "asc" ? "desc" : "asc";

  return (
    <button
      className={`flex items-center gap-1 px-2 py-1 rounded text-sm font-medium transition-colors ${
        isActive
          ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
      }`}
      onClick={() => onSort(nextDirection, label)}
    >
      <span>{label}</span>
      {isActive ? (
        direction === "asc" ? <SortAsc size={16} /> : <SortDesc size={16} />
      ) : (
        <SortAsc size={16} className="opacity-30" />
      )}
    </button>
  );
};

export default Sort;
