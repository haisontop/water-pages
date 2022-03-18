import React from 'react';
import { about } from "../../constant/ABOUT_MOCK_DATA.js"
const Body = () => {
    return (
        <div className='lg:px-120px'>
            <div className='text-2xl text-primary py-20 bg-white'>
                <p>Founded in 2018, WaterFort is a leading liquidity and execution solutions provider in crypto markets. Built around our proprietary models, we have grown our footprint amongst global financial institutions and the largest exchanges globally, offering our liquidity, market making and algorithmic execution trading solutions. </p>
            </div>
            <div>
                <h1 className='text-5xl text-primary font-bold'>Our Clients</h1>
                <div className='mt-16'>
                    {
                        about.map(about => <div className='mt-10'>
                            <h2 className='text-2xl font-bold text-primary'>{about.title}</h2>
                            <p className='mt-5 text-third'>{about.discription}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Body;