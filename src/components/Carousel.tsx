import React, { Fragment } from "react";
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
  var settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    draggable: false,
  };

  return (
    <Fragment>
      <Slider className="max-w-4xl h-[100px] mx-auto " {...settings}>
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-30 h-30 hover:scale-110 cursor-pointer  rounded-full overflow-hidden border-solid border-[7px] border-slate-800 transition-transform transform scale-100 "
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
