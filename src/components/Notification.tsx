import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NotificationProps = {
  setIsNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Notification: React.FC<NotificationProps> = ({
  setIsNotificationOpen,
}) => {
  return (
    <div className="ml-[71px] bg-secondary w-96 py-10 h-screen fixed overflow-y-scroll">
      <div className="flex flex-col">
        {/* header */}
        <div className="flex justify-between items-center px-4 ">
          <h1 className="text-white text-xl">Notification</h1>
          <div
            className="flex cursor-pointer"
            onClick={() => setIsNotificationOpen(false)}
          >
            <FontAwesomeIcon icon={faClose} color="white" size="2xl" />
          </div>
        </div>

        <div className="flex flex-col px-4 mt-4 gap-4">
          <h3 className="text-white font-bold">New</h3>
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-12 h-12"
              src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
              alt=""
            />

            <div className="flex flex-col gap-[2px]">
              <h4 className="text-white text-sm">
                <strong>John Michael</strong> who you might know, is on Misty
              </h4>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>

            <button className="rounded-lg px-4 py-1 bg-pink-700 text-white">
              {" "}
              Follow
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-12 h-12"
              src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-3.jpg"
              alt=""
            />

            <div className="flex flex-col gap-[2px]">
              <h4 className="text-white text-sm">
                <strong>Morgan Gray</strong> started following you. welcome her
                to your profile
              </h4>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
