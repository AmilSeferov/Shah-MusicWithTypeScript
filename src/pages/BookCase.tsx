import { useSelector } from "react-redux";
import MusicCard from "../components/MusicCard";
import PlayListCard from "../components/PlayListCard";
import { RootState } from "../redux/store";

function BookCase() {
  const playLists = useSelector((state: RootState) => state.music.playLists);
  return (
    <div className="w-[100%] flex justify-center">
      <div className=" w-[90%] flex flex-row flex-wrap ">
        {playLists.map((item, index) => (
          <PlayListCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default BookCase;
