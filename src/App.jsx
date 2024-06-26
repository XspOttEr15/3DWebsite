import { Link, Route, Routes } from "react-router-dom";
import {  Suspense, lazy } from 'react';
import { createContext, useState } from "react";
import "./App.css";
import "flowbite-react";

// page
// import About from "./components/pages/About";
// import Home from "./components/Home/Home";
// import RoomChapterOne from "./components/Canvas/RoomChapterOne";
// import Character from "./components/pages/Character";
// import Concept from "./components/pages/Concept";
// import ChapterOne from "./components/pages/Chapter/ChapterOne";
// import ChapterDialogOne from "./components/pages/Chapter/ChapterDialogOne";
// import ChapterDialogTwo from "./components/pages/Chapter/ChapterDialogTwo";
// import ChapterDialogThree from "./components/pages/Chapter/ChapterDiaologThree";
// import LoadingScreen from "./components/pages/LoadingScreen";
// import ChapterTwo from "./components/pages/Chapter/ChapterTwo";
// import ChapterThree from "./components/pages/Chapter/ChapterThree";
// import Maps from "./components/pages/Maps";
// import ChapterOneMap from "./components/pages/Maps/ChapterOneMap";

const Home = lazy(() => wait(5000).then(() =>import('./components/Home/Home')));
const RoomChapterOne = lazy(() => import('./components/Canvas/RoomChapterOne'));
const Character = lazy(() => wait(2000).then(() =>import('./components/pages/Character')));
const Concept = lazy(() => wait(2000).then(() =>import('./components/pages/Concept')));
const About = lazy(() => wait(2000).then(() =>import('./components/pages/About')));
const ChapterOne = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterOne')));
const ChapterDialogOne = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterDialogOne')));
const ChapterDialogTwo = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterDialogTwo')));
const ChapterDialogThree = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterDiaologThree')));
const LoadingScreen = lazy(() => import('./components/pages/LoadingScreen'));
const ChapterTwo = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterTwo')));
const ChapterThree = lazy(() => wait(2000).then(() =>import('./components/pages/Chapter/ChapterThree')));
const Intro = lazy(() => wait(0).then(() =>import('./components/pages/intro')));
const ChapterOneMap = lazy(() => wait(2000).then(() =>import('./components/pages/Maps/ChapterOneMap')));
const ChapterTwoMap = lazy(() => wait(2000).then(() =>import('./components/pages/Maps/ChapterTwoMap')));
const ChapterThreeMap = lazy(() => wait(2000).then(() =>import('./components/pages/Maps/ChapterThreeMap')));
const Maps = lazy(() => wait(2000).then(() =>import('./components/pages/Maps')));
const IntroTwo = lazy(() => wait(0).then(() =>import('./components/pages/introTwo.jsx')));
import Nav from "./components/Navbar/Nav";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"




export const DataContext = createContext();

function App() {
  const [CloseNavbar, setCloseNavbar] = useState("hidden");
  const [CloseButtonNavbar, setCloseButtonNavbar] = useState(false);
  const [Volumn, setVolumn] = useState(0.1);
  const [RoomVolumn, setRoomVolumn] = useState(0.1);
  const [ColseBgmusic, setColseBgmusic] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isPassOne, setIsPassOne] = useState(1)
  const [isLocked, setIsLocked] = useState();

  return (
    <>
      <SpeedInsights />
      <Analytics/>
      <DataContext.Provider
        value={{
          RoomVolumn, 
          setRoomVolumn,
          CloseNavbar,
          setCloseNavbar,
          CloseButtonNavbar,
          setCloseButtonNavbar,
          ColseBgmusic,
          setColseBgmusic,
          Volumn,
          setVolumn,
          isNavbarFixed,
          setIsNavbarFixed,
          isPassOne, 
          setIsPassOne,
          isLocked, 
          setIsLocked,        
        }}
      >
        <div className="main">
          <Suspense fallback={<LoadingScreen/>}>
          <Nav/>
          <Routes>
          <Route path="/" index element={<Intro/>} />
          <Route path="/introTwo" index element={<IntroTwo/>} />
            <Route path="/home"  element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/character" element={<Character />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/chapteronedialog" element={<ChapterDialogOne />} />
            <Route path="/chaptertwodialog" element={<ChapterDialogTwo />} />
            <Route
              path="/chapterthreedialog"
              element={<ChapterDialogThree />}
            />
            <Route path="/chapterone" element={<ChapterOne />} />
            <Route path="/chaptertwo" element={<ChapterTwo />} />
            <Route path="/chapterthree" element={<ChapterThree />} />
            <Route path="/roomchapterone" element={<RoomChapterOne />} />
            <Route path="/chapteronemap" element={<ChapterOneMap/>} />
            <Route path="/chaptertwomap" element={<ChapterTwoMap/>} />
            <Route path="/chapterthreemap" element={<ChapterThreeMap/>} />
          </Routes>
          </Suspense>
        </div>
      </DataContext.Provider>
    </>
  );
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export default App;

