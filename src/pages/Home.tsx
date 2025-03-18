import MoodList from "../components/MoodList"
import MusicCard from "../components/MusicCard"
import MusicList from "../components/MusicList"


function Home() {

  return (
    <div className='text-white   flex justify-center pt-[20px]'>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
    </div>
  )
}

export default Home