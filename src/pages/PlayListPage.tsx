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
  return (
    <div className="flex justify-around w-full h-[calc(100vh-160px)] relative items-center">
      <div className="flex flex-col w-[40%] h-[100%] justify-center  items-center">
        <img src={data.img} alt="" />
        <p className="mt-[10px] text-[24px] font-bold ">{data.name}</p>
        <div className="flex items-center justify-around w-[60%]">
          <div className="w-[45px] h-[45px] rounded-full bg-neutral-800 flex justify-center items-center">
            <FaPen />
          </div>
          <div className="w-[55px] h-[55px] rounded-full bg-stone-50 flex justify-center items-center">
            <FaPlay className="text-black text-[20px]  " />
          </div>
          <div className="w-[45px] h-[45px] rounded-full bg-neutral-800 flex justify-center items-center">
            <SlOptionsVertical />
          </div>
        </div>
      </div>
      <div className="w-[60%] h-[100%] ">
        <div className="flex my-[20px]">
          <MdSort className="text-[28px] mr-[10px]" />
          <p>Sirala</p>
        </div>
        <div className="w-full overflow-auto  h-[100%]">
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
          <PlayListELement />
   
        </div>
      </div>
    </div>
  );
}

export default PlayListPage;
