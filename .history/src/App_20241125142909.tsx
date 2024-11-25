import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navigation from './pages/home/Navigation'
import NavigationMenu from './components/navigation-menu/NavigationMenu'
import Home from './pages/home/hero-image/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavigationMenu />
     <Home />
       
      
    </>
  )
}

export default App
