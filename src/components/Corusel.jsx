// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'antd';
import banner from "../assets/images/bannerrr.png"
const contentStyle = {
  height:"auto",
  color: 'red',
  lineHeight: '355px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel effect="fade" arrows={true} autoplay={true} infinite={true} dots={true}>
    <div className=''>
      <img src={banner} alt="" />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;