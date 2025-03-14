import { IoIosPlay } from "react-icons/io";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";

function Player() {
  return (
    <div className="flex justify-between  w-[100%] absolute bottom-[0] py-[20px] bg-stone-800 px-[10px] text-stone-200">
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
        <BiDislike className="text-[23px]  mx-[10px]" />{" "}
        <BiLike className="text-[23px] mx-[10px]" />{" "}
        <SlOptionsVertical className="text-[18px] mx-[10px]" />
      </div>
      <div className="flex items-center w-[320px] text-[24px]"></div>
    </div>
  );
}

export default Player;
