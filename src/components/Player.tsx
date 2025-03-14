import { IoIosPlay } from "react-icons/io"
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";

function Player() {
  return (
    <div className="w-[100%] absolute bottom-[0] py-[20px] bg-stone-800 px-[10px] text-stone-200">
        <div className="flex items-center w-[320px] text-[24px]">
        <IoPlaySkipBackSharp />
        <IoIosPlay className="text-[34px] mx-[10px]"/>
        <IoPlaySkipForward />
        <p className="text-[16px] px-[10px]">1:10/2:11</p>
        </div>
    </div>
  )
}
 
export default Player