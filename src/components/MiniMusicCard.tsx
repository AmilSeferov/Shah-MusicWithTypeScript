import { FaPlay } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import Option from "./Option";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router";
import { addPlayer } from "../redux/Slice";

function MiniMusicCard({ data }: { data: any }) {
  const [visible,setVisible]= useState<boolean>(false)
  const sellectedMusic=useSelector((state:RootState)=>state.music.selectedMusic)
  const disPatch=useDispatch()
  useEffect(()=>{
     
  },[sellectedMusic])

  return (
    <div className="w-[280px] lg:w-[340px] flex flex-row items-center group relative m-[10px] ">
      <img
        className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
        src={
          data.data.albumOfTrack.coverArt.sources[1].url
            ? data.data.albumOfTrack.coverArt.sources[1].url
            : "https://lh3.googleusercontent.com/UUqDsBXvVRbZt0sjx7D7zqTuXSOZFP4PeZoO-QGerNUZFqdkDJ5P77p_g2j_GYiXiYsKb8iHrPTxDYH4=w544-h544-l90-rj"
        }
        alt=""
      />
      <div className="bg-stone-950 absolute left-0 hidden lg:flex  w-[48px] h-[48px] opacity-[0] group-hover:opacity-[0.7]"></div>
      <Link onClick={()=>{
        disPatch(addPlayer({name:data.data.name ,artist:data.data.artists.items[0].profile.name,img:data.data.albumOfTrack.coverArt.sources[2].url}))
      }} to={'/player'}> <FaPlay className="absolute left-[15px] top-[15px] text-[20px] opacity-[0] group-hover:opacity-[1]" /></Link>
      <div className="ml-[10px]">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[240px] text-[14px] lg:text-[16px] lg:w-[270px] px-[2px] group-hover:w-[200px]">
          {data.data.name}
        </p>
        <div className="flex flex-row whitespace-nowrap overflow-hidden text-ellipsis text-[12px] lg:text-[14px] ">
          <p className="mr-[15px] w-[90px] whitespace-nowrap overflow-hidden text-ellipsis  group-hover:w-[70px] ">
            {data.data.artists.items[0].profile.name +
              " , " +
              data.data.artists.items[1]?.profile.name}
          </p>
          <p  className="w-[110px] whitespace-nowrap overflow-hidden text-ellipsis group-hover:w-[90px] ">
            16mln izlenme
          </p>
          <SlOptionsVertical onClick={()=>setVisible(!visible)} className="opacity-[0] absolute right-[10px] top-[16px] text-[18px] group-hover:opacity-[1]  " />
          <Option visible={visible} data={{name:data.data.name,img:data.data.albumOfTrack.coverArt.sources[1].url}}/>
        </div>
      </div>
    </div>
  );
}

export default MiniMusicCard;
