import { Input } from "@/components/ui/input";

export const LeftNav = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-customBgPrimary font-semibold text-center p-4 border-b border-customBgAccent">
        Remove Pages
      </h1>
      <div className="flex flex-col justify-between h-full">
        <div className="p-4 flex flex-col gap-4">
          <div className="p-4 bg-blue-100 text-customBgSecondary rounded-md">
            <p className="text-[1vw]">
              Click on pages to remove from document. You can use "shift" key to
              set ranges.
            </p>
          </div>
          <p className="text-[1vw]">
            Total Pages: <span className="text-[1.15vw] font-bold">200</span>
          </p>

          <div className="mt-6">
            <label htmlFor="pages" className="text-[1.15vw] font-semibold ">
              Pages to remove:
            </label>

            <div className="w-full">
              <Input
                disabled
                type="text"
                value={"1, 2, 3, 4"}
                placeholder="New File Name"
                className="mt-[.75vw] border border-customBgSecondary"
              />
            </div>
          </div>
        </div>

        <div className="grow flex items-end px-4">
          <button className=" w-full translate-y-[-200%] bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-md">
            REMOVE PAGES
          </button>
        </div>
      </div>
    </div>
  );
};
