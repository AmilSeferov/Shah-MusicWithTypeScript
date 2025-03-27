import { Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import Home from './pages/Home'
import Discover from './pages/Discover'
import PlayListForm from './components/PlayListForm'
import PlayerPage from './pages/PlayerPage'
import Player from './components/Player'
import { addPlayList } from './redux/Slice'
function App() {
  const menu=useSelector((state:RootState)=>state.music.menu)
  const dispatch = useDispatch();
  const player=useSelector((state:RootState)=>state.music.player)
   const playList = useSelector(
      (state: RootState) => state.music.data.playlists.items
    );
useEffect(()=>{
  playList.map((item: any) => {
    return dispatch(
      addPlayList({
        name: item.data.name,
        img: item.data.images.items[0].sources[0].url,
      })
    );
  });
},[])
  return (
    <div className='min-h-[100vh] bg-stone-950'>
      <Header  />
      <main  className={(player&&'h-[calc(100%-52px)] md:h-[calc(100%-58px)] lg:h-[calc(100%-62px)] overflow-auto' )+' flex flex-row  bg-stone-950 text-white  z-0'}>
        <Menu/>
    
      <Routes >
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/discover' element={<Discover/>}> </Route>
        <Route path='/player' element={<PlayerPage/>}> </Route>

      </Routes>
      <PlayListForm/>
   
    </main>
  {player&&<Player/>}  
    </div>
  )
}

export default App
