import { FaCirclePlay } from "react-icons/fa6"; 
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addPlayer } from "../redux/Slice";
import Option from "./Option";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
function MusicCard({data}:{data:any}) {
  const disPatch=useDispatch();
  const[visible,setVisible]=useState<boolean>(false);
  const sellectedMusic=useSelector((state:RootState)=>state.music.selectedMusic)
  useEffect(()=>{
    // sellectedMusic!={name:data.data.name,img:data.data.coverArt.sources[0].url}&&setVisible(false)
  },[sellectedMusic])
  // console.log(sellectedMusic)
  return (
    
    <div onContextMenu={(event)=>{
      event.preventDefault();
      setVisible(!visible)}} className="w-fit relative mr-[10px] md:mr-[10px] lg:mr-[10px]">
      <Option visible={visible} data={{name:data.data.name,img:data.data.coverArt.sources[0].url}} />
     <div className="group relative w-[150px] sm:w-[170px] md:w-[175px] lg:w-[190px] xl:w-[200px]">
     <img className= "h-[150px] sm:h-[170px] md:h-[175px] lg:h-[190px] xl:w-[200px]  rounded-[5px] "
       src={data.data.coverArt.sources[0].url} alt="" />
      <Link onClick={()=>{
        disPatch(addPlayer({name:data.data.name ,artist:data.data.artists.items[0].profile.name,img:data.data.coverArt.sources[0].url}))
      }} to={'/player'}> <FaCirclePlay  className=" absolute bottom-[10px] right-[10px] text-[25px] opacity-[0] group-hover:opacity-[1]"/></Link>
     </div>
      <div className="text-[12px] sm:text-[16px]">
        <p className=" text-white w-[145px] sm:w-[165px] md:w-[170px] lg:w-[185px] xl:w-[195px] whitespace-nowrap overflow-hidden text-ellipsis">{data.data.name}</p>
        <div className="flex text-stone-400 "><p className=" w-[45px]  sm:w-[50px] md:w-[53px]  mr-[5px] md:mr-[10px]">Single</p><p className=" whitespace-nowrap overflow-hidden text-ellipsis w-[95px] sm:w-[105px] md:w-[108px] lg:w-[120px] xl:w-[130px] ">{data.data.artists.items[0].profile.name}</p></div>
      </div>
    </div>
    
  );
}

export default MusicCard;
