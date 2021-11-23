import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "./Parallaximg";

import gato from "../images/gato2.jpg";

const Home = () => {
  return (
    <ParallaxProvider>
      <Parallaximg imgsrc={gato} height="500px" opacity=".5" >
        <div style={{position: 'absolute'}}>
          <h1>(NOME)</h1>
          <h1>(Developer)</h1>
        <button>Veja o Meu Trabalho</button>
        </div>
      </Parallaximg>
    </ParallaxProvider>
  );
};

export default Home;
