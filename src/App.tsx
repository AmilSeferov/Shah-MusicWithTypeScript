import { Route, Router, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import PlayListForm from "./components/PlayListForm";
import PlayerPage from "./pages/PlayerPage";
import Player from "./components/Player";
import { addPlayList } from "./redux/Slice";
import ProfilePage from "./pages/ProfilePage";
import PlayListPage from "./pages/PlayListPage";
import MusicAdd__PlayList from "./components/MusicAdd__PlayList";
function App() {
  const player = useSelector((state: RootState) => state.music.player);

  useEffect(() => {}, []);
  return (
    <div className="min-h-[100vh] bg-stone-950">
      <Header />
      <main
        className={
          (player ?
            "h-[calc(100%-52px)] md:h-[calc(100%-58px)] lg:h-[calc(100%-62px)] overflow-auto":'h-[100%]') +
          " flex flex-row  bg-stone-950 text-white  z-0"
        }
      >
        <Menu />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/player" element={<PlayerPage />}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/playList" element={<PlayListPage/>}></Route>
        </Routes>
        <MusicAdd__PlayList/>
        <PlayListForm />
      </main>
      {player && <Player />}
    </div>
  );
}

export default App;
