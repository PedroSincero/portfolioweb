import * as S from './portfolio'
import List from './List';
import PortfolioList from '../portfolioList/PortfolioList'
import { useEffect, useState } from 'react';
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {

    switch(selected){
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])

  return (
    <S.Portfolio id="portfolio">
      <h1>Projetos</h1>
      <ul>
          {List.map((item) => (
            <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
          ))}
      </ul>
      <S.Container>
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </S.Container>
    </S.Portfolio>
  )
}
