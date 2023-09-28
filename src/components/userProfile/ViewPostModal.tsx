import {
  faBookBookmark,
  faClockRotateLeft,
  faClose,
  faCommentDots,
  faEllipsisH,
  faHeart,
  faShare,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CreateStatusModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PostPreview: React.FC<CreateStatusModalProps> = ({ setOpen }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-10 ">
      <div className=" uk-modal uk-open bg-secondary shadow-xl md:max-w-[1743px] w-full dark:bg-dark2 ">
        <div className="flex md:flex-row flex-col bg-secondary ">
          {/* post img */}
          <div className=" max-h-[700px] relative">
            <div
              onClick={() => setOpen(false)}
              className="absolute rounded-full bg-slate-600 top-2 right-2 px-4 py-3"
            >
              <FontAwesomeIcon icon={faClose} color="white" size="xl" />
            </div>
            <img
              className="object-cover w-[1336px] h-full "
              src="https://demo.foxthemes.net/instello/assets/images/post/post-1.jpg"
              alt="user"
            />
          </div>
          <div className=" ">
            {/* post header */}
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    className="rounded-full w-10 h-10"
                    src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-5.jpg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h4 className="text-white font-bold">Steeve</h4>
                    <h5 className="text-gray-500">2 hours ago</h5>
                  </div>
                </div>

                <FontAwesomeIcon icon={faEllipsisH} color="white" />
              </div>
            </div>

            {/* description */}
            <div className=" px-6">
              <p className="text-white max-w-sm">
                Photography is the art of capturing light with a camera. it can
                be fun, challenging. It can also be a hobby, a passion. 📷
              </p>
            </div>

            {/*likes  */}
            <div className=" px-6 mt-4 py-2 shadow">
              <div className="flex  items-center justify-between">
                {/* icons */}
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="rounded-full py-1 px-2 bg-slate-700">
                      <FontAwesomeIcon icon={faHeart} color="red" />
                    </div>

                    <span className="text-white">1,300</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full py-1 px-2 bg-slate-700">
                      <FontAwesomeIcon icon={faCommentDots} color="white" />
                    </div>

                    <span className="text-white">260</span>
                  </div>
                </div>

                <div className="flex gap-7">
                  <FontAwesomeIcon icon={faShare} color="white" />
                  <FontAwesomeIcon icon={faBookBookmark} color="white" />
                </div>
              </div>
            </div>

            {/* comments */}
            <div className="px-6  h-auto overflow-y-auto flex flex-col">
              <div className="flex gap-3 items-center mb-5">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h4 className="text-white font-bold">Steeve</h4>
                  <span className="text-white text-sm font-bold">
                    What a beautiful, I love it. 😍
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center mb-5">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h4 className="text-white font-bold">Steeve</h4>
                  <span className="text-white text-sm font-bold">
                    What a beautiful, I love it. 😍
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-5">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h4 className="text-white font-bold">Steeve</h4>
                  <span className="text-white text-sm font-bold">
                    What a beautiful, I love it. 😍
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-5">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h4 className="text-white font-bold">Steeve</h4>
                  <span className="text-white text-sm font-bold">
                    What a beautiful, I love it. 😍
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-5">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h4 className="text-white font-bold">Steeve</h4>
                  <span className="text-white text-sm font-bold">
                    What a beautiful, I love it. 😍
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-5">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h4 className="text-white font-bold">Steeve</h4>
                  <span className="text-white text-sm font-bold">
                    What a beautiful, I love it. 😍
                  </span>
                </div>
              </div>
            </div>

            {/* leave comment */}
            <div className="bg-white p-3 md:mt-5 flex items-center gap-4 ">
              <img
                className="rounded-full w-6 h-6"
                src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg"
                alt=""
              />

              <textarea
                className=" px-2 h-10 rounded-lg bg-slate-700 w-full text-white"
                placeholder="Add Comment..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
