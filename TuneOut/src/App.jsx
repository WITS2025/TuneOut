<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Playlists from './pages/Playlists';
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//add when add these pages:
//import Header from './Header';
//import About from './pages/About';
//import Contact from './pages/Contact';
//add to routes:
  //<Header />
//<Route path="/about" element={<About />} />
//<Route path="/contact" element={<Contact />} />

>>>>>>> 1ebc70c5e2e5375e883e57d0b2dd726a5a1c7746

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <SiteHeader />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </div>
    </Router>
  );
=======
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
    </>
  )
>>>>>>> 1ebc70c5e2e5375e883e57d0b2dd726a5a1c7746
}

export default App;
