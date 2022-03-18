import React from 'react';
import Navigation from '../Navigation';

const Banner = () => {
    return (
        <div className='banner h-screen'>
            <Navigation />
            <div className='lg:px-120px'>
                <h1 className='m-auto text-5xl text-center font-bold text-primary leading-3.5rem mt-151.5px'>The leading liquidity and execution solutions provider in crypto markets</h1>
                <p className='text-xl text-center text-seccondery mt-6'>Our expertise has been powering liquidity on the world’s largest cryptocurrency exchanges and building efficient cryptocurrency markets since 2018. </p>
            </div>
        </div>
    );
};

export default Banner;