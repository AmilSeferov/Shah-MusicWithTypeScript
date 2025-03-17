import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { TbArrowRoundaboutLeft } from "react-icons/tb";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FiPlus } from "react-icons/fi";
import { setAddList } from "../redux/Slice";
import MenuListElement from "./MenuListElement";

function Menu() {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.music.menu);
  const player = useSelector((state: RootState) => state.music.player);
  return (
    <>
      <div
        className={
          (menu ? " w-[250px] " : "w-[70px] h-[calc(100%-80px)]  ") 
          //+ (player ? " h-[calc(100%-830px)]" : "")
        }
      ></div>
      <div
        className={
         ( menu
            ? " text-stone-50  w-[200px] py-[10px] pt-[64px] border-r-[1px] border-gray-500 flex flex-col items-center fixed left-0 bottom-0 h-[calc(100%)] bottom-0  "
            : " text-stone-50 h-[calc(100%-80px)] w-[70px] py-[10px] border-r-[1px] border-gray-500  flex flex-col items-center fixed left-0 bottom-0 ")
            // +(player? 'h-[calc(100%-68px)] bottom-[68px] ':'')
        }
      >
        <nav
          className={
            (menu ? " border-b-[1px] border-gray-500" : " ") +
            "flex flex-col w-[95%]  justify-center px-[10px] py-[20px]"
          }
        >
          <Link
            className={
              (!menu && "flex-col text-[10px]  ") +
              " flex items-center h-fit w-100% rounded-[10px] px-[3px] py-[8px]  hover:bg-stone-700 my-[5px]"
            }
            to={"/"}
          >
            <GoHomeFill className="text-[20px] mx-[10px]" />
            {"Home"}
          </Link>
          <Link
            className={
              (!menu && "flex-col text-[10px]  ") +
              " flex items-center h-fit w-100% rounded-[10px] px-[3px] py-[8px]  hover:bg-stone-700 my-[5px]"
            }
            to={"/Discover"}
          >
            <RiCompassDiscoverFill className="text-[20px] mx-[10px]" />
            {"Discover"}
          </Link>
          <Link
            className={
              (!menu && "flex-col text-[10px]  ") +
              " flex items-center h-fit w-100% rounded-[10px] px-[3px] py-[8px]  hover:bg-stone-700 my-[5px]"
            }
            to={"/About"}
          >
            {" "}
            <TbArrowRoundaboutLeft className="text-[20px] mx-[10px]" />
            {"About"}
          </Link>
        </nav>
        {menu && (
          <button
            onClick={() => {
              dispatch(setAddList());
            }}
            className="flex items-center w-[90%] p-[6px] mt-[10px] bg-stone-800 rounded-[10px]"
          >
            <FiPlus className="mx-[10px]" /> New playlist
          </button>
        )}
        {/* {menu && (
          <div className=" flex flex-col w-[95%] h-[70%] overflow-auto justify-center px-[10px] py-[20px] mt-[10px]">
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
            <MenuListElement />
          </div>
        )} */}
      </div>
    </>
  );
}

export default Menu;
