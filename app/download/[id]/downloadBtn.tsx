"use client";
import { DownloadIcon } from "lucide-react";

export const DownloadBtn = ({ id }: { id: string }) => {
  const handleClick = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${id}.pdf`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-[6vw] py-[4vw] shadow-lg flex flex-row gap-[.5vw] justify-center items-center bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium text-[4vw]  md:text-[2vw] sm:px-[3vw] sm:py-[2vw] md:p-[1.75vw] rounded-md"
    >
      <DownloadIcon /> Download PDF
    </button>
  );
};
