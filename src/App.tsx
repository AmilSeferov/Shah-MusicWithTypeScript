import { Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import Home from './pages/Home'
function App() {
  const menu=useSelector((state:RootState)=>state.music.menu)

  return (
    <>
      <Header />
      <main className='flex flex-row bg-stone-950'>
        <Menu/>
        
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
      </Routes>
    </main>
      
    </>
  )
}

export default App
