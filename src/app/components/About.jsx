function About() {
  return (
    <div id="about" className="cover-photo bg-[#191619] w-full p-3">
      <div className="w-full h-[calc(30%)] flex-col items-center flex justify-end">
        <h2 className="text-white uppercase text-2xl mt-20">Бидний тухай</h2>
        <div className="flex justify-center">
          <p className="text-gray-300 w-full md:w-1/2 text-sm font-light text-center mt-10 px-2">
            УВС аймаг дахь Үүрэг нуурын эрэг дээрх тав тухтай зуслан. Найрсаг
            уулзалт, хувийн арга хэмжээ, амралт зугаалгын хувьд байгальд аль
            болох ойр зай. Тав тухтай гэрт суурьшсанаар та аялал зугаалгаар
            явахад таагүй байдалгүйгээр байгальтайгаа бүрэн эв нэгдэлтэй
            амралтаа өнгөрөөх болно.
          </p>
        </div>
      </div>
      <div className="mt-20 flex !h-[calc(50%)] justify-center">
        <iframe
          className="w-[calc(90%)] md:w-[calc(60%)] min-h-[400px] md:!min-h-[500px]"
          src="https://www.youtube.com/embed/CxrXQ_X2CMo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
