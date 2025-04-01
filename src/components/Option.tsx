import { useDispatch } from "react-redux";
import { sellectMusic, setsellect } from "../redux/Slice";
import { musicType } from "../types/types";
import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";

function Option({ visible,setvisible  }: { visible: boolean,setvisible:any}) {
  const disPatch = useDispatch();
  return (
    <div
      className={
        (visible ? "flex" : "hidden") + " absolute right-[35px] top-[15px] z-2"
      }
    >
      <ul className="p-[5px] bg-zinc-700">
        <li
          onClick={() =>{disPatch(setsellect())
            setvisible(!visible)
          }}
          className="p-[5px] hover:bg-zinc-600 rounded-[5px] m-[1px]"
        >
          calma listesine ekle
        </li>
      </ul>
    </div>
  );
}

export default Option;
