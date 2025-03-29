import { FaRegCirclePlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { selectPlayList } from "../redux/Slice";

function MenuListElement({data}:{data:any}) {
  const disPatch=useDispatch()
  return (
    <div className="group relative flex flex-row items-center justify-between w-100% rounded-[10px] h-fit py-[2px] px-[5px]  hover:bg-stone-700 my-[5px]">
      
    <div className="flex">
    <img className="w-[32px] h-[32px] rounded-full mr-[10px]" src={data.img} alt=""  />
      <div className="flex flex-col" >
        <p className="text-stone-50 w-[90px]  whitespace-nowrap overflow-hidden text-ellipsis group-hover:w-[50px]">{data.name}</p>
        {/* <p className="text-[12px] text-stone-400">amilseferov1</p> */}
      </div>
    </div>
    <Link to={'/playList'} onClick={()=>{disPatch(selectPlayList(data))}}> <FaRegCirclePlay className="text-[20px]   hidden group-hover:flex" /></Link> 
    </div>
  );
}

export default MenuListElement;
