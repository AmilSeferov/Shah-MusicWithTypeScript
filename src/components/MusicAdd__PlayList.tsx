import React from 'react'
import { IoMdClose } from "react-icons/io";
import MenuListElement from './MenuListElement';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
function MusicAdd__PlayList() {
  const playLists = useSelector((state: RootState) => state.music.playLists);
  return (
    <div className='w-[360px] h-[540px] bg-stone-800 fixed inset-0 m-auto rounded-2xl '>
    <div className=' flex items-center justify-around w-full border-b-[1px]'><p className='py-[10px] font-bold text-[22px]'>Oynatma listesini sec</p> <IoMdClose className='text-[25px]'/></div>
    <div className=" flex flex-col w-[95%] h-[calc(100%-80px)] overflow-hidden  hover:overflow-auto px-[10px] py-[20px] mt-[15px]">
            {playLists.map((item: any, index: number) => (
              <MenuListElement key={index} data={item} add={true} />
            ))}
          </div>
    </div>
  )
}

export default MusicAdd__PlayList 