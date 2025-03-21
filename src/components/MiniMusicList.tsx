import { useRef } from "react";
import MiniMusicCard from "./MiniMusicCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function MiniMusicList() {
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
    <>
      <div className="flex flex-col  w-[95%]">
        <div className="flex flex-row items-center justify-between w-[100%] py-[10px]">
          <h2 className="text-[22px] lg:text-[30px] font-bold">Hip Hop</h2>
          <div className="flex flex-row text-stone-500 text-[22px] lg:text-[30px]">
            <CiCircleChevLeft onClick={scrollLeft} />
            <CiCircleChevRight onClick={scrollRight} />
          </div>
        </div>
        <div ref={scrollContainerRef} className="flex flex-col w-[100%] h-[300px] flex-wrap overflow-auto pb-[10px]">
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
          <MiniMusicCard />
        </div>
      </div>
    </>
  );
}

export default MiniMusicList;
