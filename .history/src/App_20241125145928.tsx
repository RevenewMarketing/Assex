import { useState } from 'react'

import './App.css'
// import Navigation from './pages/home/Navigation'
import NavigationMenu from './components/navigation-menu/NavigationMenu'

import { BrowserRouter, Route, Routes } from 'react-router';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavigationMenu />
    <Routes>
      <Route path="/demo-trading-accounts" element={<div>A route</div>} />
      {/* Define other routes */}
    </Routes>
  </BrowserRouter>
       
      
    </>
  )
}

export default App