import React from "react";
import { IoMdClose } from "react-icons/io";
import MenuListElement from "./MenuListElement";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { sellectMusic, setsellect } from "../redux/Slice";
function MusicAdd__PlayList() {
  const disPatch = useDispatch();
  const playLists = useSelector((state: RootState) => state.music.playLists);
  const sellectedMusic = useSelector(
    (state: RootState) => state.music.selectedMusic
  );
  return (
    <div
      className={
        (sellectedMusic.toPlayList ? "flex flex-col" : "hidden") +
        " h-[440px] w-[360px] md:h-[540px] bg-stone-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl "
      }
    >
      <div className=" flex items-center justify-around w-full border-b-[1px]">
        <p className="py-[10px] font-bold text-[22px]">Oynatma listesini sec</p>{" "}
        <IoMdClose
          onClick={() => {
            disPatch(setsellect());
          }}
          className="text-[25px]"
        />
      </div>
      <div className=" flex flex-col w-[95%] h-[calc(100%-80px)] overflow-auto lg:overflow-hidden  hover:overflow-auto px-[10px] py-[20px] mt-[15px]">
        {playLists.map((item: any, index: number) => (
          <MenuListElement key={index} data={item} add={true} />
        ))}
      </div>
    </div>
  );
}

export default MusicAdd__PlayList;
