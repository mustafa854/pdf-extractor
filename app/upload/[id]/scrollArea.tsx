"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { OriginalPDFtype } from "@/app/models/types";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { useEffect } from "react";
import { SinglePage } from "./singlePage";

type scrollAreaProps = {
  originalFile: OriginalPDFtype | null;
  setTotalPages: React.Dispatch<React.SetStateAction<number | null>>;
  totalPages: number | null;
  selectedPages: number[] | null;
  setSelectedPages: React.Dispatch<React.SetStateAction<number[] | null>>;
  loading: boolean;
};

export const SrollArea = ({
  originalFile,
  totalPages,
  setTotalPages,
  selectedPages,
  setSelectedPages,
  loading,
}: scrollAreaProps) => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
  };

  return (
    <>
      <ScrollArea className="h-screen">
        <div className="p-[5vw] sm:p-[3vw] xl:pb-[15vw]">
          <div className="h-full w-full">
            {loading ? (
              <>
                <div className="max-h-[80vh] flex flex-col justify-center items-center">
                  <p className="text-center pb-[2vw]">Generating PDF...</p>
                  <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center ">
                    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {originalFile ? (
                  <>
                    <Document
                      file={`${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${originalFile.originalPdfId}`}
                      onLoadSuccess={onDocumentLoadSuccess}
                      loading={
                        <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center h-[80vh]">
                          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
                        </div>
                      }
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:grid-cols-3 gap-[2vw]">
                        {totalPages ? (
                          Array.from({ length: totalPages }, (_, i) => (
                            <SinglePage
                              i={i}
                              selectedPages={selectedPages}
                              setSelectedPages={setSelectedPages}
                              key={i}
                            />
                          ))
                        ) : (
                          <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center h-[85vh]">
                            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
                          </div>
                        )}
                      </div>
                    </Document>
                  </>
                ) : (
                  <>
                    <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center h-[80vh]">
                      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </ScrollArea>
    </>
  );
};
