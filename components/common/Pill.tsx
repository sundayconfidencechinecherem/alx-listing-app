import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full border border-[#008489] text-sm text-[#008489] transition
        ${active ? "bg-[#008489] text-white" : "bg-gray-50 hover:bg-gray-300"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
