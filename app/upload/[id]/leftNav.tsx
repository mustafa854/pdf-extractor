"use client";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { FileText, UploadIcon } from "lucide-react";
import { ButtonSpinner } from "@/app/components/buttonSpinner";
import { Progress } from "@/components/ui/progress";

type props = {
  selectedPages: number[] | null;
  totalPages: number | null;
  handleSubmit: (e: FormEvent) => void;
  errors: string | null;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const LeftNav = ({
  selectedPages,
  totalPages,
  handleSubmit,
  errors,
  loading,
}: props) => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-customBgPrimary font-semibold text-center p-4 border-b border-customBgAccent">
        Add Pages
      </h1>
      <div className="flex flex-col justify-between h-full">
        <div className="p-4 flex flex-col gap-4">
          <div className="p-4 bg-blue-100 text-customBgSecondary rounded-md">
            <p className="text-[1vw]">
              Click on pages to add to the new document.
            </p>
          </div>
          <p className="text-[1vw]">
            Total Pages:{" "}
            <span className="text-[1.15vw] font-bold">
              {totalPages ? totalPages : <>Loading...</>}
            </span>
          </p>

          <div className="mt-6">
            <label htmlFor="pages" className="text-[1.15vw] font-semibold ">
              Pages to add:
            </label>

            <div className="w-full">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="w-full" asChild>
                    <Textarea
                      disabled
                      value={selectedPages ? selectedPages.join(", ") : ""}
                      placeholder="Select Page on the right"
                      className="mt-[.75vw] border border-customBgSecondary"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="">
                    <p>Select the pages from the right</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="grow flex items-end px-4">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger className="w-full" asChild>
                <div className=" translate-y-[-200%] ">
                  {errors && (
                    <p className="text-red-500">Please kuch toh kar le!</p>
                  )}

                  <button
                    disabled={
                      !selectedPages || selectedPages.length === 0 || loading
                        ? true
                        : false
                    }
                    className=" w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md disabled:from-slate-500 disabled:to-slate-500 disabled:cursor-not-allowed"
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <div className="flex flex-row gap-[1vw] justify-center items-center">
                        <ButtonSpinner size={4} color="black" />
                        GENERATING...
                      </div>
                    ) : (
                      <div className="flex flex-row gap-[1vw] justify-center items-center">
                        <FileText />
                        GENERATE PDF
                      </div>
                    )}
                  </button>
                </div>
              </TooltipTrigger>
              {!selectedPages ? (
                <TooltipContent className="">
                  <p>Select atleast 1 page!</p>
                </TooltipContent>
              ) : (
                <></>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};
