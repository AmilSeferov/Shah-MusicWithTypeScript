import { useSelector } from "react-redux";
import MusicList from "../components/MusicList";
import { RootState } from "../redux/store";
import MiniMusicList from "../components/MiniMusicList";

function Home() {
  const menu = useSelector((state: RootState) => state.music.menu);
  const data = Object.entries(
    useSelector((state: RootState) => state.music.data)
  );
  return (
    <div
      className={
        (menu ? "md:w-[calc(100%-200px)]" : "") +
        " text-white w-full sm:w-[calc(100%-70px)]  flex flex-col items-center justify-center pt-[20px]"
      }
    >
      {data.map((item, index) => {
        if (item[0].toUpperCase() === "TRACKS") {
          return <MiniMusicList key={index} data={item} />;
        } else if (item[0].toLowerCase() === "artists") {
          return <MusicList key={index} data={item} />;
        }
      })}
      {data.map((item, index) => {
        if (item[0].toLowerCase() === "albums") {
          return <MusicList key={index} data={item} />;
        }
      })}
    </div>
  );
}

export default Home;
