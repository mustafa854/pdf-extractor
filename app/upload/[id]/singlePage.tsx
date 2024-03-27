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
        className="flex flex-col justify-center items-center       "
      >
        <div className="bg-textWhite rounded-[1.5vw] border border-dashed border-customBgPrimary shadow-md px-[2.5vw] pt-[2.5vw] pb-[1vw] xl:px-[1.5vw] xl:pt-[1.5vw] xl:pb-[.75vw] xl:rounded-[.5vw] lg:px-[1.5vw] lg:pt-[1.5vw] lg:pb-[.75vw] lg:rounded-[.5vw]">
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
          </div>

          <div className="mt-[1vw] xl:mt-[.5vw] text-[1vw] text-customBgSecondary">
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
              <span className="ms-[1vw] text-[3vw] sm:text-[2vw] md:text-[1.5vw] xl:text-[1.25vw]">
                {" "}
                Page {i + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};
