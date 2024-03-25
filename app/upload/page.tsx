import React from "react";
import { UploadForm } from "./uploadForm";

const UploadFile = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center  gap-[2vw]">
      <div className="text-xl bg-customBgPrimary w-[70vw] p-[3vw] rounded-[1.5vw] shadow-3xl">
        <h1 className="text-2xl text-textWhite font-bold">Submit your files</h1>
        <p className="text-sm text-customBgAccent mt-[.5vw]">Fast and Secure</p>
        <UploadForm />
      </div>
    </div>
  );
};

export default UploadFile;
