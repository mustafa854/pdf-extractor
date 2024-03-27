import React from "react";
import { UploadForm } from "./uploadForm";

const UploadFile = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center gap-[5vw]  sm:gap-[2vw]">
      <div className="bg-customBgPrimary w-[90vw] md:w-[70vw] pb-[5vw] pt-[3vw] px-[5vw] sm:pt-[3vw] sm:pb-[3vw] sm:p-[3vw] rounded-[1.5vw] shadow-3xl">
        <h1 className="md:text-[2.5vw] text-[7vw] text-textWhite font-bold">Submit your files</h1>
        <p className="md:text-[1.25vw] text-[4vw] text-customBgAccent md:mt-[.15vw]">Fast and Secure</p>
        <UploadForm />
      </div>
    </div>
  );
};

export default UploadFile;
