import { Check, X } from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type FileListProps = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  loading: boolean;
};

const FileList = ({
  file,
  setFile,
  progress,
  setProgress,
  loading,
}: FileListProps) => {
  const loaded = 0;
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-[1vw]">
        <div className=" bg-customBgSecondary rounded-[.5vw] px-[1vw] py-[1.25vw]">
          <p className="text-textWhite text-base font-medium text-clip">
            {file?.type.replace(/^application\//, "").toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col justify-between my-[.35vw]">
          <p className="text-textWhite text-base font-medium line-clamp-1">
            {file?.name}
          </p>
          <p className="text-sm text-customBgAccent">
            {file ? `${(file.size / 1000).toFixed(1)} KB` : "NA"}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-[1.5vw] ">
        {progress === 100 ? (
          <div className=" rounded-full bg-customBgGreen p-[.7vw]">
            <Check className="text-textWhite font-medium" />
          </div>
        ) : (
          <div className="border-2 border-customBgAccent rounded-full p-[1vw]">
            <p className="text-textWhite text-sm font-medium">{progress}%</p>
          </div>
        )}

        <X
          className="h-[2vw] text-textWhite fill-textWhite cursor-pointer"
          onClick={() => (loading ? null : setFile(null))}
        />
      </div>
    </div>
  );
};

export default FileList;
