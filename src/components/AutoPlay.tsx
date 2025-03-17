import React from "react";
import Toggle from "./Toggle";

function AutoPlay() {
  return (
    <div className="flex items-center w-100% justify-between p-[10px]">
      <div>
        <p>Otamatik oynat</p>
        <p className="text-[12px] text-stone-400">Siranin sonuna benzer sarkilar ekleyin</p>
      </div>
<Toggle/>
    </div>
  );
}

export default AutoPlay;
