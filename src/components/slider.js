import React from 'react';
import { Carousel } from 'antd';
const contentStyle = [

  {
  name : "photo 1",
  height: '480px',
  color: '#fff',
  lineHeight: '480px',
  textAlign: 'center',
  background: '#364d79',
  backgroundSize: 'cover',
  backgroundImage: 'url("https://images.unsplash.com/photo-1682251167570-db70af09f7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
  },
  {
    name : "photo 2",
    height: '480px',
    color: '#fff',
    lineHeight: '480px',
    textAlign: 'center',
    background: '#364d79',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1682320426424-42e9417438c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80")',
  
  },
  {
    name : "photo 3",
    height: '480px',
    color: '#fff',
    lineHeight: '480px',
    textAlign: 'center',
    background: '#364d79',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://images.unsplash.com/photo-1682251167570-db70af09f7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
  
  },
  {
    name : "photo 4",
    height: '480px',
    color: '#fff',
    lineHeight: '480px',
    textAlign: 'center',
    background: '#364d79',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://images.unsplash.com/photo-1682364284611-b3201041f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")',
  
  }

]

const HomeSlider = () => (
  <Carousel autoplay effect="fade"  xs={{
    span: 22,
    offset: 0,
  }}
  lg={{
    span: 12,
    offset: 0,
  }}
  xl={{
    span: 12,
    offset: 0, 
  }} 
  style={{marginTop:'-16px'}}
  >
    {
      contentStyle.map((item) => (
      <>
        <h3 style={item}>{item.name}</h3>
      </>
       
      ))
    }
  
  </Carousel>
);
export default HomeSlider;