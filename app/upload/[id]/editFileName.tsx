"use client";
import { Input } from "@/components/ui/input";
import { OriginalPDFtype } from "@/app/models/types";
import { useEffect, useRef, useState } from "react";

type props = {
  originalFile: null | OriginalPDFtype;
  newName: string;
  setNewName: React.Dispatch<React.SetStateAction<string>>;

};

export const EditFileName = ({ originalFile, newName, setNewName }: props) => {
  const [editable, setEditable] = useState<boolean>(false);

  

  useEffect(() => {
    if (originalFile) {
      setNewName(
        "Edited- " +
          originalFile.originalPdfName.slice(
            0,
            originalFile.originalPdfName.length - 4
          )
      );
    }
  }, [originalFile]);

  return (
    <div className="px-[1.5vw] py-[1.5vw] shadow-sm h-[20vh] flex items-center bg-white">
      <div className="w-full">
        <h1 className="md:text-[1.5vw] text-[4vw]  font-bold mb-[1vw] ">New File Name</h1>
        <div className="flex flex-row gap-[1.5vw]">
          <div className="w-full flex justify-center items-center">
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New File Name"
              className="md:text-[1.5vw] text-[3vw] leading-[3.75vw] md:leading-[1.75vw] px-[4vw] sm:px-[1.5vw] sm:py-[1.5vw] border border-customBgSecondary"
              disabled={!editable}
            />
          </div>
          {editable ? (
            <>
              <div className="flex flex-row jutify-center items-center gap-[2vw]">
                <div className="md:w-[15vw] w-[17.5vw]">
                  <button
                    onClick={() => setEditable(false)}
                    className="w-full md:text-[1.5vw] text-[2.5vw]  bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md"
                  >
                    SAVE
                  </button>
                </div>
                <div className="md:w-[15vw] w-[17.5vw]">
                  <button
                    onClick={() => {
                      setNewName(
                        originalFile
                          ? "Edited- " +
                              originalFile.originalPdfName.slice(
                                0,
                                originalFile.originalPdfName.length - 4
                              )
                          : ""
                      );
                      setEditable(false);
                    }}
                    className="md:text-[1.5vw] text-[2.5vw]  w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="md:w-[30vw] w-[35vw] ">
              <button
                onClick={() => setEditable(true)}
                className="md:text-[1.5vw] text-[3vw]  h-[100%] w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md"
              >
                EDIT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
