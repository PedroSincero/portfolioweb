import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Project from './components/project/Project';
// import Works from './components/works/Works';
import Testmonials from './components/testmonials/Testmonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import * as S from './styles/App';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <S.App>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Testmonials />
        <Project />
        {/* <Works /> */}
        <Contact />
      </div>
    </S.App>
  );
}

export default App;
