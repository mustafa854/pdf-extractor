import { ArrowLeft, DownloadIcon, Share2, Trash2 } from "lucide-react";
import React from "react";
import { BackBtn } from "./backBtn";
import { DownloadBtn } from "./downloadBtn";

type props = {
  params: {
    id: string;
  };
};

const DownloadPDF = ({ params: { id } }: props) => {
  // const response = await fetch(`http://localhost:8000//${id}`)

  return (
    <div>
      <div className="w-full h-screen p-4 flex flex-col pt-14 bg-[#f5f5fa]">
        <h1 className="text-4xl font-medium text-center">
          Your PDF is ready! Click to download.
        </h1>
        <div className="flex flex-row gap-[2vw] w-1/3 mx-auto justify-center items-center mt-[2vw]">
          <BackBtn />
          <div className="grow">
            <DownloadBtn id={id} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="  shadow-md text-xs cursor-not-allowed flex items-center justify-center p-3 rounded-full text-white bg-customBgSecondary">
              <Trash2 />
            </div>
            <div className="cursor-not-allowed   shadow-md text-md flex items-center justify-center p-3 rounded-full text-white bg-customBgSecondary">
              <Share2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPDF;
