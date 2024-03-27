'use client'
import React, { useEffect, useState } from 'react'
import { Document, Page } from "react-pdf";import { pdfjs } from "react-pdf";
type props = {params: {id: string}}


const AllPDFDetail =  ({params:{id}}:props) => {
    const [pdfUrl, setPdfUrl] = useState<null | string>(null)
    const [numPages, setNumPages] = useState<number | null>();
    
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    const getPdfURl = async () =>{
        const response1 = await fetch(
          `https://pdfcreator-backend.onrender.com/uploads/${id}`
          //   `${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${id}`
        );
                 
        setPdfUrl(
          response1.ok
            ? `https://pdfcreator-backend.onrender.com/uploads/${id}`
            : //   ? `${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${id}`
              `https://pdfcreator-backend.onrender.com/uploads/${id}.pdf`
          //   : `${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${id}.pdf`
        ); }

    useEffect(()=>{

getPdfURl()
        

    },[])
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();
return (
  <>
    {pdfUrl ? (
      <>
        <div>
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center h-[80vh]">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
              </div>
            }
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:grid-cols-3 gap-[2vw]">
              {numPages ? (
                Array.from({ length: numPages }, (_, i) => (
                  <>
                    <Page
                      key={i + 1}
                      pageNumber={i + 1}
                      // renderMode={"svg"}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                     
                      width={140}
                    />
                    
                  </>
                ))
              ) : (
                <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center h-[85vh]">
                  <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black" />
                </div>
              )}
            </div>
          </Document>
        </div>
      </>
    ) : (
      <>Loading...</>
    )}{" "}
  </>
);




}

export default AllPDFDetail