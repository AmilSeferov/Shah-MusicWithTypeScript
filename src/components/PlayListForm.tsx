import { useState } from "react";
import { GiWorld } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { AiOutlineDisconnect } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setAddList } from "../redux/Slice";
function PlayListForm() {
  const [ref, setref] = useState<boolean[]>([false, false, false]);
  const [select, setselect] = useState<boolean>(true);
  const aps=useSelector((state:RootState)=>state.music.addPlayList)
  const dispatch = useDispatch();
  return (
    <div className={(aps?'flex':'hidden') + " w-[320px] h-[300px] sm:w-[480px] sm:h-[350px] md:w-[640px] md:h-[400px] p-[25px] bg-stone-900 fixed top-[calc(50%-150px)] left-[calc(50%-160px)]  sm:top-[calc(50%-175px)] sm:left-[calc(50%-240px)] md:top-[calc(50%-200px)] md:left-[calc(50%-320px)] z-9 text-[12px] sm:text-[14px] md:text-[16px] font-bold  flex-col justify-between"}>
      <h2>New PlayList</h2>
      <div>
        <input
          onClick={() => {
            setref([true, false, false]);
          }}
          type="text"
          className="w-[100%] outline-none"
          placeholder="Baslik"
        />
        <div
          className={
            ref[0]
              ? "bg-blue-700 h-[1px] w-[100%]"
              : "bg-stone-700 h-[1px] w-[100%]"
          }
        ></div>
      </div>
      <div>
        <input
          onClick={() => {
            setref([false, true, false]);
          }}
          type="text"
          className="w-[100%] outline-none "
          placeholder="Aciklama"
        />
        <div
          className={
            ref[1]
              ? "bg-blue-700 h-[1px] w-[100%]"
              : "bg-stone-700 h-[1px] w-[100%]"
          }
        ></div>
      </div>

      <div
        className="w-[210px] "
        onClick={() => {
          setref([false, false, true]);
        }}
      >
        <div className="flex items-center relative   ">
          <div
            onClick={() => {
              setselect(!select);
            }}
            className="flex items-center  w-[180px] text-[14px] sm:text-[16px] md:text-[18px] font-[600] py-[10px] "
          >
            <GiWorld className="text-[20px] mr-[15px] " /> Herkese acik
          </div>
          <IoIosArrowDown
            className="text-[20px]  "
            onClick={() => {
              setselect(!select);
            }}
          />
          <ul
            className={
              (select ? "opacity-[0]" : "opacity-[1]") +
              " absolute bottom-[-190px] bg-stone-800 py-[5px] text-[12px] sm:text-[14px] md:text-[16px] "
            }
          >
            <li
              onClick={() => {
                setselect(!select);
              }}
              className="flex items-center  w-[260px]  font-[600] px-[10px]  h-[60px] hover:bg-stone-500"
            >
              <GiWorld className="text-[20px] mr-[15px] " />
              <div>
                <p> Herkese acik</p>
                <p className="text-[12px] text-stone-400">
                  Herkes arayabilir ve görüntüleyebilir
                </p>
              </div>
            </li>
            <li
              onClick={() => {
                setselect(!select);
              }}
              className="flex items-center  w-[260px]  font-[600] px-[10px]  h-[60px] hover:bg-stone-500"
            >
              <AiOutlineDisconnect className="text-[20px] mr-[15px] " />
              <div>
                <p> Liste dışı</p>
                <p className="text-[12px] text-stone-400">
                  Bağlantısı olan herkes görebilir
                </p>
              </div>
            </li>
            <li
              onClick={() => {
                setselect(!select);
              }}
              className="flex items-center  w-[260px]  font-[600] px-[10px]  h-[60px] hover:bg-stone-500"
            >
              <CiLock className="text-[20px] mr-[15px] " />
              <div>
                <p> Gizli</p>
                <p className="text-[12px] text-stone-400">
                  Yalnızca siz görüntüleyebilirsiniz
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={
            ref[2]
              ? "bg-blue-700 h-[1px] w-[100%]"
              : "bg-stone-700 h-[1px] w-[100%]"
          }
        ></div>
      </div>
      <div className="flex flex-row justify-end   w-[100%]">
        <button 
        onClick={() => {
                    dispatch(setAddList());
                  }}
        >Iptal</button>
        <button className="bg-stone-400 w-[100px] h-[30px] rounded-[20px] ml-[20px]">
          Olusdur
        </button>
      </div>
    </div>
  );
}

export default PlayListForm;
