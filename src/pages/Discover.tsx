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

  return <div className={(menu?' w-full md:w-[calc(100%-200px)]':'  sm:w-[calc(100%-70px)]') + '  flex flex-col items-center'}>
   <DiscoverFilters/>
<ProfileCard/>

    <div className='text-white'></div>
  </div>
}

export default Discover