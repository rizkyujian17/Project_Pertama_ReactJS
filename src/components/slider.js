import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '480px',
  color: '#fff',
  lineHeight: '480px',
  textAlign: 'center',
  background: '#364d79',
  backgroundSize: 'cover',
  backgroundImage: 'url("https://images.unsplash.com/photo-1682251167570-db70af09f7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
};
const HomeSlider = () => (
  <Carousel autoplay effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
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
export default HomeSlider;