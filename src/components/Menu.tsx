import React from "react";
import { Link } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { TbArrowRoundaboutLeft } from "react-icons/tb";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Menu() {
  const menu = useSelector((state: RootState) => state.music.menu);
  return <>
    <div className={ menu?' w-[200px] h-[calc(100vh-54px)]':'w-[70px] h-[calc(100vh-54px)]' }>

    </div>
    <div
      className={
        menu
          ? " text-stone-50 h-[calc(100vh)] w-[200px] py-[10px] pt-[64px] border-r-[1px] border-gray-500 flex flex-col items-center fixed left-0 bottom-0"
          : " text-stone-50 h-[calc(100vh-54px)] w-[70px] py-[10px]  flex flex-col items-center fixed left-0 bottom-0 "
      }
    >
      <nav className={ menu&&" border-b-[1px] border-gray-500" +"flex flex-col w-[95%]  justify-center px-[10px] py-[20px]" }>
        <Link
          className="flex items-center w-100% bg-stone-300 rounded-[10px] p-[5px] my-[5px]"
          to={"/"}
        >
          <GoHomeFill className="text-[20px] mx-[10px]" />
          {menu && "Home"}
        </Link>
        <Link
          className="flex items-center w-100% rounded-[10px] p-[5px] hover:bg-stone-200  my-[5px]"
          to={"/Discovery"}
        >
          <RiCompassDiscoverFill className="text-[20px] mx-[10px]" />
          {menu && "Discover"}
        </Link>
        <Link
          className=" flex items-center w-100% rounded-[10px] p-[5px]  hover:bg-stone-200 my-[5px]"
          to={"/About"}
        >
          {" "}
          <TbArrowRoundaboutLeft className="text-[20px] mx-[10px]" />
          {menu && "About"}
        </Link>
      </nav>
    </div>
    </>;
}

export default Menu;
