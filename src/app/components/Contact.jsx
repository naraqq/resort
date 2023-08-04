"use client";
import React from "react";

function Contact() {
  return (
    <div
      id="contacts"
      className="cover-photo bg-[#08080D] px-10 w-full flex flex-col justify-center items-center text-white "
    >
      <h2 className="text-white uppercase text-2xl mt-20 mb-10 text-center">
        Холбоо барих
      </h2>
      <p className="text-gray-300 text-sm text-center mt-1">
        Утаc: +976 9945 9070
      </p>
      <p className="text-gray-300 text-sm text-center mt-1">
        E-mail: uuregresortmongolia@gmail.com
      </p>
      <p className="text-gray-500 text-sm text-center mt-5">
        A tour camp located by the shore of Uureg lake, Mongolia Увс аймгийн
        Үүрэг нуурын дэргэдэх бааз
      </p>
      <div className="w-full md:w-[calc(60%)] flex flex-col items-center justify-center">
        <div className="w-[calc(90%)] md:w-full block md:grid grid-cols-2 mt-10"></div>
      </div>
      <div className="mb-20 flex gap-2">
        <a target="#" href="https://www.facebook.com/UureglakeResort">
          <img
            src={`./social/facebook.png`}
            alt="ger"
            className="w-10 cursor-pointer"
          />
        </a>

        <img
          src={`./social/insta.png`}
          alt="ger"
          className="w-10 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Contact;
