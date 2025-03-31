import React from "react";
import { useDispatch } from "react-redux";
import { sellectMusic } from "../redux/Slice";
import { musicType } from "../types/types";

function Option({visible,data}:{visible:boolean,data:musicType}) {
  const disPatch=useDispatch();
  return (
    <div className={(visible?'flex':'hidden') + " absolute right-[35px] top-[15px]"}>
      <ul className="p-[5px] bg-zinc-700">
        <li onClick={()=>disPatch(sellectMusic(data))} className="p-[5px] hover:bg-zinc-600 rounded-[5px] m-[1px]">calma listesine ekle</li>
      </ul>
    </div>
  );
}

export default Option;
