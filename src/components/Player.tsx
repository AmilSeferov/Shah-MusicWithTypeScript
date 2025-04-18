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
import { FaPause } from "react-icons/fa6";
import { LuRepeat } from "react-icons/lu";
import { LuRepeat1 } from "react-icons/lu";
import { IoShuffle } from "react-icons/io5";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "/public/audio.mp3";
import { Link, Location, useLocation } from "react-router";
function Player() {
  const audioRef = useRef(null);
  const [value, setValue] = useState<number[]>([0, 0, 0]);
  const [kord, setKord] = useState<number>(100);
  const [like, setLike] = useState([true, true]);
  const [play, setPlay] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const tagRef = useRef(null);
  const arrowRef = useRef(null);
  const data = useSelector((state: RootState) => state.music.player);
  const [draging, setDraging] = useState(false);
  const [prevLocations,setPrevLocations]=useState<(null|string)>(null)
const locations: Location<any>=useLocation()
  useEffect(() => {
    // setDuration(audioRef.current?.duration)
    setInterval(() => {
      setDuration(audioRef.current?.duration);
      setCurrentTime(audioRef.current?.currentTime);
    }, 1000);

    setPlay(true);
    if (!play) {
      audioRef.current?.play();}
  }, []);

  const audioPlay = () => {
    setPlay(!play);
    if (!play) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };
  return (
    <>
      <div className="w-[100%] h-[52px] md:h-[58px] lg:h-[62px] ">
        <audio ref={audioRef}>
          <source src="audio.mp3" type="" />
        </audio>
      </div>

      <div
       onMouseDown={() => {
        setDraging(true);
      }}
      onMouseUp={() => {
        setDraging(false);
      }}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
         if (arrowRef.current && audioRef.current && draging) {
            const value =
              duration *
              (Math.round(
                (e.clientX / arrowRef.current.getBoundingClientRect().width) *
                  10000
              ) /
                100);
            audioRef.current.currentTime = value / 100;
          }
        }}
        className="  flex flex-row-reverse sm:flex-row justify-between  w-[100%] fixed bottom-[0] py-[8px] lg:py-[10px] bg-stone-800 px-[10px] text-stone-200"
      >
        <div
          ref={arrowRef}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (arrowRef.current && audioRef.current) {
              const value =
                duration *
                (Math.round(
                  (e.clientX / arrowRef.current.getBoundingClientRect().width) *
                    10000
                ) /
                  100);
              audioRef.current.currentTime = value / 100;
            }
          }}
          className="absolute top-[-2px] left-0 h-[6px] w-[100%] z-10 hover:cursor-pointer"
        >
          {" "}
          <div
            style={{
              width: `${
                Math.round((currentTime / duration) * 100000) / 1000 + "%"
              }`,
            }}
            className={"absolute top-[2px] left-0 h-[2px] bg-red-500"}
          ></div>
          <div
           
            style={{
              left: `${
                Math.round((currentTime / duration) * 100000) / 1000 + "%"
              }`,
            }}
            className="absolute top-0   h-[6px] w-[6px] rounded-full bg-red-500 z-1"
          ></div>
          <div
            style={{
              width: `${
                Math.round(((duration - currentTime) / duration) * 100000) /
                  1000 +
                "%"
              }`,
            }}
            className=" absolute top-[2px] right-0 h-[2px] bg-stone-500 "
          ></div>
        </div>
        <div className="flex items-center text-[20px] sm:text-[22px] lg:w-[320px] lg:text-[24px]">
          <IoPlaySkipBackSharp className="hidden sm:flex" />
          <IoIosPlay
            onClick={audioPlay}
            className={
              (play ? "hidden " : "") +
              " text-[28px] sm:text-[31px] lg:text-[34px] mx-[10px]"
            }
          />
          <FaPause
            onClick={audioPlay}
            className={
              (!play ? "hidden " : "") +
              " text-[28px] sm:text-[31px] lg:text-[34px] mx-[10px]"
            }
          />
          <IoPlaySkipForward className="" />
          <p className="hidden lg:flex text-[16px] px-[10px]">
            {Math.floor(currentTime / 60)}:
            {Math.floor(currentTime % 60) < 10
              ? "0" + Math.floor(currentTime % 60)
              : Math.floor(currentTime % 60)}
            /{Math.floor(duration / 60)}:{Math.floor(duration % 60)}
          </p>
        </div>
        <div className="flex items-center  text-stone-300">
          <img
            className="h-[36px] lg:h-[40px] lg:w-[40px] mx-[10px]"
            src={data.img}
            alt=""
          />
          <div className="text-[12px] md:text-[14px] flex flex-col w-[200px] whitespace-nowrap overflow-hidden text-ellipsis lg:mx-[10px]">
            <p>{data.name}</p>
            <p>
              {data.artist} • {data.name} • 2019{" "}
            </p>
          </div>
          {like[0] ? (
            <BiDislike
              onClick={() => {
                setLike([false, like[1]]);
              }}
              className=" hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]"
            />
          ) : (
            <BiSolidDislike
              onClick={() => {
                setLike([true, like[1]]);
              }}
              className="hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]"
            />
          )}
          {like[1] ? (
            <BiLike
              onClick={() => {
                setLike([like[0], false]);
              }}
              className=" hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]"
            />
          ) : (
            <BiSolidLike
              onClick={() => {
                setLike([like[0], true]);
              }}
              className="hidden md:flex md:text-[26px] lg:text-[29px]  mx-[10px] hover:bg-stone-400 p-[4px] rounded-[50%]"
            />
          )}
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
              <div
                className="h-[10px] w-[10px] rounded-full bg-stone-500 absolute"
                style={{ left: `${kord}%` }}
              ></div>
              <div className=" w-[70px] h-[3px] bg-stone-500  flex  items-center">
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
            <Link onClick={()=>{
setPrevLocations(locations.pathname)
            }} to={'/player'}><MdExpandMore 
            onClick={() => {
              setValue([value[0], value[1], 1]);
            }}
            className="mx-[10px]"
          /></Link>
          )}
          {value[2] === 1 && (
           <Link to={prevLocations} onClick={()=>{
            console.log(prevLocations)
           }}> <MdExpandLess
              onClick={() => {
                setValue([value[0], value[1], 0]);
              }}
              className="mx-[10px]"
            />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Player;
