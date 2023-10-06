import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modalItems } from "../const";

type PricingProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Pricing: React.FC<PricingProps> = ({ setIsOpen }) => {
  return (
    <div className="lg:py-4 bg-secondary flex flex-col z-20 px-10 lg:w-[1000px] rounded-md absolute">
      <div className="relative">
        <FontAwesomeIcon
          onClick={() => setIsOpen(false)}
          icon={faClose}
          color="white"
          size="2xl"
          className="cursor-pointer right-0 absolute"
        />
        <div className="lg:py-0 py-8 flex  flex-col  gap-1 justify-center text-center ">
          <h1 className="text-3xl font-bold text-amber-600">
            With Instello Premium
          </h1>
          <span className="text-sm text-gray-500">
            Exclusive features and benefits on Instello are accessible to you.
          </span>
        </div>

        <div className="mt-10 flex gap-4 justify-center">
          <div className=" rounded-lg px-2 py-4 lg:w-[200px] w-28  bg-slate-700">
            <div className="flex justify-between">
              <h4 className="text-white">Monthly</h4>

              <div className="rounded-full bg-blue-700 px-1 mb-4">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>

            <span className="text-white text-2xl ">12.99$</span>
          </div>
          <div className="rounded-lg px-2 py-4 lg:w-[200px] w-28 bg-slate-700">
            <div className="flex justify-between">
              <h4 className="text-white">Monthly</h4>

              <div className="rounded-full bg-blue-700 px-1 mb-4">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>

            <span className="text-white text-2xl ">12.99$</span>
          </div>
          <div className="rounded-lg px-2 py-4 lg:w-[200px] w-28 bg-slate-700">
            <div className="flex justify-between">
              <h4 className="text-white">Monthly</h4>

              <div className="rounded-full bg-blue-700 px-1 mb-4">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>

            <span className="text-white text-2xl ">12.99$</span>
          </div>
        </div>

        <div className="mt-10 ">
          <h3 className="text-white font-bold mb-5">
            Why Choose Premium Membership
          </h3>
          <div className="grid lg:grid-cols-2 gap-10">
            {modalItems.map((item, index) => {
              const bgColorClass = `bg-${item.color}-300`;
              console.log(bgColorClass);
              return (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`rounded-full ${bgColorClass} px-3 py-3 items-center flex justify-center`}
                  >
                    <FontAwesomeIcon icon={item.icon} size="lg" color="black" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h4 className="text-white font-bold">{item.head}</h4>
                    <span className="text-gray-300">{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 mb-5 flex justify-center  text-center">
          <p className="text-sm text-gray-400 max-w-xl">
            Instello Premium is the ultimate way to enhance your Instello
            experience and connect with your passions. Try it free for 30 days
            and cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};
