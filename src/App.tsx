import { Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import Home from './pages/Home'
import Discover from './pages/Discover'
import PlayListForm from './components/PlayListForm'
import PlayerPage from './pages/PlayerPage'
import Player from './components/Player'
function App() {
  const menu=useSelector((state:RootState)=>state.music.menu)
  const player=useSelector((state:RootState)=>state.music.player)
  

  return (
    <div className='min-h-[100vh] bg-stone-950'>
      <Header  />
      <main  className='flex flex-row  bg-stone-950 text-white  z-0'>
        <Menu/>
    {/* <PlayerPage/> */}
      <Routes >
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/discover' element={<Discover/>}> </Route>

      </Routes>
    </main>
  {player&&<Player/>}  
    </div>
  )
}

export default App
