import { useRef } from "react";
import MiniMusicCard from "./MiniMusicCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function MiniMusicList({ data }: { data: any }) {
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
          <h2 className="text-[22px] lg:text-[30px] font-bold">
            {data[0].toUpperCase()}
          </h2>
          <div className="flex flex-row text-stone-500 text-[22px] lg:text-[30px]">
            <CiCircleChevLeft onClick={scrollLeft} />
            <CiCircleChevRight onClick={scrollRight} />
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex flex-col w-[100%] h-[300px] flex-wrap overflow-auto pb-[10px]"
        >
          {data[1].items.map((item: any, index: number) => (
            <MiniMusicCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MiniMusicList;
