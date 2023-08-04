"use client";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function CarouselServices() {
  const tents = [
    {
      id: 0,
      title: "Supsurf rent",
      imageUrl: "services/supsurf.jpg",
      price: " ₮55'000",
      sub: "for 1 hour",
    },
    {
      id: 1,
      title: "Boat (up to 4 people)",
      imageUrl: "services/boat.jpg",
      price: " ₮125'000",
      sub: "for 1 hour",
    },
    {
      id: 2,
      title: "Bathhouse (up to 6 people)",
      imageUrl: "services/bathhouse.jpg",
      price: " ₮60'000",
      sub: "for 2 hour",
    },
    {
      id: 3,
      title: "Lake Cycling Tour.",
      imageUrl: "services/bicycle_tour.jpg",
      price: " ₮30'000",
      sub: "for 3 hour",
    },
  ];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div
      id="services"
      className="cover-photo bg-[#191619] w-full flex justify-center text-white pb-10 md:pb-20"
    >
      <div className="w-full md:w-[calc(60%)] flex flex-col items-center justify-center">
        <h2 className="text-white uppercase text-2xl mt-20">Үйлчилгээ</h2>
        {/* <div className="w-[calc(80%)] md:w-full block md:grid grid-cols-4 mt-10">
          {tents.map((item, index) => {
            return (
              <div key={index} className="border-gray-600 p-4">
                <img
                  src={`${item.imageUrl}`}
                  alt="ger"
                  className="w-full h-[200px]"
                />

                <h6 className="text-center mt-10 font-extralight">
                  {item.title}
                </h6>

                <p className="text-center text-gray-400 text-sm font-light mt-1">
                  {item.sub}
                </p>
                <h6 className="text-center mt-2 text-sm font-light">
                  <strong>{item.price}</strong>
                </h6>
              </div>
            );
          })}
        </div> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {tents.map((item) => (
            <Carousel.Item
              key={item.id}
              style={{ height: "420px", width: "100%" }}
            >
              <div key={index} className="border-gray-600 p-14">
                <img
                  src={`${item.imageUrl}`}
                  alt="ger"
                  className="w-[300px] h-[200px]"
                />

                <h6 className="text-center mt-10 font-extralight">
                  {item.title}
                </h6>

                <p className="text-center text-gray-400 text-sm font-light mt-1">
                  {item.sub}
                </p>
                <h6 className="text-center mt-2 text-sm font-light">
                  <strong>{item.price}</strong>
                </h6>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselServices;
