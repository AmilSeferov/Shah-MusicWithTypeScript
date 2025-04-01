import React, { useRef } from "react";
import MoodCard from "./MoodCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function MoodList() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 860, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -860, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center  w-[95%]">
      <div className="flex flex-row items-center justify-between w-[100%] py-[10px]">
        <h2 className=" text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold">
          Ruh halleri ve Turleri
        </h2>
        <div className="flex flex-row text-stone-500 text-[22px]  sm:text-[24px] md:text-[27px] lg:text-[30px]">
          <CiCircleChevLeft onClick={scrollLeft} />
          <CiCircleChevRight onClick={scrollRight} />
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="  flex flex-col h-[190px] sm:h-[210px]  lg:h-[270px] flex-wrap overflow-auto w-[100%]  "
      >
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
        <MoodCard />
      </div>
    </div>
  );
}

export default MoodList;
