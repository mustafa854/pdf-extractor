"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { SrollArea } from "./scrollArea";
import { LeftNav } from "./leftNav";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import axios from "axios";
import { OriginalPDFtype } from "@/app/models/types";
import { EditFileName } from "./editFileName";
import { useRouter } from "next/navigation";
import { ButtonSpinner } from "@/app/components/buttonSpinner";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { FileText } from "lucide-react";

type GeneratePDFProps = {
  params: {
    id: string;
  };
};

const GeneratePDF = ({ params: { id } }: GeneratePDFProps) => {
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);
  const [originalFile, setOriginalFile] = useState<null | OriginalPDFtype>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [selectedPages, setSelectedPages] = useState<null | number[]>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/upload/${id}`)
      .then((response) => {
        setError(null);
        setOriginalFile(response.data);
      })
      .catch((e) =>
        setError(
          "Something went wrong! Please refresh or try again after sometime."
        )
      );
  }, []);

  const [newName, setNewName] = useState<string>(
    originalFile
      ? "Edited- " +
          originalFile.originalPdfName.slice(
            0,
            originalFile.originalPdfName.length - 4
          )
      : ""
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await axios
        .post("http://localhost:8000/generate-pdf", {
          newName,
          selectedPages,
          originalPdfId: originalFile?.originalPdfId,
        })
        .then((response) => {
          const pdfId = response.data; // Assuming the response contains the PDF ID
          setLoading(false);

          router.push(`/download/${pdfId}`);
        })
        .catch((e) => {
          setLoading(false);
          setError(
            "Something went wrong! Please refresh or try again after sometime."
          );
        });
    } catch (error) {
      setLoading(false);
      setError(
        "Something went wrong! Please refresh or try again after sometime."
      );
    }
  };

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen w-full bg-[#f5f5fa]"
      >
        <ResizablePanel
          className="hidden md:block bg-white"
          maxSize={25}
          defaultSize={20}
          minSize={15}
        >
          <LeftNav
            loading={loading}
            setLoading={setLoading}
            errors={error}
            selectedPages={selectedPages}
            totalPages={totalPages}
            handleSubmit={handleSubmit}
          />
        </ResizablePanel>
        <ResizableHandle className="hidden md:block" withHandle />
        <ResizablePanel defaultSize={80}>
          <div>
            <EditFileName
              originalFile={originalFile}
              newName={newName}
              setNewName={setNewName}
            />
            <SrollArea
              originalFile={originalFile}
              setTotalPages={setTotalPages}
              totalPages={totalPages}
              selectedPages={selectedPages}
              setSelectedPages={setSelectedPages}
              loading={loading}
            />
          </div>{" "}
          <div className="grow flex items-end px-4 absolute left-[50vw] translate-x-[-50%] bottom-[2vw] md:hidden">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger className="w-full" asChild>
                  <div className=" translate-y-[-200%] ">
                    {/* {errors && <p className="text-red-500">{errors}</p>} */}

                    <button
                      disabled={
                        !selectedPages || selectedPages.length === 0 || loading
                          ? true
                          : false
                      }
                      className=" w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md disabled:from-slate-500 disabled:to-slate-500 disabled:cursor-not-allowed"
                      onClick={handleSubmit}
                    >
                      {loading ? (
                        <div className="flex flex-row gap-[1vw] justify-center items-center">
                          <ButtonSpinner size={4} color="black" />
                          GENERATING...
                        </div>
                      ) : (
                        <div className="flex flex-row gap-[1vw] justify-center items-center">
                          <FileText />
                          GENERATE PDF
                        </div>
                      )}
                    </button>
                  </div>
                </TooltipTrigger>
                {!selectedPages ? (
                  <TooltipContent className="">
                    <p>Select atleast 1 page!</p>
                  </TooltipContent>
                ) : (
                  <></>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default GeneratePDF;
