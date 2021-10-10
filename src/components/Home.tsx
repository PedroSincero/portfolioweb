import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "./Parallaximg";
// import image1 from "./images/img1.jpg";
// import image2 from "./images/img2.jpg";
// import image3 from "./images/img3.jpg";
import gif from "../images/giphy.gif";
// import gif2 from "./images/giphy2.gif";
// import gif3 from "./images/giphy3.gif";

const Home = () => {
  return (
    <ParallaxProvider>
      <Parallaximg imgsrc={gif} height="500px" opacity=".5" >
        <div style={{position: 'absolute'}}>
          <h1>Olá, eu sou Pedro Henrique</h1>
          <h1>Eu sou Full-Stack web Developer</h1>
        </div>
      </Parallaximg>
    </ParallaxProvider>
  );
};

export default Home;
