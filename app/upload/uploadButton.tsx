import { Ellipsis, UploadIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ButtonSpinner } from "../components/buttonSpinner";

type UploadButtonprops = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const UploadButton = ({ loading, setLoading }: UploadButtonprops) => {
  return (
    <>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-gradientColorOne to-gradientColorTwo hover:from-gradientColorOne hover:to-gradientColorOne transition-all duration-3000 fade-in-80 text-textWhite font-medium  text-sm p-[.75vw] rounded-[.5vw]"
      >
        {loading ? (
          <div className="flex flex-row gap-[1vw] justify-center items-center">
            <ButtonSpinner size={4} color="black" />
            UPLOADING...
          </div>
        ) : (
          <div className="flex flex-row gap-[1vw] justify-center items-center">
            <UploadIcon />
            UPLOAD FILE
          </div>
        )}
      </button>
    </>
  );
};
