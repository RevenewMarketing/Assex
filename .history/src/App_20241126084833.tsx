import { useState } from 'react'

import './App.css'
// import Navigation from './pages/home/Navigation'
import NavigationMenu from './components/navigation-menu/NavigationMenu'

import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home/hero-image/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavigationMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Define other routes */}
    </Routes>
  </BrowserRouter>
       
      
    </>
  )
}

export default App
