import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Video from './components/Video'
import Images from './components/Images'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-full w-full text-white">
      <Navbar />
      <Landing />
      <Work />
      <Video />
      <Images />
      <Footer />
    </div>
  )
}

export default App



