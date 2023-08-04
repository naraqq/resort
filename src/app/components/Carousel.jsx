"use client";
import React from "react";

function CarouselTent() {
  const tents = [
    {
      id: 1,
      title: "FOREST TENT",
      body: [
        "Accomodation 2/3/4 persons",
        "Barbecue and a grill",
        "Sleeping bags, towels",
        "individual hammock",
      ],
      imageUrl: "ger.jpg",
      price: " ₮70'000",
      sub: "for 1 night",
    },
    {
      id: 1,
      title: "LAKE TENT",
      body: [
        "Accomodation 2/3/4 persons",
        "Barbecue and a grill",
        "Sleeping bags, towels",
        "individual hammock",
      ],
      imageUrl: "tent.jpg",
      price: " ₮50'000",
      sub: "for 1 night",
    },
  ];
  return (
    <div
      id="tents"
      className="cover-photo bg-[#191619] w-full flex flex-col justify-center items-center text-white "
    >
      <h2 className="text-white uppercase text-2xl mt-20 text-center">Гэр</h2>
      <div className="w-full md:w-[calc(60%)] flex flex-col items-center justify-center">
        <div className="w-full block md:grid grid-cols-2 mt-10">
          {tents.map((item, index) => {
            return (
              <div
                key={index}
                className="!border-[1px] !border-gray-500 hover:border-gray-400 transition-all border-gray-600 p-4 m-4 flex flex-col justify-center"
              >
                <img
                  src={`${item.imageUrl}`}
                  alt="ger"
                  className="object-fit h-[200px] md:h-[300px]"
                />

                <h6 className="text-center mt-10 font-light">{item.title}</h6>
                <ul className="mt-2 p-0">
                  {item.body.map((text, i) => {
                    return (
                      <li
                        className="text-center text-gray-400 text-sm font-light mt-1"
                        key={i}
                      >
                        - {text}
                      </li>
                    );
                  })}
                </ul>
                <h6 className="text-center mt-10 font-extralight">
                  from <strong>{item.price}</strong>
                </h6>
                <p className="text-center text-gray-400 text-sm font-light mt-1">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CarouselTent;
