import * as S from './topbar';
import {Person, Mail} from '@material-ui/icons'
import { GiStarSwirl } from 'react-icons/gi';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <S.Topbar className={ menuOpen && "active"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><GiStarSwirl /></a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+55 11 982519612</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>dckpedro@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </S.Topbar>
  )
}
