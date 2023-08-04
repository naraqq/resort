"use client";
import React from "react";
function CarouselFood() {
  const tents = [
    {
      id: 0,
      title: "BREAKFAST",
      body: [
        "Accomodation 2/3/4 persons",
        "Barbecue and a grill",
        "Sleeping bags, towels",
        "individual hammock",
      ],
      imageUrl: "food/breakfast.jpg",
      price: " ₮12'000",
      sub: "for 1 night",
    },
    {
      id: 1,
      title: "LUNCH",
      body: [
        "Accomodation 2/3/4 persons",
        "Barbecue and a grill",
        "Sleeping bags, towels",
        "individual hammock",
      ],
      imageUrl: "food/lunch.jpg",
      price: " ₮15'000",
      sub: "for 1 night",
    },
    {
      id: 2,
      title: "DINNER",
      body: [
        "Accomodation 2/3/4 persons",
        "Barbecue and a grill",
        "Sleeping bags, towels",
        "individual hammock",
      ],
      imageUrl: "food/dinner.jpg",
      price: " ₮18'000",
      sub: "for 1 night",
    },
  ];
  return (
    <div
      id="food"
      className="cover-photo bg-[#191619] w-full flex justify-center text-white "
    >
      <div className="w-full md:w-[calc(60%)] flex flex-col items-center justify-center">
        <h2 className="text-white uppercase text-2xl mt-20">Хоол</h2>
        <div className="w-[calc(95%)] md:w-full block md:grid grid-cols-3 mt-10">
          {tents.map((item, index) => {
            return (
              <div
                key={index}
                className="!border-[1px] border-gray-600 flex flex-col items-center p-4 m-4"
              >
                <img
                  src={`${item.imageUrl}`}
                  alt="ger"
                  className="w-[calc(80%)] h-[200px] object-fit"
                />

                <h6 className="text-center mt-10">{item.title}</h6>
                <h6 className="text-center mt-3 text-sm font-light">
                  Үнэ <strong>{item.price}</strong>
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

export default CarouselFood;
