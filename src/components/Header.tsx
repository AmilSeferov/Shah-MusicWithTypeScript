import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setmenu } from "../redux/Slice";
function Header() {
  const dispatch = useDispatch();
  return (
    <header className="bg-stone-950 flex flex-row justify-between items-center p-[20px]  ">
      <div
        className="flex text-[20px] z-10"
        onClick={() => {
          dispatch(setmenu());
        }}
      >
        <AiOutlineMenu className={"text-white  text-[30px] hover:text-[#5c5c5c]"} />
        <p className="text-white ml-[20px]">Shah</p>
        <p className="text-yellow-300">Music</p>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-[#5c5c5c]  text-stone-100 outline-none border-none py-[8px] px-[10px] w-[350px] rounded-[11px]"
      />
      <FaUserCircle className="text-[32px] text-[#5c5c5c] bg-white rounded-[50%] " />
    </header>
  );
}

export default Header;
