import { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

export const SimpleSlider = () => {
  const avatars = [
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
  ];
  const [length, setLength] = useState<number>(0);
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: length,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    draggable: false,
  };

  useEffect(() => {
    const updateLength = () => {
      // Determine the number of avatars to display based on screen size
      if (window.innerWidth < 768) {
        setLength(5); // Display 5 avatars on mobile screens
      } else {
        // Display up to 10 avatars on larger screens or the available avatars count, whichever is smaller
        setLength(Math.min(avatars.length, 10));
      }
    };

    // Initial update
    updateLength();

    // Update on window resize
    window.addEventListener("resize", updateLength);

    return () => {
      // Cleanup the resize event listener
      window.removeEventListener("resize", updateLength);
    };
  }, [avatars]);
  return (
    <Fragment>
      <Slider {...settings}>
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="hover:scale-110 cursor-pointer  rounded-full overflow-hidden border-solid border-[7px] border-slate-800 transition-transform transform scale-100 "
          >
            <img
              className="object-cover w-full h-full"
              src={avatar}
              alt={`Avatar ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};
