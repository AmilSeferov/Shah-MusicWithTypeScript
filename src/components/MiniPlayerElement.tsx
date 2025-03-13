import { FaPlay } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';

function MiniPlayerElement() {
  return (
    <div className="w-[400px] flex flex-row items-center group relative m-[10px] ">
      <img 
        className="w-[32px] h-[32px]"
        src="https://lh3.googleusercontent.com/UUqDsBXvVRbZt0sjx7D7zqTuXSOZFP4PeZoO-QGerNUZFqdkDJ5P77p_g2j_GYiXiYsKb8iHrPTxDYH4=w544-h544-l90-rj"
        alt=""
      />
<div className="bg-stone-950 absolute left-0 w-[32px] h-[32px] opacity-[0] group-hover:opacity-[0.7]"></div>
<FaPlay className="absolute left-[8px] top-[8px] text-[16px] opacity-[0] group-hover:opacity-[1]"/>
      <div className="ml-[10px]">
        <p className="whitespace-nowrap text-[14px] overflow-hidden text-ellipsis w-[290px] px-[2px]">
          Sean Paul - No Lie ft. Dua Lipa (Lorcan x Jamie Remix)
        </p>
        <div className="flex flex-row whitespace-nowrap overflow-hidden text-ellipsis ">
          <p className="mr-[15px] text-[13px] w-[110px] whitespace-nowrap overflow-hidden text-ellipsis  ">Ibrahim Tatlises</p> 
          <p className='opacity-[1] absolute right-[0px] top-[8px] text-[16px] group-hover:opacity-[0]'>3:12</p>
          <SlOptionsVertical className='opacity-[0] absolute right-[5px] top-[16px] text-[12px] group-hover:opacity-[1]'/>
        </div>
      </div>
    </div>
  );
}

export default MiniPlayerElement