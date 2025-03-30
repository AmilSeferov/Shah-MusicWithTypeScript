import React from "react";
import PlayerList from "../components/PlayerList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import PlayListELement from "../components/PlayListELement";
function PlayListPage() {
  const data = useSelector((state: RootState) => state.music.playList);
  return (
    <div className="flex justify-around w-full  items-center">
      <div className="flex flex-col w-[40%]  items-center">
        <img src={data.img} alt="" />
        <p className="mt-[10px] text-[24px] font-bold ">{data.name}</p>
        <div className="flex items-center justify-around w-[60%]">
          <div className="w-[45px] h-[45px] rounded-full bg-neutral-800 flex justify-center items-center">< FaPen/></div>
          <div className="w-[55px] h-[55px] rounded-full bg-stone-50 flex justify-center items-center">
            <FaPlay className="text-black text-[20px]  " />
          </div>
          <div className="w-[45px] h-[45px] rounded-full bg-neutral-800 flex justify-center items-center"><SlOptionsVertical /></div>
        </div>
      </div>
      <div className="w-[60%]">
        <PlayListELement/>
      </div>
    </div>
  );
}

export default PlayListPage;
