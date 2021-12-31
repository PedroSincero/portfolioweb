// import React from 'react';
import * as S from './contact';

export default function Contact() {
  return (
    <S.Contact id="contact">
      <S.Left>
        <img src="https://www.acasadocogumelo.com/wp-content/uploads/2020/12/Captura-de-Tela-2020-12-03-a%CC%80s-12.53.55.png" alt="omori"/>
      </S.Left>

      <S.Right>
        <h2>Contato</h2>
       <form >
            <input type="text" placeholder="Email" />
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
        </form> 
    
      </S.Right>
    </S.Contact>
  )
}
