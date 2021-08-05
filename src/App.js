
import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(()=>{
    imgLoaded ? document.body.style.overflowY = 'visible' : document.body.style.overflowY = 'hidden'
  },[imgLoaded])

  return (
    <div id='app' >
      <Intro imgLoaded={imgLoaded} setImgLoaded={setImgLoaded} />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
