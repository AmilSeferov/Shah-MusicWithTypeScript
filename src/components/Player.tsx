import { IoIosPlay } from "react-icons/io";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoVolumeLowOutline } from "react-icons/io5";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { BsVolumeMute } from "react-icons/bs";
import { LuRepeat } from "react-icons/lu";
import { LuRepeat1 } from "react-icons/lu";
import { IoShuffle } from "react-icons/io5";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

function Player() {
  return (
    <div className="flex justify-between  w-[100%] absolute bottom-[0] py-[10px] bg-stone-800 px-[10px] text-stone-200">
      <div className="flex items-center w-[320px] text-[24px]">
        <IoPlaySkipBackSharp />
        <IoIosPlay className="text-[34px] mx-[10px]" />
        <IoPlaySkipForward />
        <p className="text-[16px] px-[10px]">1:10/2:11</p>
      </div>
      <div className="flex items-center  text-stone-300">
        <img
          className="h-[40px] w-[40px] mx-[10px]"
          src="https://lh3.googleusercontent.com/sH5ZOCD2m1c-353xr08as8ljVXCSZsDJ7en61z_erCL6jOoatzeSZlHS3tnw3GaaC5NUhmhvlfIVr28=w60-h60-l90-rj"
          alt=""
        />
        <div className="flex flex-col mx-[10px]">
          <p>Ela</p>
          <p>Reynmen • Ela • 2019</p>
        </div>
        <BiDislike className="text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />
        <BiLike className="text-[29px] mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />
        <SlOptionsVertical className="text-[24px] mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />
      </div>
      <div className="flex justify-end items-center w-[320px] text-[24px]">
        <IoVolumeHighOutline className="mx-[10px]"/>
        <LuRepeat className="mx-[10px]"/>
        <IoShuffle className="mx-[10px]"/>
        <MdExpandMore className="mx-[10px]"/>
      </div>
    </div>
  );
}

export default Player;
