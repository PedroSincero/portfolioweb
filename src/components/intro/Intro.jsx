import * as S from './intro';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import {TiArrowDownThick} from 'react-icons/ti';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [' Front-End', ' Back-End', ' Full-Stack' ],
    })
  },[]);

  return (
    <S.Intro id="intro">
      <S.Presentation >
        <div className="wrapper">
          <h2>Olá, me Chamo</h2>
          <h1>Pedro Henrique</h1>
          <h3>Sou Desenvolvedor<span ref={textRef}></span></h3>
        </div>
        <a href="#testmonials">
          <TiArrowDownThick />
        </a>
      </S.Presentation>
    </S.Intro>
  )
}
