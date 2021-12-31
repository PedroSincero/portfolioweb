import * as S from './menu';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <S.Menu className={ menuOpen && "active"}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Sobre</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects">Projetos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </S.Menu>
  )
}
