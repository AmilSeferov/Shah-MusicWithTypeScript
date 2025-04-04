import React from "react";
import PlayerList from "../components/PlayerList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import PlayListELement from "../components/PlayListELement";
import { MdSort } from "react-icons/md";
function PlayListPage() {
  const data = useSelector((state: RootState) => state.music.playList);
  const dataAdditional = useSelector(
    (state: RootState) => state.music.data.tracks.items
  );

  console.log(dataAdditional);
  return (
    <div className="flex flex-col lg:flex-row justify-around w-full min-h-[100%] lg:h-[calc(100vh-160px)] relative items-center">
      <div className="flex flex-col w-[40%] lg:h-[100%] justify-center  items-center">
        <img src={data.img ? data.img : ""} alt="" />
        <p className="mt-[10px] text-[18px] md:text-[24px] font-bold ">
          {data.name && data.name}
        </p>
        <div className="flex items-center justify-around w-[100%] lg:w-[60%]">
          <div className=" h-[30px] w-[30px] lg:w-[45px] lg:h-[45px] rounded-full bg-neutral-800 flex justify-center items-center">
            <FaPen />
          </div>
          <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] rounded-full bg-stone-50 flex justify-center items-center">
            <FaPlay className="text-black text-[16px] lg:text-[20px]  " />
          </div>
          <div className="h-[30px] w-[30px] lg:w-[45px] lg:h-[45px] rounded-full bg-neutral-800 flex justify-center items-center">
            <SlOptionsVertical />
          </div>
        </div>
      </div>
      <div className="w-[60%]  lg:h-[100%] ">
        <div className="flex my-[20px]">
          <MdSort className="text-[28px] mr-[10px]" />
          <p>Sirala</p>
        </div>
        <div className="w-full overflow-auto  lg:h-[100%]">
          {data.musics?.map((item, index) => (
            <PlayListELement key={index} data={item} />
          ))}
          <p className="w-[90%]  text-[28px] font-bold">Öneriler</p>
          {dataAdditional.map((item:any, index:number) => {
            console.log(item.data.artists.items[0].profile.name + " "+ item.data.artists.items[1]?.profile.name)
            return (
              <PlayListELement
                key={index}
                data={{
                  name: item.data.name,
                  img: item.data.albumOfTrack.coverArt.sources[0].url,
                  artists: item.data.artists.items[0].profile.name 
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayListPage;
