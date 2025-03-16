import React from 'react'
import DiscoverFilters from '../components/DiscoverFilters'
import MoodCard from '../components/MoodCard'
import MoodList from '../components/MoodList'
import MiniMusicCard from '../components/MiniMusicCard'
import MusicList from '../components/MusicList'

function Discover() {
  return <div className=' w-[calc(100%-200px)] px-[120px]'>
   <DiscoverFilters/>
<MusicList/>
<MusicList/>
<MusicList/>
<MusicList/>
<MoodList/>
<MusicList/>
<MusicList/>
<MusicList/>
<MoodList/>

    <div className='text-white'></div>
  </div>
}

export default Discover