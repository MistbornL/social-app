import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Pricing() {
  return (
    <div className="bg-secondary  z-10 px-10 rounded-md absolute">
      <div className="flex flex-col gap-1 justify-center text-center">
        <h1 className="text-3xl font-bold text-amber-600">
          With Instello Premium
        </h1>
        <span className="text-sm text-gray-500">
          Exclusive features and benefits on Instello are accessible to you.
        </span>
      </div>

      <div className="mt-10 flex gap-4">
        <div className=" rounded-lg px-2 py-4 w-[200px]  bg-slate-700">
          <div className="flex justify-between">
            <h4 className="text-white">Monthly</h4>

            <div className="rounded-full bg-blue-700 px-1 mb-4">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <span className="text-white text-2xl ">12.99$</span>
        </div>
        <div className="rounded-lg px-2 py-4 w-[200px]  bg-slate-700">
          <div className="flex justify-between">
            <h4 className="text-white">Monthly</h4>

            <div className="rounded-full bg-blue-700 px-1 mb-4">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <span className="text-white text-2xl ">12.99$</span>
        </div>
        <div className="rounded-lg px-2 py-4 w-[200px]  bg-slate-700">
          <div className="flex justify-between">
            <h4 className="text-white">Monthly</h4>

            <div className="rounded-full bg-blue-700 px-1 mb-4">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <span className="text-white text-2xl ">12.99$</span>
        </div>
      </div>
    </div>
  );
}
