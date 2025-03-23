import { FaRegCirclePlay } from "react-icons/fa6";

function MenuListElement() {
  return (
    <div className="group relative flex flex-row items-center justify-between w-100% rounded-[10px] h-fit py-[2px] px-[5px]  hover:bg-stone-700 my-[5px]">
    <div className="flex">
    <img className="w-[32px] h-[32px] rounded-full mr-[10px]" src="https://i.scdn.co/image/ab6761610000e5eb6d5529e3962a16bd267bfeb2" alt=""  />
      <div className="flex flex-col" >
        <p className="text-stone-50 overflow-hidden">rep</p>
        {/* <p className="text-[12px] text-stone-400">amilseferov1</p> */}
      </div>
    </div>
      <FaRegCirclePlay className="text-[20px]   hidden group-hover:flex" />
    </div>
  );
}

export default MenuListElement;
