import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const pages = [
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
  { image: "/placeholder.jpg" },
];

export const SrollArea = () => {
  return (
    <>
      <ScrollArea className="h-screen">
        <div className="p-4 pb-[170px]">
          <div className="flex flex-row flex-wrap gap-[2vw] justify-center items-center">
            {pages.map((page, index) => (
              <label htmlFor={`${index + 1}`} className="cursor-pointer">
                {" "}
                <div
                  key={index + 1}
                  className="felx flex-col justify-center items-center border border-dashed border-customBgPrimary      "
                >
                  <div className="bg-textWhite rounded-md shadow-md px-[2.5vw] pt-[2.5vw] pb-[1vw] m-[1.5vw]">
                    <Image
                      src={page.image}
                      width={500}
                      height={500}
                      alt={`book page no ${index + 1}`}
                      className="w-[137px] h-[180px]"
                      style={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                    />
                    <div className="mt-[1vw] text-[1vw] text-customBgSecondary">
                      <div className="flex items-center space-x-2 justify-center">
                        <Checkbox id={`${index + 1}`} />
                        <span className="ms-[1vw]"> Page {index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </ScrollArea>
    </>
  );
};
