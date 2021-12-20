import React from 'react'
import * as S from './portfolioList'

export default function PortfolioList({title, active, setSelected, id}) {
  return (
    <S.PortfolioList className= {active && 'active' } onClick={() => setSelected(id)}>
      {title}
    </S.PortfolioList>
  )
}
