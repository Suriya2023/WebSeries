import React from 'react'
// import Navbar from './Component/Navbar'/
import Navbar from './Component/SecondNavbar/Navbar'
import SectionList from './Component/contentList'
import Experienc from './Component/Experienc'
import Cinemeticcard from './Component/Cinemeticcard'
import Scard from './Component/Serieclist'
import GridCard from './Component/GridCard'
import { motion } from "motion/react"

import Footer from './Component/Footer'
import NaviGation from './Component/NaviGation'
// import MobileNavigation from './Component/MobileNav';
function App() {
  const transition = {
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <div>
      {/* <h1>Hellow </h1> */}
      {/* <Navbar/>  */}
      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Navbar />

      </motion.div>
      <NaviGation />




      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <SectionList />
      </motion.div>
      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Experienc />
      </motion.div>


      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      > <Cinemeticcard /></motion.div>



      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >    <Scard /></motion.div>


      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >  <GridCard /></motion.div>
      {/* <GridCard /> */}

      <motion.div animate={{ y: -0 }}
        transition={transition} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Footer />

      </motion.div>
      {/* <MobileNavigation /> */}



    </div>
  )
}

export default App
