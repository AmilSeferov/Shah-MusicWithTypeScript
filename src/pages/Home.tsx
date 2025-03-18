import { useSelector } from "react-redux";
import MoodList from "../components/MoodList"
import MusicCard from "../components/MusicCard"
import MusicList from "../components/MusicList"
import { RootState } from "../redux/store";
import MoodCard from "../components/MoodCard";


function Home() {
  const menu = useSelector((state: RootState) => state.music.menu);

  return (
    <div className={ (menu?'md:w-[calc(100%-200px)]':'') +' text-white w-full sm:w-[calc(100%-70px)]  flex justify-center pt-[20px]'}>
            <MoodList/>

    </div>
  )
}

export default Home