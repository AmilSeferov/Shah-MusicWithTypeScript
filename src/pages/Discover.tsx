import React from 'react'
import DiscoverFilters from '../components/DiscoverFilters'
import MoodCard from '../components/MoodCard'
import MoodList from '../components/MoodList'
import MiniMusicCard from '../components/MiniMusicCard'
import MusicList from '../components/MusicList'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ProfileCard from '../components/ProfileCard'

function Discover() {
  const menu = useSelector((state: RootState) => state.music.menu);
  const data = Object.entries(
    useSelector((state: RootState) => state.music.data)
  );
  return <div className={(menu?' w-full md:w-[calc(100%-200px)]':'  sm:w-[calc(100%-70px)]') + '  flex flex-col items-center'}>
   <DiscoverFilters/>
   {data.map((item, index) => {
        if (item[0].toLowerCase()==='albums'){
        return <MusicList key={index} data={item} />;}
      })}
    <div className='text-white'></div>
    <MoodList/>
  </div>
}

export default Discover