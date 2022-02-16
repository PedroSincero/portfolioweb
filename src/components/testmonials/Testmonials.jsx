// import React from 'react'
import pedroFoto from '../../fotos/pedro-foto-recorte.png';
import * as S from './testmonials'

export default function Testmonials() {
  return (
    <S.Testmonials id="testmonials">
      <h1>Sobre</h1>
      <S.AboutMe>
        <S.Left>
          <img src={pedroFoto} alt="Pedro Imagem" />
        </S.Left>
        <S.Right>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus turpis id fringilla vehicula. In hac habitasse platea dictumst. Sed sit amet purus at ex laoreet feugiat non quis ex. Donec mauris urna, lobortis eu urna non, iaculis tempor erat. Nam consequat metus vel libero efficitur congue. Cras nisi ante, sodales quis massa vitae, vestibulum eleifend eros. Nullam consectetur scelerisque sapien non mollis. Integer vestibulum magna nisl. Maecenas facilisis tortor arcu. Vivamus commodo, purus eu viverra facilisis, nisl lacus mollis nibh, vel imperdiet justo dolor eget dolor. Nullam dictum pharetra lectus, ut vestibulum arcu hendrerit ut. Vivamus libero leo, malesuada non euismod eu, porttitor eget libero. Integer mollis porta sagittis. Nunc lacinia eget justo nec luctus. Praesent vestibulum turpis sed libero mattis vehicula.
          </p>
        </S.Right>
      </S.AboutMe>
    </S.Testmonials>
  )
}
