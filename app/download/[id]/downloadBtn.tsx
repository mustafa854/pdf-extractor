"use client";
import { DownloadIcon } from "lucide-react";

export const DownloadBtn = ({ id }: { id: string }) => {
  const handleClick = () => {
    window.open(`http://localhost:8000/uploads/${id}.pdf`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full shadow-lg flex flex-row gap-[.5vw] justify-center items-center bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-[2vw] p-[1.75vw] rounded-md"
    >
      <DownloadIcon /> Download PDF
    </button>
  );
};
