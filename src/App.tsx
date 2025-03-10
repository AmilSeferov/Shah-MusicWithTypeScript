import { Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {

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
