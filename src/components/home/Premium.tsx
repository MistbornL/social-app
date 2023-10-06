import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Premium = () => {
  return (
    <div className="mt-4 p-4 bg-secondary rounded-xl">
      <div className="flex justify-between">
        <h2 className="text-white font-bold text-lg">Premium Photos</h2>
        <FontAwesomeIcon icon={faRefresh} color="white" />
      </div>

      <div className="mt-2 flex justify-between">
        <div className="relative">
          <div className="absolute bg-slate-800 opacity-50 top-1 right-1 px-2 py-1 rounded-lg ">
            <span className="text-white">18$</span>
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="w-40 h-40 rounded-md"
              src="https://demo.foxthemes.net/instello/assets/images/product/product-1.jpg"
              alt="perfume"
            />
            <p className="text-white text-center font-semibold leading-tight truncate max-w-[9rem]">
              Deep Cleanse
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bg-slate-800 opacity-50 top-1 right-1 px-2 py-1 rounded-lg ">
            <span className="text-white">18$</span>
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="w-40 h-40 rounded-md"
              src="https://demo.foxthemes.net/instello/assets/images/product/product-1.jpg"
              alt="perfume"
            />
            <p className="text-white text-center font-semibold leading-tight truncate max-w-[9rem]">
              Deep Cleanse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
