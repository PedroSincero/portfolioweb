import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testmonials from './components/testmonials/Testmonials';
import Contact from './components/contact/Contact';
import * as S from './styles/App';

function App() {
  return (
    <S.App>
      <Topbar />
      oi bobo
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testmonials />
        <Contact />
      </div>
    </S.App>
  );
}

export default App;
