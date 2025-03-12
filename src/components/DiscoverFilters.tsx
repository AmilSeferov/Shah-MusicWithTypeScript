import React from "react";
import { SiMusicbrainz } from "react-icons/si";
import { TbPlaylist } from "react-icons/tb";
import { CiFaceSmile } from "react-icons/ci";
function DiscoverFilters() {
  return (
    <div className="h-[50px] flex flex-row justify-between w-[100%]  ">
      <div className="bg-stone-600 p-[15px]  w-[340px] text-[18px] rounded-[5px] flex  items-center font-bold">
        
        <SiMusicbrainz className="text-[20px] mr-[15px]" /> Yeni Cikanlar
      </div>
      <div className="bg-stone-600 p-[15px]  w-[340px] text-[18px] rounded-[5px] flex  items-center font-bold">
        
        <TbPlaylist className="text-[20px] mr-[15px]" /> Yeni Cikanlar
      </div>
      <div className="bg-stone-600 p-[15px]  w-[340px] text-[18px] rounded-[5px] flex  items-center font-bold">
        
        <CiFaceSmile className="text-[20px] mr-[15px] " /> Ruh halleri ve turleri
      </div>
    </div>
  );
}

export default DiscoverFilters;
