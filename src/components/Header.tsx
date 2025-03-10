import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setmenu } from "../redux/Slice";
function Header() {
  const dispatch = useDispatch();
  return (
    <header className="bg-stone-950 flex flex-row justify-between items-center p-[10px] ">
      <AiOutlineMenu
        onClick={() => {
          dispatch(setmenu());
        }}
        className="text-white  text-[30px] hover:text-[#5c5c5c]"
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-[#5c5c5c]  text-stone-100 outline-none border-none py-[5px] px-[10px] w-[300px] rounded-[11px]"
      />
      <FaUserCircle className="text-[32px] text-[#5c5c5c] bg-white rounded-[50%] " />
    </header>
  );
}

export default Header;
