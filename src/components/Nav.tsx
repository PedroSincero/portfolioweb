import React from "react";

const Nav = () => {
  let contentStyle={
    display: 'flex',
    height: '100%',
    width: '100%',
    color: '#FCCB67',
    backgroundColor: 'rgba(255, 99, 71, 1)',
    WebkitFilter: 'blur(0px) saturate(2)'
  }
  return (
    <nav style={contentStyle}>
      <ul>
        <a href="#home">Home</a>
        <a href="#home">Sobre</a>
        <a href="#home">Projetos</a>
        <a href="#home">Contato</a>
      </ul>
    </nav>
  )

}

export default Nav;