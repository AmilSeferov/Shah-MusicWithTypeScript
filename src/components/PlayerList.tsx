import MiniPlayerElement from "./MiniPlayerElement";
import AutoPlay from "./AutoPlay";

function PlayerList() {
  return (
    <div className={" w-[100%] flex flex-col  "}>
      <AutoPlay />
      <div className="flex flex-col items-center h-[420px] w-[100%] overflow-x-auto">
        <MiniPlayerElement />
      </div>
    </div>
  );
}

export default PlayerList;
