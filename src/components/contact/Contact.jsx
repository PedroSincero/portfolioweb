// import React from 'react';
import * as S from './contact';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

export default function Contact() {
  return (
    <S.Contact id="contact">
      <h1 className="cu">Bora Trabalhar Juntos</h1>
      <p>Me Encontre no</p>
      <S.Links>
        <a href="https://www.linkedin.com/in/pedro-henrique-pires-do-nascimento/"  className="contact-details" target="_blank" rel="noreferrer">
          <BsLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a href="https://github.com/PedroSincero"  className="contact-details" target="_blank" rel="noreferrer">
          <FaGithubSquare className="contact-icon"/>
          Github
        </a>
        <a href="mailto:dckpedro@gmail.com"  className="contact-details">
          <SiGmail className="contact-icon"/>
          Gmail
        </a>
      </S.Links>
    </S.Contact>
  )
}
