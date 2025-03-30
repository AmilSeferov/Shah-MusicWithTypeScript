import { FaPlay } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

function PlayListELement() {
  return (
    <div className="w-[90%] box-content flex flex-row items-center group relative hover:bg-gray-500 p-[5px] rounded-[5px] ">
      <div className="w-fit relative">
        <img
          className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]"
          src="https://lh3.googleusercontent.com/UUqDsBXvVRbZt0sjx7D7zqTuXSOZFP4PeZoO-QGerNUZFqdkDJ5P77p_g2j_GYiXiYsKb8iHrPTxDYH4=w544-h544-l90-rj"
          alt=""
        />
        <div className="bg-stone-950 absolute top-0 left-0 w-[48px] h-[24px] lg:w-[48px] lg:h-[48px] opacity-[0] group-hover:opacity-[0.7]"></div>
        <FaPlay className="absolute left-[16px] top-[16px] text-[16px] opacity-[0] group-hover:opacity-[1]" />
      </div>
      <div className="ml-[10px] w-[100%] flex flex-row justify-between items-center">
        <div className="w-[75%] flex flex-col whitespace-nowrap overflow-hidden text-ellipsis">
          <p className="whitespace-nowrap text-[10px] sm:text-[12px]  lg:text-[14px] overflow-hidden text-ellipsis w-[80%] lg:w-[290px] px-[2px]">
            Sean Paul - No Lie ft. Dua Lipa (Lorcan x Jamie Remix)
          </p>
          <p className="mr-[15px] text-[10px] sm:text-[12px] lg:text-[13px]  whitespace-nowrap overflow-hidden text-ellipsis  ">
            Ibrahim Tatlises
          </p>
        </div>
        <div className="flex w-[10%] flex-row whitespace-nowrap overflow-hidden text-ellipsis ">
          <p className="hidden lg:flex  text-[16px] group-hover:hidden">3:12</p>
          <SlOptionsVertical className="lg:hidden lg:top-[16px] text-[12px] group-hover:flex" />
        </div>
      </div>
    </div>
  );
}

export default PlayListELement;
