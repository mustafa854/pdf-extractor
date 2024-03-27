"use client";
import { ArrowRight, ChevronRight, UploadIcon, User2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
 
  return (
    <div className="w-full h-screen bg-customBgPrimary flex items-center justify-center">
      {/* <button
        type="submit"
        className="bg-gradient-to-r md:top-[1vw]  top-[3vw] right-[3vw]  md:right-[1vw] from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium md:py-[1.25vw] md:px-[1.75vw] py-[1vw] px-[1.25vw] rounded-[.5vw] absolute"
      >
        <div className="flex flex-row gap-[.5vw] font-light text-[2.5vw] md:text-[1.15vw] justify-center items-center">
          SIGNUP
          <ChevronRight />
        </div>
      </button> */}

      <div className="flex flex-col justify-center items-center md:gap-[2.5vw] gap-[4vw]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white md:text-[4vw] text-[7.5vw] w-[92vw] md:w-[60vw] text-center font-semibold md:leading-[5vw] leading-[9vw]">
            Modify and Generate your PDFs Today!
          </h1>
          <p className="md:text-[1.25vw] md:mt-[.5vw] text-center text-textMutedWhiteBright w-[86vw] md:w-[100vw] text-[3vw] mt-[3vw]">
            Absolutely 100% FREE! Try and modify/extract your PDF today!
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-[1.5vw]">
            <Link href="/upload"
              className="bg-gradient-to-r font-light  from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite md:py-[1.25vw] md:px-[1.75vw] py-[1vw] px-[1.25vw] rounded-[.5vw]"
            >
              <div className="flex flex-row gap-[1vw] text-[2.5vw] md:text-[1.15vw] justify-center items-center">
                GENERATE NOW
                <UploadIcon />
              </div>
            </Link>
            {/* <button
              type="submit"
              className="bg-gradient-to-r font-light  from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite md:py-[1.25vw] md:px-[1.75vw] py-[1vw] px-[1.25vw] rounded-[.5vw]"
            >
              <div
                className="flex flex-row gap-[1vw]  
text-[2.5vw] md:text-[1.15vw] justify-center items-center"
              >
                SIGNIN NOW
                <div className="height-[1.5vw]">
                  <User2 />
                </div>
              </div>
            </button> */}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
