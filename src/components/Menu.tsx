import React from "react";
import { Link } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { TbArrowRoundaboutLeft } from "react-icons/tb";
import { RiCompassDiscoverFill } from "react-icons/ri";
function Menu() {
  return (
    <div className="bg-stone-950  text-stone-50 h-[calc(100vh-54px)] w-[200px] py-[20px]">
      <nav className="flex flex-col w-[200px]  justify-center px-[10px]">
        <Link
          className="flex items-center w-100% bg-stone-300 rounded-[10px] p-[5px] my-[5px]"
          to={"/"}
        >
          <GoHomeFill className="text-[20px] mx-[10px]" /> Home
        </Link>
        <Link
          className="flex items-center w-100% rounded-[10px] p-[5px] hover:bg-stone-200  my-[5px]"
          to={"/Discovery"}
        >
          <RiCompassDiscoverFill className="text-[20px] mx-[10px]"/> Discover
        </Link>
        <Link
          className=" flex items-center w-100% rounded-[10px] p-[5px]  hover:bg-stone-200 my-[5px]"
          to={"/About"}
        >
          {" "}
          <TbArrowRoundaboutLeft className="text-[20px] mx-[10px]" />
          About
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
