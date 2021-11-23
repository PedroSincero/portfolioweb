import React from 'react';
import ReactDOM from 'react-dom';
// import '../styles/index';
import App from './App';
import reportWebVitals from './TypeScript/reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <ParallaxProvider>
  <App />
</ParallaxProvider>,
  document.getElementById('root')
);

reportWebVitals();
