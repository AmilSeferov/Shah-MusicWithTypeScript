import { FaPlay } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

function MiniMusicCard() {
  return (
    <div className="w-[340px] flex flex-row group relative m-[10px] ">
      <img
        className="w-[48px]"
        src="https://lh3.googleusercontent.com/UUqDsBXvVRbZt0sjx7D7zqTuXSOZFP4PeZoO-QGerNUZFqdkDJ5P77p_g2j_GYiXiYsKb8iHrPTxDYH4=w544-h544-l90-rj"
        alt=""
      />
<div className="bg-stone-950 absolute left-0 w-[48px] h-[48px] opacity-[0] group-hover:opacity-[0.7]"></div>
<FaPlay className="absolute left-[15px] top-[15px] text-[20px] opacity-[0] group-hover:opacity-[1]"/>
      <div className="ml-[10px]">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[270px] px-[2px] group-hover:w-[200px]">
          Sean Paul - No Lie ft. Dua Lipa (Lorcan x Jamie Remix)
        </p>
        <div className="flex flex-row whitespace-nowrap overflow-hidden text-ellipsis ">
          <p className="mr-[15px] w-[90px] whitespace-nowrap overflow-hidden text-ellipsis  group-hover:w-[70px] ">Ibrahim Tatlises</p> <p className="w-[110px] whitespace-nowrap overflow-hidden text-ellipsis group-hover:w-[90px]">16mln izlenme</p>
          <SlOptionsVertical className='opacity-[0] absolute right-[10px] top-[16px] text-[18px] group-hover:opacity-[1]'/>
        </div>
      </div>
    </div>
  );
}

export default MiniMusicCard;
