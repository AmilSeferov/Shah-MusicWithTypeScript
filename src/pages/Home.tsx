import MoodList from "../components/MoodList"
import MusicList from "../components/MusicList"


function Home() {

  return (
    <div className='text-white w-[calc(100%-200px)]  px-[120px] pt-[20px]'>
      <MusicList/>
      <MoodList/>
      <MoodList/>
      <MoodList/>
       
 
    </div>
  )
}

export default Home