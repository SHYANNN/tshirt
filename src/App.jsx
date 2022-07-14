import React from 'react'
import Navbar from './components/navbar/Navbar'
import Create from './components/create/Create'
import Icons from './components/icons/Icon'
import Work from './components/work/Work'
import About from './components/about/About'
const App = () => {
  return (
    <>
        <Navbar/>
        <Create/>
        <Icons/>
        <Work/>
        <About/>
    </>
  )
}

export default App