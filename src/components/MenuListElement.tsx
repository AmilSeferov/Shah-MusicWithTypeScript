import { FaRegCirclePlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { add_toPlayList, selectPlayList, sellectMusic } from "../redux/Slice";
import { IoIosAddCircleOutline } from "react-icons/io";
function MenuListElement({data,add}:{data:any , add:boolean}) {
  const disPatch=useDispatch()
  return (
    <div onClick={()=>{
      
      add&&disPatch(add_toPlayList(data));
      add&&disPatch(sellectMusic(null))
    }} className="group relative flex flex-row items-center justify-between w-[100%] rounded-[10px] h-fit py-[2px] px-[5px]  hover:bg-stone-700 my-[5px]">
      
    <div className="flex w-[calc(100%-25px)]">
    <img className="w-[32px] h-[32px] rounded-full mr-[10px]" src={data.img} alt=""  />
      <div className="flex flex-col w-[(calc(100%-32px)]" >
        <p className={(add?'w-[200px]':'max-w-[95px] group-hover:w-[70px]' ) +" text-stone-50  overflow-hidden   whitespace-nowrap text-ellipsis "}>{data.name}</p>
        {/* <p className="text-[12px] text-stone-400">amilseferov1</p> */}
      </div>
    </div>
   {add?<IoIosAddCircleOutline className="text-[24px]   hidden group-hover:flex"/>: <Link to={'/playList'} onClick={()=>{disPatch(selectPlayList(data))}}> <FaRegCirclePlay className="text-[20px]   hidden group-hover:flex" /></Link>} 
    </div>
  );
}

export default MenuListElement;
