
import './App.css'
// import Navigation from './pages/home/Navigation'
import NavigationMenu from './components/navigation-menu/NavigationMenu'

import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import Footer from './components/footer-section/Footer';
import About from './pages/about/About';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavigationMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Define other routes */}
    </Routes>
    <Footer />
  </BrowserRouter>
       
      
    </>
  )
}

export default App
