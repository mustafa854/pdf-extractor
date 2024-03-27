"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer shadow-md text-md flex items-center justify-center p-[3vw] sm:p-[1.5vw] rounded-full text-white bg-customBgSecondary"
    >
      <ArrowLeft />
    </button>
  );
};
