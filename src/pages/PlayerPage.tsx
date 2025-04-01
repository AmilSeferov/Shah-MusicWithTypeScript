import { useState } from "react";

import PlayerList from "../components/PlayerList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
function PlayerPage() {
  const [active, setActive] = useState<number>(1);
  const data = useSelector((state: RootState) => state.music.player);
  console.log();
  return (
    <div className="lg:h-[calc(100vh-198px)] w-[100%]  flex flex-col items-center  lg:flex-row lg:justify-around mt-[50px]">
      <div className="w-[100%] lg:h-[100%] lg:w-[40%] flex justify-center  ">
        <img className="max-h-[calc(90%)] " src={data.img} alt="" />
      </div>
      <div className=" w-[90%] lg:w-[50%] lg:flex justify-end px-[10px] lg:mr-[40px]  ">
        <div className=" w-[100%] flex flex-col items-center h-[100%]">
          <ul className=" text-[12px] justify-between w-[70%] lg:w-[450px] border-b-[1px] h-fit border-stone-700 flex  font-bold">
            <li
              onClick={() => {
                setActive(1);
              }}
              className={
                (active === 1 && "border-b-[2px] border-stone-200 ") +
                " lg:w-[145px] flex justify-center p-[5px]"
              }
            >
              Siradaki
            </li>
            <li
              onClick={() => {
                setActive(2);
              }}
              className={
                (active === 2 && "border-b-[2px] border-stone-200 ") +
                " lg:w-[160px] flex justify-center p-[5px]"
              }
            >
              Şarkı Sözleri
            </li>
            <li
              onClick={() => {
                setActive(3);
              }}
              className={
                (active === 3 && "border-b-[2px] border-stone-200 ") +
                " lg:w-[145px] flex justify-center p-[5px]"
              }
            >
              Benzer
            </li>
          </ul>
          <div className=" w-[60%]  flex  justify-center  mb-[10px]">
            {active === 1 && <PlayerList />}
            {active === 2 && <p className="">{}</p>}
            {active === 3 && ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
