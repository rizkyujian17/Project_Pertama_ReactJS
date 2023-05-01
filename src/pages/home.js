import React from 'react';
import HomeSlider from '../components/slider';
import HomeCard from '../components/homecard';
import HomeGalery from '../components/homegalery';
import { Content } from 'antd/es/layout/layout';
const Home = () => {
    return (
        <>

        <HomeSlider/>
        <Content/>
        <HomeCard/>
        <HomeGalery/>
        <Content/>
        </>
    );
}

export default Home;
