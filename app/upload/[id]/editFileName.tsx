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
    <div className="px-[1.5vw] py-[1.5vw] shadow-sm h-[20vh] flex items-center">
      <div className="w-full">
        <h1 className="text-xl  font-bold ">New File Name</h1>
        <div className="flex flex-row gap-[1.5vw]">
          <div className="w-full">
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New File Name"
              className="mt-[.5vw]"
              disabled={!editable}
            />
          </div>
          {editable ? (
            <>
              <div className="w-[15vw]">
                <button
                  onClick={() => setEditable(false)}
                  className="mt-[.5vw] w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md"
                >
                  SAVE
                </button>
              </div>
              <div className="w-[15vw]">
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
                  className="mt-[.5vw] w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md"
                >
                  CANCEL
                </button>
              </div>
            </>
          ) : (
            <div className="w-[30vw]">
              <button
                onClick={() => setEditable(true)}
                className="mt-[.5vw] w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md"
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
