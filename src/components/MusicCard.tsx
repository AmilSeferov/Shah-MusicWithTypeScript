import { FaCirclePlay } from "react-icons/fa6"; 
function MusicCard() {
   
  return (
    <div className="w-[200px] relative  ">
     <div className="group">
     <img className="h-200px rounded-[5px] "
       src="https://lh3.googleusercontent.com/_GOJvnIv2J-N25bGJKydXYRrGMW_mKGhpyWx6BtzwKomMagzoStsn2joZnOjJppNcN1QQOrRDBADgToP=w544-h544-l90-rj" alt="" />
       <FaCirclePlay className=" absolute top-[170px] right-[10px] text-[25px] opacity-[0] group-hover:opacity-[1]"/>
     </div>
      <div>
        <p className="w-fit text-white">Alagözlüm (Neyləyim)</p>
        <div className="flex text-stone-400"><p className="mr-[10px]">Single</p><p>Akif İslamzadə</p></div>
      </div>
    </div>
  );
}

export default MusicCard;
