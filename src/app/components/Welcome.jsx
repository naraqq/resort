function Welcome() {
  return (
    <div>
      <div className="cover-photo">
        <img
          className="h-screen object-cover md:w-full"
          src="cover2.jpg"
          alt="cover photo"
        />
        <div className="cover-overlay"></div>{" "}
      </div>
      <div className="absolute top-[calc(35%)] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* <h1 className="text-white text-lg md:text-2xl text-center">
          Тавтай морил
        </h1> */}
        <h1 className="text-white text-4xl md:text-8xl mt-10 uppercase text-center font-light">
          Үүрэг ресорт
        </h1>
      </div>
      <div className="z-10 absolute top-[calc(75%)] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="text-white no-underline text-[15px] select-none uppercase  hover:!ring-[1px] text-center !px-12 !py-4 border  ring-gray-200 font-light">
          Дэлгэрэнгүй
        </button>
      </div>
      <div className="z-10 absolute bottom-0 w-full blur h-40 bg-transparent shadow-cus-bottom"></div>
    </div>
  );
}

export default Welcome;
