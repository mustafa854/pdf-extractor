"use client";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type SelectFileProps = {
  setFile: Dispatch<SetStateAction<File | null>>;
  setErrors: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
};

export const SelectFile = ({
  setFile,
  setErrors,
  loading,
}: SelectFileProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].type === "application/pdf") {
        setFile(e.target.files[0]);
        setErrors(null);
      } else {
        setFile(null);
        setErrors("Please select a valid PDF file!");
      }
    }
  };
  return (
    <label htmlFor="pdf-file">
      <div className="cursor-pointer flex flex-col w-[24vw] h-[24vw] bg-customBgSecondary border-dashed border-2  rounded-[1.5vw] border-textMutedWhite items-center justify-center">
        <input
          type="file"
          accept="pdf"
          onChange={handleFileChange}
          name="pdf-file"
          id="pdf-file"
          disabled={loading}
        />
        <Image
          src="/upload-undraw.svg"
          width={500}
          height={500}
          className="w-[5vw]"
          alt="file upload image"
        />
        <p className=" text-textWhite text-lg font-medium mt-[1.5vw]">
          Select your file here
        </p>
        <p className="text-sm text-customBgAccent mt-[.5vw]">PDF files only</p>
      </div>
    </label>
  );
};
