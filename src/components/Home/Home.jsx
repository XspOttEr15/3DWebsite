import React, { useContext, useEffect, } from 'react'
import '../styles/Home.css'
import { DataContext } from '../../App'
import { motion } from "framer-motion";
import { Overlay } from './Overlay';
import Video from './Video'
import { LoadingScreenRoom } from '../pages/LoadingScreen';

const Home = () => {
  const { setColseBgmusic,
    ColseBgmusic, } = useContext(DataContext);

    useEffect(() => {
      setColseBgmusic(false)
    }, []);
  
  return (
    <>  
      <motion.div className=' w-full  h-full'>
        <Video/>
        <Overlay/>
      </motion.div>
    </>
  )
}



export default Home