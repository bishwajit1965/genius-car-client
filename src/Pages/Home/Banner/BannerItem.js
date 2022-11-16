import React from "react";

import "./BannerItem.css";
const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3 w-2/4">
        <h1 className="text-5xl font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-2/4">
        <p className="    text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo
          ullam quis officiis et, quasi maiores illo mollitia asperiores commodi
          blanditiis assumenda eos impedit rem ea labore accusamus delectus
          velit!
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-2/3">
        <button className="btn btn-secondary mr-5">Button</button>
        <button className="btn btn-outline btn-primary">Button</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
