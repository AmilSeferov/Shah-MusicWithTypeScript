import React from 'react'
import DiscoverFilters from '../components/DiscoverFilters'
import MoodCard from '../components/MoodCard'
import MoodList from '../components/MoodList'

function Discover() {
  return <div className=' w-[calc(100%-200px)] px-[120px]'>
    <MoodList/>

    <div className='text-white'></div>
  </div>
}

export default Discover