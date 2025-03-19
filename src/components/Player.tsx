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
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

function Player() {
  const [value, setValue] = useState<number[]>([0, 0, 0]);
  const [kord, setKord] = useState<number>(100);
  const [like,setLike]=useState([true,true])
  const tagRef = useRef(null);
  return (
    <div className="flex flex-row-reverse sm:flex-row justify-between  w-[100%] fixed bottom-[0] py-[8px] lg:py-[10px] bg-stone-800 px-[10px] text-stone-200">
      <div className="flex items-center text-[20px] sm:text-[22px] lg:w-[320px] lg:text-[24px]">
        <IoPlaySkipBackSharp className='hidden sm:flex' />
        <IoIosPlay className="text-[28px] sm:text-[31px] lg:text-[34px] mx-[10px]" />
        <IoPlaySkipForward className='' />
        <p className="hidden lg:flex text-[16px] px-[10px]">1:10/2:11</p>
      </div>
      <div className="flex items-center  text-stone-300">
        <img
          className="h-[36px] lg:h-[40px] lg:w-[40px] mx-[10px]"
          src="https://lh3.googleusercontent.com/sH5ZOCD2m1c-353xr08as8ljVXCSZsDJ7en61z_erCL6jOoatzeSZlHS3tnw3GaaC5NUhmhvlfIVr28=w60-h60-l90-rj"
          alt=""
        />
        <div className="text-[12px] md:text-[14px] flex flex-col w-[200px] whitespace-nowrap overflow-hidden text-ellipsis lg:mx-[10px]">
          <p>Ela</p>
          <p>Reynmen • Ela • 2019 </p>
        </div>
      {like[0]? <BiDislike onClick={()=>{setLike([false,like[1]])}} className=" hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />:<BiSolidDislike onClick={()=>{setLike([true,like[1]])}} className="hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />}  
      {like[1]? <BiLike onClick={()=>{setLike([like[0], false])}} className=" hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />:<BiSolidLike onClick={()=>{setLike([like[0],true])}} className="hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />}  
        <SlOptionsVertical className="hidden md:flex md:text-[22px] lg:text-[24px] mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]" />
      </div>
      <div className=" justify-end items-center lg:w-[320px]  lg:text-[24px] hidden sm:flex sm:text-[18px] ">
        <div className="flex group items-center">
          <div
            ref={tagRef}
            onClick={(e) => {
              console.log(e.clientX);
              if (tagRef.current) {
                const x = tagRef.current.getBoundingClientRect();
                setKord(Math.round(((e.clientX - x.left) / 70) * 100));

                console.log(kord);
              }
            }}
            className="hidden w-[70px] h-[15px]   group-hover:flex  items-center relative "
          >
            <div className="h-[10px] w-[10px] rounded-full bg-stone-500 absolute"  style={{left:`${kord}%`}}></div>
            <div  className=" w-[70px] h-[3px] bg-stone-500  flex  items-center">
              
            <div
              className={` bg-stone-300  h-[3px]`}
              style={{ width: `${kord}%` }}
            ></div>
            </div>
          </div>
          <IoVolumeHighOutline className="mx-[10px]" />
        </div>
        {value[0] === 0 && (
          <LuRepeat
            onClick={() => {
              setValue([1, value[1], value[2]]);
            }}
            className="mx-[10px] text-stone-600"
          />
        )}
        {value[0] === 1 && (
          <LuRepeat
            onClick={() => {
              setValue([2, value[1], value[2]]);
            }}
            className="mx-[10px]"
          />
        )}
        {value[0] === 2 && (
          <LuRepeat1
            onClick={() => {
              setValue([0, value[1], value[2]]);
            }}
            className="mx-[10px]"
          />
        )}
        {value[1] === 0 && (
          <IoShuffle
            onClick={() => {
              setValue([value[0], 1, value[2]]);
            }}
            className="mx-[10px] text-stone-600"
          />
        )}
        {value[1] === 1 && (
          <IoShuffle
            onClick={() => {
              setValue([value[0], 0, value[2]]);
            }}
            className="mx-[10px]"
          />
        )}
        {value[2] === 0 && (
          <MdExpandMore
            onClick={() => {
              setValue([value[0], value[1], 1]);
            }}
            className="mx-[10px]"
          />
        )}
        {value[2] === 1 && (
          <MdExpandLess
            onClick={() => {
              setValue([value[0], value[1], 0]);
            }}
            className="mx-[10px]"
          />
        )}
      </div>
    </div>
  );
}

export default Player;
