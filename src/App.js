import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  const [introPos, setIntroPos] = useState([0,0])
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(()=>{
    document.addEventListener('scroll',e=>{
      let scrolled = document.scrollingElement.scrollTop;
      setScrollPos(scrolled)
    })
  },[])

  return (
    <div id='app'>
      <Intro setIntroPos={setIntroPos} introPos={introPos} scrollPos={scrollPos} />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <button onClick={()=>window.scroll(0,introPos)}>SetScrollPos to 0</button>
    </div>
  );
}

export default App;
