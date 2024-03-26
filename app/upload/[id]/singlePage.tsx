"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Page } from "react-pdf";

type props = {
  i: number;
  selectedPages: number[] | null;
  setSelectedPages: React.Dispatch<React.SetStateAction<number[] | null>>;
};

export const SinglePage = ({ i, selectedPages, setSelectedPages }: props) => {
  //   const [loading, setLoading] = useState<boolean>(true);
  //   const [showError, setShowerror] = useState<boolean>(false);

  return (
    <label htmlFor={`${i}`} className="cursor-pointer">
      <div
        key={i + 1}
        className="felx flex-col justify-center items-center border border-dashed border-customBgPrimary      "
      >
        <div className="bg-textWhite rounded-md shadow-md px-[2.5vw] pt-[2.5vw] pb-[1vw] m-[1.5vw]">
          <div className="relative">
            <Page
              pageNumber={i + 1}
              // renderMode={"svg"}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="flex justify-center items-center mx-auto"
              width={140}
              //   onLoadSuccess={() => setLoading(false)}
              //   onLoadError={() => setLoading(false)}
            />
            {/* {
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center">
                  <div className="border-gray-300 h-4 w-4 animate-spin rounded-full border-2 border-t-black" />
                </div>{" "}
              </div>
            }
            {showError && (
              <p className="text-xs text-red-500">
                Something went wrong! please refresh.
              </p>
            )} */}
          </div>

          <div className="mt-[1vw] text-[1vw] text-customBgSecondary">
            <div className="flex items-center space-x-2 justify-center">
              <Checkbox
                id={`${i}`}
                onCheckedChange={(checked) => {
                  if (checked) {
                    // If the checkbox is checked
                    setSelectedPages((prevSelectedPages) => {
                      // If selectedPages exists, add the new page to it,
                      // otherwise, initialize selectedPages with the new page
                      return selectedPages ? [...selectedPages, i] : [i];
                    });
                  } else {
                    // If the checkbox is unchecked
                    setSelectedPages((prevSelectedPages) => {
                      // If selectedPages exists, filter out the page to be unchecked
                      return selectedPages
                        ? selectedPages.filter((page) => page !== i)
                        : null;
                    });
                  }
                }}
              />
              <span className="ms-[1vw]"> Page {i + 1}</span>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};
