import { useState } from "react";
function PlayerPage() {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="h-[100%] w-[100%]  flex flew-row justify-between">
      <div className="w-[50%]">
        <img
          className="max-h-[100%] "
          src="https://lh3.googleusercontent.com/VXBgP6Qqigmd89iW-5RnR8CPcotv1vtihE4y45glVfxFt5VQX6B_mTfTuptcONOGwvJPmQJFTF8uKOU=w544-h544-l90-rj"
          alt=""
        />
      </div>
      <div className="w-[50%] flex justify-end px-[10px] mr-[40px]  ">
        <div>
          <ul className="w-[450px] border-b-[1px] border-stone-700 flex  font-bold">
            <li
              onClick={() => {
                setActive(1);
              }}
              className={
                (active === 1 && "border-b-[2px] border-stone-200 ") +
                " w-[145px] flex justify-center p-[5px]"
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
                " w-[160px] flex justify-center p-[5px]"
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
                " w-[145px] flex justify-center p-[5px]"
              }
            >
              Benzer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
