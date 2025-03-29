import React from "react";

function Option({visible}:{visible:boolean}) {
  return (
    <div className={(visible?'flex':'hidden') + " absolute right-[35px] top-[15px]"}>
      <ul className="p-[5px] bg-zinc-700">
        <li className="p-[5px] hover:bg-zinc-600 rounded-[5px] m-[1px]">calma listesine ekle</li>
      </ul>
    </div>
  );
}

export default Option;
