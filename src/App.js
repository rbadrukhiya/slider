import logo from './logo.svg';
import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AutoLayoutVariableExample from './bootstrap';

function App() {
  const opt = {
    responsive:{
      0: {
          items: 1,
      },
      450: {
          items: 2,
      },
      600: {
          items: 3,
      },
      1000: {
          items: 1,
      },
  },
  }
  return (
    <div className="App">
      {/* <AutoLayoutVariableExample/> */}
      <OwlCarousel className='owl-theme' {...opt} loop margin={10} nav dots={false} autoplay  autoplayTimeout={2000} animateIn={'animate__bounceInDown'}  animateOut={'animate__bounceOutDown'}>
    <div class='item'>
      <img src={require('./img/hotel1.jpg')} height='500px'/>
    </div>
    <div class='item'>
      <img src={require('./img/hotel2.jpg')} height='500px'/>
    </div>
    <div class='item'>
      <img src={require('./img/hotel3.jpg')} height='500px'/>
    </div>
    <div class='item'>
      <img src={require('./img/one-only-the-palm-3840x2160-dubai-best-hotels-tourism-travel-resort-4601.jpg')} height='500px'/>
    </div>
    <div class='item'>
      <img src={require('./img/sunrise.jpg')} height='500px'/>
    </div>
   
</OwlCarousel>
    </div>
  );
}

export default App;
