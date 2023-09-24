import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
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
    setLength(avatars.length <= 10 ? avatars.length : 10);
    console.log(length);
  }, [length]);

  return (
    <Fragment>
      <Slider className="max-w-5xl h-[85px] mx-auto " {...settings}>
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
}
