import { ArrowLeft, DownloadIcon, Share2, Trash2 } from "lucide-react";
import React from "react";

const DownloadPDF = () => {
  return (
    <div>
      <div className="w-full h-screen p-4 flex flex-col pt-14 bg-[#f5f5fa]">
        <h1 className="text-4xl font-medium text-center">
          Your PDF is ready! Click to download.
        </h1>
        <div className="flex flex-row gap-[2vw] w-1/3 mx-auto justify-center items-center mt-[2vw]">
          <div className="cursor-pointer shadow-md text-md flex items-center justify-center p-3 rounded-full text-white bg-customBgSecondary">
            <ArrowLeft />
          </div>
          <div className="grow">
            <button className="w-full shadow-lg flex flex-row gap-[.5vw] justify-center items-center bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-[2vw] p-[1.75vw] rounded-md">
              <DownloadIcon /> Download PDF
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer  shadow-md text-xs flex items-center justify-center p-3 rounded-full text-white bg-customBgSecondary">
              <Trash2 />
            </div>
            <div className="cursor-pointer   shadow-md text-md flex items-center justify-center p-3 rounded-full text-white bg-customBgSecondary">
              <Share2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPDF;
