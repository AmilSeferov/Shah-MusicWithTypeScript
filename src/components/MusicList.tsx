import { useRef } from "react";
import MusicCard from "./MusicCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import ProfileCard from "./ProfileCard";
function MusicList({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col w-[95%]  ">
      <div className="flex flex-row items-center justify-between w-[100%] py-[10px]">
        <h2 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
          {data?.[0].toUpperCase()}
        </h2>
        <div className="flex flex-row text-stone-500 text-[20px] sm:text-[25px] md:text-[30px]">
          <CiCircleChevLeft onClick={scrollLeft} />
          <CiCircleChevRight onClick={scrollRight} />
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex flex-col h-[410px] sm:flex-row sm:flex-nowrap sm:h-fit justify-between flex-wrap md:flex-row overflow-x-auto  w-[100%] pb-[30px]"
      >
        {data?.[0] === "albums" &&
          data[1].items.map((item: any, index: number) => (
            <MusicCard key={index} data={item} />
          ))}

        {data?.[0] === "artists" &&
          data[1].items.map((item: any, index: number) => (
            <ProfileCard key={index} data={item} />
          ))}

      </div>
    </div>
  );
}

export default MusicList;
