import React from "react";
import PlayerList from "../components/PlayerList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
function PlayListPage() {
  const data = useSelector((state: RootState) => state.music.playList);
  return (
    <div className="flex justify-around w-full  items-center">
      <div className="flex flex-col  items-center">
        <img src={data.img} alt="" />
        <p className="mt-[10px] text-[24px] font-bold ">{data.name}</p>
        <div className="flex"><div className="w-[55px] h-[55px] rounded-full bg-stone-50 flex justify-center items-center"><FaPlay className="text-black text-[20px]  " /></div></div>
      </div>
      <div>
        <PlayerList />
      </div>
    </div>
  );
}

export default PlayListPage;
