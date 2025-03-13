import { FaRegCirclePlay } from "react-icons/fa6";

function MenuListElement() {
  return (
    <div className="group relative flex flex-col w-100% rounded-[10px] h-[50px] p-[5px]  hover:bg-stone-700 my-[5px]">
    <p className="text-stone-50">rep</p>
    <p className="text-[12px] text-stone-400">amilseferov</p>
    <FaRegCirclePlay className='absolute right-[10px] top-[calc(50%-10px)] text-[20px] opacity-0 group-hover:opacity-[1] ' />
    </div>
  );
}

export default MenuListElement;
