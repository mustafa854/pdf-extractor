import React from "react";
import { SrollArea } from "./scrollArea";
import { LeftNav } from "./leftNav";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Input } from "@/components/ui/input";
const GeneratePDF = () => {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen w-full bg-[#f5f5fa]"
      >
        <ResizablePanel maxSize={25} defaultSize={20} minSize={15}>
          <LeftNav />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div>
            <div className="w-full px-[1.5vw] py-[1.5vw] shadow-sm">
              <h1 className="text-xl  font-bold ">New File Name</h1>
              <div className="flex flex-row gap-[1.5vw]">
                <div className="w-full">
                  <Input
                    type="text"
                    placeholder="New File Name"
                    className="mt-[.5vw]"
                  />
                </div>
                <div className="w-[15vw]">
                  <button className="mt-[.5vw] w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md">
                    SAVE
                  </button>
                </div>
                <div className="w-[15vw]">
                  <button className="mt-[.5vw] w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
            <SrollArea />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default GeneratePDF;
