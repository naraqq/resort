function Booking() {
  return (
    <div id="booking" className="relative">
      <div className="cover-photo">
        <img
          className="h-screen object-cover md:w-full"
          src="booking.jpg"
          alt="cover photo"
        />
        <div className="cover-overlay"></div>{" "}
      </div>
      <div className="absolute top-[calc(25%)] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-xl md:text-2xl uppercase text-center">
          Захиалга
        </h1>
        <p className="text-center text-gray-400 text-sm font-light mt-5">
          Prices are for double occupance for 1 night. Additional <br /> place -
          ₮10'000 per person per day
        </p>
      </div>
      <div className="absolute top-[calc(40%)] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[calc(85%)] md:w-[calc(60%)] border-cus px-2 py-4 text-white flex justify-between">
            <span>FOREST CAMP</span>
            <div className="w-1/2 flex justify-around">
              <span className="">₮70'000</span>
              <span>₮80'000</span>
            </div>
          </div>
          <div className="w-[calc(85%)] md:w-[calc(60%)] border-cus border-b-cus  px-2 py-4 text-white flex justify-between">
            <span>LAKE TENT</span>
            <div className="w-1/2 flex justify-around">
              <span className="">₮50'000</span>
              <span>₮60'000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 !cursor-pointer absolute top-[calc(85%)] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="text-white  text-[15px] select-none uppercase hover:!ring-[1px] text-center px-10 py-5 border  ring-gray-200 font-light">
          Захиалга өгөх
        </button>
      </div>
      <div className="z-10 absolute bottom-0 w-full blur h-40 bg-transparent shadow-cus-bottom"></div>
    </div>
  );
}

export default Booking;
