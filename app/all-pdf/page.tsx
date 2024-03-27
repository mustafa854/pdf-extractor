'use client'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import { X } from 'lucide-react';

type originalPDF = {
 originalPdfId: string;
            originalPdfName: string;
            newPDF: newPDF[];
            createdAt: string;
}

type newPDF = {
  id: string;
  pdfName:string;
  createdAt:string};

const AllPdf =  () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [data, setData] = useState<null | any>(null)
  const [errors, setErrors] =useState<null|string>(null)
  const fetchData = async () => {
    setErrors(null)
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}pdfs`);
      const jsonResponse = await response.json();
      setData(jsonResponse.reverse())
      setErrors(null)
    }catch(e){
      setErrors("Something went wrong! Please refresh or try again later.")
    }
    
  }
  useEffect(()=>{
    setErrors(null)
  fetchData()
  },[])
  return (
    <>
      {visible ? (
        <div className="z-50 w-[100vw] h-[100vh] absolute bg-customBgSecondary">
          <div className=" absolute top-[50vh] left-[50vw]  translate-x-[-50%] translate-y-[-50%] p-[5vw]  md:p-[3vw] w-[70vw] sm:h-[50vh] flex flex-col gap-[1vw] bg-customBgPrimary">
            <div className="flex items-center justify-end ">
              <X
                className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] bg-customBgSecondary p-[.5vw] text-white rounded-full cursor-pointer"
                onClick={() => setVisible(false)}
              />
            </div>
            <div>
              <p className="text-white">
                Please note that the pdfs uploaded are not uploaded on the Cloud
                services but are saved as files on the server. Current
                implementation is deployed on the{" "}
                <b>
                  <u>&quot;Render Cloud Hosting Service&quot;</u>
                </b>
                , and they allow storage of user generated files temprorily, so
                the files are deleted after some time. Therefore older files
                might not be available on &quot;check pdf&quot; button, to check
                the Implementation upload the files again and check them
                immediately! Thank You.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="w-full h-screen bg-customBgPrimary flex justify-center items-center sm:items-end">
        <div className="w-[90%] bg-customBgSecondary border-x h-[90%] border-b sm:border-b-0 rounded-b-[1.5vw] sm:rounded-b-none sm:mt-[0] sm:h-[80%] border-t border-white rounded-t-[1.5vw] p-[1.5vw]">
          <ScrollArea className="h-[100%] pr-[2vw]">
            <Accordion type="single" collapsible className="w-full">
              {errors ? (
                <>
                  <p className="text-red-500 text-center pt-[5vw]">
                    {errors}
                  </p>
                </>
              ) : (
                <>
                  {data !== null ? (
                    <>
                      {data.length === 0 ? (
                        <>
                          <p className="text-red-500 text-center pt-[5vw]">
                            No data Uploaded yet! Please upload a PDF to see the
                            data.
                          </p>
                        </>
                      ) : (
                        <>
                          {data.map((d: originalPDF) => (
                            <AccordionItem
                              key={d.originalPdfId}
                              value={`item-${d.originalPdfId}`}
                              className="bg-customBgPrimary border-b-0 mt-[1vw] px-[4vw] py-[1vw] md:px-[2vw] md:py-[1vw] rounded-[1.5vw] text-white text-[3.5vw] md:text-[1.5vw] xl:text-[1.25vw]"
                            >
                              <AccordionTrigger className="hover:no-underline">
                                <div className=" flex flex-row justify-between items-center w-full">
                                  <div className="flex flex-col text-clip text-left mr-[2vw]">
                                    {d.originalPdfName}
                                    <p className=" text-[3vw] text-textMutedWhiteBright md:text-[1.15vw] xl:text-[.85vw]">
                                      {d.createdAt}
                                    </p>
                                  </div>
                                  <div className="flex md:flex-row flex-col">
                                    <Link
                                      href={`${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${d.originalPdfId}`}
                                      className={`${buttonVariants({
                                        variant: "outline",
                                      })} text-black mr-[2vw] `}
                                    >
                                      Check PDF
                                    </Link>
                                    <a
                                      href={`/upload/${d.originalPdfId}`}
                                      className={`${buttonVariants({
                                        variant: "outline",
                                      })} text-black mr-[2vw] mt-[1vw] md:mt-[0vw] `}
                                    >
                                      Edit PDF
                                    </a>
                                  </div>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-[3vw] md:text-[1.15vw] xl:text-[.85vw]">
                                <ul>
                                  {d.newPDF.length === 0 ? (
                                    <p className="text-red-500">
                                      No PDFs Generated!
                                    </p>
                                  ) : (
                                    <>
                                      {d.newPDF.reverse().map((pdf) => (
                                        <li
                                          key={pdf.id}
                                          className="flex flex-row justify-between items-center text-[3vw] md:text-[1.25vw] xl:text-[.95vw]"
                                        >
                                          <div className="flex flex-col gap-[.5vw]">
                                            {" "}
                                            {pdf.pdfName}
                                            <p className=" text-[3vw] text-textMutedWhiteBright md:text-[1.15vw] xl:text-[.85vw]">
                                              {pdf.createdAt}
                                            </p>
                                          </div>{" "}
                                          <a
                                            className={`${buttonVariants({
                                              variant: "outline",
                                            })} text-black mr-[3vw]`}
                                            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}uploads/${pdf.id}.pdf`}
                                          >
                                            Check PDF
                                          </a>
                                        </li>
                                      ))}
                                    </>
                                  )}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-white">Loading...</p>
                    </>
                  )}
                </>
              )}
            </Accordion>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}

export default AllPdf