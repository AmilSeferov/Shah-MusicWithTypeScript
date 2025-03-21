import { FaCirclePlay } from "react-icons/fa6"; 
import { Link } from "react-router";
function MusicCard() {
   
  return (
    <Link to={'/player'}>
    <div className="w-fit relative mr-[10px] md:mr-[10px] lg:mr-[10px]">
     <div className="group relative w-[150px] sm:w-[170px] md:w-[175px] lg:w-[190px] xl:w-[200px]">
     <img className= "h-[150px] sm:h-[170px] md:h-[175px] lg:h-[190px] xl:w-[200px]  rounded-[5px] "
       src="https://lh3.googleusercontent.com/_GOJvnIv2J-N25bGJKydXYRrGMW_mKGhpyWx6BtzwKomMagzoStsn2joZnOjJppNcN1QQOrRDBADgToP=w544-h544-l90-rj" alt="" />
       <FaCirclePlay className=" absolute bottom-[10px] right-[10px] text-[25px] opacity-[0] group-hover:opacity-[1]"/>
     </div>
      <div className="text-[12px] sm:text-[16px]">
        <p className=" text-white w-[145px] sm:w-[165px] md:w-[170px] lg:w-[185px] xl:w-[195px] whitespace-nowrap overflow-hidden text-ellipsis">Alagözlüm (Neyləyim)</p>
        <div className="flex text-stone-400 "><p className=" w-[45px]  sm:w-[50px] md:w-[53px]  mr-[5px] md:mr-[10px]">Single</p><p className=" whitespace-nowrap overflow-hidden text-ellipsis w-[95px] sm:w-[105px] md:w-[108px] lg:w-[120px] xl:w-[130px] ">Akif İslamzadə</p></div>
      </div>
    </div>
    </Link>
  );
}

export default MusicCard;
