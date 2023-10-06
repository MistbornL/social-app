import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReelsTab = () => {
  const imiges = [
    "https://demo.foxthemes.net/instello/assets/images/post/post-1.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-5.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-3.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-2.jpg",
  ];
  return (
    <div>
      {/* header */}
      <div className="flex justify-between">
        <h2 className="text-lg text-white  font-bold">Posts</h2>

        <div className="flex gap-3">
          <h2 className="text-lg text-white  font-bold ">Show acheived</h2>
          <FontAwesomeIcon icon={faArrowRight} color="white" />
        </div>
      </div>
      {/* posts */}
      <div
        className="max-w-5xl grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"
        uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
      >
        {imiges.map((url, index) => {
          return <Reels key={index} imageSrc={url} />;
        })}

        {/* Placeholder posts */}
        {/* <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div>
        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div>
        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div>
        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div> */}
      </div>
    </div>
  );
};

type ReelsProps = {
  imageSrc: string;
};

const Reels: React.FC<ReelsProps> = ({ imageSrc }) => {
  return (
    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
            <img src={imageSrc} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-2 left-4">
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faPlay} color="white" size="lg" />
              <span className="text-white">14</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
