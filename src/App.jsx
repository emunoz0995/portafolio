import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import video from './assets/background.mp4';
import About from './components/About';
import Skills from './components/Skills';
import Portafolio from './components/Portafolio';
import Contactme from './components/Contactme';

function App() {

  return (
<div className="App">


    <HashRouter>
      <div className='main'>
        <video src={video} autoPlay loop muted />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/contact' element={<Contactme />}/>
      </Routes>
    </HashRouter>
    </div>





  )
}

export default App
