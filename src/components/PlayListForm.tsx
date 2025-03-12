import { useState } from "react";
import { GiWorld } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
function PlayListForm() {
  const [ref,setref]=useState<boolean[]>([false,false,false])
  return (
    <div className="w-[640px] h-[400px] p-[25px] bg-stone-900 fixed top-[calc(50%-160px)] left-[calc(50%-200px)] z-9  font-bold flex flex-col justify-between">
      <h2>New PlayList</h2>
      <div>
      <input
      onClick={()=>{
        setref([true,false,false])
      }}
        type="text"
        className="w-[100%] outline-none"
        placeholder="Baslik"
      />
      <div className={ref[0]?'bg-blue-700 h-[1px] w-[100%]':'bg-stone-700 h-[1px] w-[100%]'}></div>
      </div>
      <div>
      <input
      onClick={()=>{
        setref([false,true,false])
      }}
        type="text"
        className="w-[100%] outline-none "
        placeholder="Aciklama"
      />
       <div className={ref[1]?'bg-blue-700 h-[1px] w-[100%]':'bg-stone-700 h-[1px] w-[100%]'}></div>
      </div>

      <div className="w-[210px] " onClick={()=>{
        setref([false,false,true])
      }}>
      <div  className="flex items-center    ">
        <div className="flex items-center  w-[180px]  text-[18px] font-[600] px-[10px] ">
          <GiWorld className="text-[20px] mr-[15px] " /> Herkese acik
        </div>
        <IoIosArrowDown className="text-[20px] " />
      </div>
      <div className={ref[2]?'bg-blue-700 h-[1px] w-[100%]':'bg-stone-700 h-[1px] w-[100%]'}></div>
      </div>
      <div className="flex flex-row justify-end   w-[100%]">
        <button>Iptal</button>
        <button className="bg-stone-400 w-[100px] h-[30px] rounded-[20px] ml-[20px]" >Olusdur</button>
      </div>
    </div>
  );
}

export default PlayListForm;
