import { Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
function App() {
  const menu=useSelector((state:RootState)=>state.music.menu)

  return (
    <>
      <Header/>
      <main>
        <Menu/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/About'></Route>
      </Routes>
    </main>
      
    </>
  )
}

export default App
