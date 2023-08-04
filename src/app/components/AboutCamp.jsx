"use client";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function AboutCamp() {
  const aboutList = [
    {
      icon: "./camp/terrotory.png",
      header: "БАЙРШИЛ",
      body: "УВС аймаг дахь Үүрэг нуурын эрэг дээрх тав тухтай амралт.",
    },
    {
      icon: "./camp/tents.png",
      header: "ГЭР",
      body: "16ш гэр болон майхан бие биенээсээ 20 метрийн зайд байрладаг",
    },
    {
      icon: "./camp/campfire.png",
      header: "ИЛ ГАЛ",
      body: "Нуурын эрэг дээр ил галын дэргэд дотнын хүмүүстэйгээ дурсамжит цагыг өнгөрөөх ",
    },
    {
      icon: "./camp/sail.png",
      header: "SUP BOARDING",
      body: "Усан дээр хөвж буй тавцан дээр зогсож, сэлүүр ашиглан усан дундуур хөдөлдөг спорт",
    },
    {
      icon: "./camp/lake.png",
      header: "НУУР",
      body: "Увс нуурын сав газрын баруун захад оршдог эндорейн сав газрын давсархаг нуур",
    },
    {
      icon: "./camp/bathhouse.png",
      header: "BATHHOUSE",
      body: "Орчин үеийн рашаан сувиллын газруудын адил саун.",
    },
  ];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="cover-photo bg-[#191619] w-full text-white">
      <div className="w-full flex flex-col items-center  justify-center">
        {/* <div className="w-full md:w-[calc(60%)] px-3 md:grid grid-cols-3">
          {aboutList.map((item, index) => {
            return (
              <div
                key={index}
                className=" text-gray-300 text-sm font-light text-center w-full p-5 flex flex-col justify-center items-center"
              >
                <div className="px-4 py-4 rounded-full border w-fit glass">
                  <img
                    src={`${item.icon}`}
                    alt="tent"
                    className="w-[50px] text-white"
                  />
                </div>
                <h6 className="mt-4 text-white">{item.header}</h6>
                <p className="text-sm text-gray-400">{item.body}</p>
              </div>
            );
          })}
        </div> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {aboutList.map((item) => (
            <Carousel.Item
              key={item.id}
              interval={5000}
              style={{ height: "330px", width: "100%" }}
            >
              <div
                key={index}
                className=" text-gray-300 text-sm font-light text-center w-full p-5 flex flex-col justify-center items-center"
              >
                <div className="px-4 py-4 rounded-full border w-fit glass">
                  <img
                    src={`${item.icon}`}
                    alt="tent"
                    className="w-[50px] text-white"
                  />
                </div>
                <h6 className="mt-4 text-white">{item.header}</h6>
                <p className="text-sm text-gray-400">{item.body}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AboutCamp;
