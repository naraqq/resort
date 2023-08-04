import Link from "next/link";

function Navigation() {
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full pt-5 px-10 select-none shadow-cus">
      <div className="flex w-full h-full justify-around ">
        <div className="w-3/12 h-20 text-4xl text-white uppercase flex justify-center font-light ">
          <img
            src="logo.png"
            alt="logo"
            className="absolute top-3 left-3 md:left-20 w-20 md:w-[120px] rounded-full"
          />
        </div>
        <div className="w-5/12 h-10 hidden uppercase  md:flex justify-between text-3xl text-white mt-2">
          <div className="w-30 hover:!text-gray-300 transition-all font-normal select-none uppercase flex justify-between text-[15px] text-white">
            <Link href="#about" scroll={true}>
              тухай
            </Link>
          </div>

          <div className="w-30 hover:!text-gray-300 transition-all font-normal select-none uppercase flex justify-between text-[15px] text-white">
            <Link href="#tents" scroll={true}>
              гэр
            </Link>
          </div>
          <div className="w-30 hover:!text-gray-300 transition-all font-normal select-none uppercase flex justify-between text-[15px] text-white">
            <Link href="#food" scroll={true}>
              хоол
            </Link>
          </div>
          <div className="w-30 hover:!text-gray-300 transition-all font-normal select-none uppercase flex justify-between text-[15px] text-white">
            <Link href="#services" scroll={true}>
              үйлчилгээ
            </Link>
          </div>
          <div className="w-30 hover:!text-gray-300 transition-all font-normal select-none uppercase flex justify-between text-[15px] text-white">
            <Link href="#booking" scroll={true}>
              захиалга
            </Link>
          </div>
          <div className="w-30 hover:!text-gray-300 transition-all font-normal select-none uppercase flex justify-between text-[15px] text-white">
            <Link href="#contacts" scroll={true}>
              холбогдох
            </Link>
          </div>
        </div>

        <div className="w-3/12 text-lg text-white flex justify-end items-start mt-5 ">
          <button className="absolute top-5 right-5 md:right-20 ">EN</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
