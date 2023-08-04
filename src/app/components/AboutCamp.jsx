function AboutCamp() {
  const aboutList = [
    {
      icon: "./camp/terrotory.png",
      header: "TERRITORY",
      body: "Comfortable camping on the shore of a forest lake in UWS",
    },
    {
      icon: "./camp/tents.png",
      header: "TENTS",
      body: "There are 16 tents in the camp they are located 50 meters from each other",
    },
    {
      icon: "./camp/campfire.png",
      header: "CAMPFIRE",
      body: "Comfortable camping on the shore of a forest lake in UWS",
    },
    {
      icon: "./camp/sail.png",
      header: "SUP BOARDING",
      body: "There are 16 tents in the camp they are located 50 meters from each other",
    },
    {
      icon: "./camp/lake.png",
      header: "LAKE",
      body: "Comfortable camping on the shore of a forest lake in UWS",
    },
    {
      icon: "./camp/bathhouse.png",
      header: "BATHHOUSE",
      body: "There are 16 tents in the camp they are located 50 meters from each other",
    },
  ];
  return (
    <div className="cover-photo bg-[#191619] w-full text-white">
      <div className="w-full flex flex-col items-center  justify-center">
        <div className="w-full md:w-[calc(60%)] px-3 md:grid grid-cols-3">
          {aboutList.map((item, index) => {
            return (
              <div
                key={index}
                className=" text-gray-300 text-sm font-light text-center mt-10 w-full p-5 flex flex-col justify-center items-center"
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
        </div>
      </div>
    </div>
  );
}

export default AboutCamp;
