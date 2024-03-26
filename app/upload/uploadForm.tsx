"use client";
import { Ellipsis } from "lucide-react";
import { SelectFile } from "./selectFile";
import { UploadButton } from "./uploadButton";
import { FormEvent, useState } from "react";
import FileList from "./fileList";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export const UploadForm = () => {
  const [file, setFile] = useState<null | File>(null);
  const [error, setErrors] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (file) {
      setErrors(null);

      if (file.type === "application/pdf") {
        try {
          setLoading(true);
          axios
            .post(
              "http://localhost:8000/upload",
              {
                pdfFile: file,
              },
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent): void => {
                  let totalprogress = progressEvent.total
                    ? progressEvent.total
                    : 100;
                  const progress = Math.ceil(
                    (progressEvent.loaded / totalprogress) * 100
                  );
                  setProgress(progress);
                },
                onDownloadProgress: (progressEvent): void => {
                  let totalprogress = progressEvent.total
                    ? progressEvent.total
                    : 100;
                  const progress = Math.ceil(
                    (progressEvent.loaded / totalprogress) * 100
                  );
                  setProgress(progress);
                },
              }
            )
            .then((response) => {
              setLoading(false);
              setTimeout(() => {
                router.push(`/upload/${response.data.docId}`);
              }, 1000);
            })
            .catch((e) => {
              setErrors("Something went wrong!");
              setLoading(false);
            });
        } catch (e) {
          setLoading(false);
        }
      } else {
        setFile(null);
        setErrors("Please select a valid PDF file!");
      }
    } else {
      setErrors("Please select a file to proceed!");
      setFile(null);
    }
  };
  return (
    <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="flex flex-row gap-[2vw] mt-[2vw] ">
        <div className="flex flex-col">
          <SelectFile
            setFile={setFile}
            setErrors={setErrors}
            loading={loading}
          />
        </div>
        <div className="w-full flex flex-col justify-between py-[.5vw] h-[24vw] gap-[1vw]">
          {file && (
            <FileList
              file={file}
              setFile={setFile}
              progress={progress}
              setProgress={setProgress}
              loading={loading}
            />
          )}

          {!file && (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-sm text-customBgAccent">No Files Selected</p>
            </div>
          )}

          {/**
           *
           *
           * PROGRESS BAR OF UPLOAD PDF GOES HERE
           * Error Messages also goes here
           *
           */}
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col gap-[1vw]">
            {progress !== 0 ? (
              <Progress value={progress} className="bg-white " />
            ) : (
              <></>
            )}
            <div className="flex flex-row gap-[1vw]">
              <UploadButton loading={loading} setLoading={setLoading} />
              <button className="p-[.75vw] bg-customBgSecondary rounded-[.5vw]">
                <Ellipsis className="w-full  text-gradientColorTwo  font-medium  text-sm " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
