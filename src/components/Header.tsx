import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setmenu } from "../redux/Slice";
import { RootState } from "../redux/store";
function Header() {
  const dispatch = useDispatch();
   const menu = useSelector((state: RootState) => state.music.menu);
   const [headerVisible, setHeaderVisible] = useState(true);
   const headerRef = useRef(null); 
 
   useEffect(() => {
    // Sayfa başında olduğunda bildirim göstermek için
    const checkScrollPosition = () => {
      if (window.scrollY === 0) {
       setHeaderVisible(true)
      } else{
        setHeaderVisible(false)
      }
    };

    // Sayfa kaydırıldıkça scroll pozisyonunu kontrol et
    window.addEventListener('scroll', checkScrollPosition);
  },[])
  return (<>
    <div className="w-[100%] h-[80px]"></div>
    <header ref={headerRef} className={(!menu&&"border-b-[1px] border-stone-500 ") + (!headerVisible?" border-b-[1px] z-9 border-stone-500  ":"")  + " bg-stone-950 flex flex-row justify-between items-center p-[20px] fixed top-0 left-0 w-[100%]     "}>
      <div
        className="flex items-center text-[20px] z-10 "
        onClick={() => {
          dispatch(setmenu());
        }}
      >
        <AiOutlineMenu className={"sm:text-[26px] text-white md:text-[26px] lg:text-[30px] hover:text-[#5c5c5c]"} />
        <p className="text-white ml-[20px] hidden sm:flex md:text-[20px] lg:text-[22px]">Shah</p>
        <p className="text-yellow-300 hidden sm:flex md:text-[20px] lg:text-[22px] ">Music</p>
      </div>
      <input 
        type="text"
        placeholder="Search"
        className="bg-[#5c5c5c]  text-stone-100 outline-none border-none sm:py-[2px] md:py-[4px] lg:py-[8px] px-[10px] md:w-[250px] lg:w-[350px] rounded-[11px]"
      />
      <FaUserCircle className="hidden  md:flex  md:text-[26px] lg:text-[32px] text-[#5c5c5c] bg-white rounded-[50%] " />
    </header>
    </>);
}

export default Header;
