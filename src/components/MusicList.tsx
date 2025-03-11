import { useRef } from "react";
import MusicCard from "./MusicCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function MusicList() {
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
    <div className="flex flex-col w-[100%]">
      <div className="flex flex-row items-center justify-between w-[100%] py-[10px]">
        <h2 className="text-[30px] font-bold">Hip Hop</h2>
        <div className="flex flex-row text-stone-500 text-[30px]">
          <CiCircleChevLeft onClick={scrollLeft} />
          <CiCircleChevRight onClick={scrollRight} />
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex flex-row overflow-x-auto  w-[100%] pb-[30px]"
      >
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
}

export default MusicList;
