import React from 'react';
const SolutionMiddle = () => {
    return (
        <div className='lg:px-120px -mt-36 pt-20 bg-white rounded-large'>
            {/* OTC And Block Trading */}
            <div className='flex gap-6'>
                <div>
                    <div className='lg:mt-10'>
                        <h1 className='text-4xl font-bold text-primary'>OTC and Block Trading</h1>
                        <h2 className='mt-10 text-2xl font-bold'>Get access to competitive quotes across the widest range of cryptocurrencies, with fast response times and instantaneous execution.</h2>
                        <div className='mt-6'>
                            <ul className='list-disc text-third ml-4'>
                                <li>Fast automated quote times with instantaneous execution</li>
                                <li>Direct and synthetic cross currency pairs (e.g. AXS/XRP, SOL/AXS, BNB/DOGE etc.)</li>
                                <li>Support for API connectivity for pricing and execution</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/criypto_image.jpg" alt="" width="900px" />
                </div>
            </div>
            {/* Order Book Market Making */}
            <div className='flex gap-10 mt-24'>
                <div>
                    <img src="/images/device.jpg" alt="" width="900px" />
                </div>
                <div>
                    <div className=''>
                        <h1 className='text-4xl font-bold text-primary'>Order Book Market Making</h1>
                        <h2 className='mt-10 text-2xl font-bold'>Risk management models provide reliable deep liquidity 24/7 and competitive spreads throughout all market conditions. </h2>
                        <div className='mt-6'>
                            <ul className='list-disc text-third ml-4'>
                                <li>24/7 liquidity </li>
                                <li>Competitive and consistent liquidity and spreads in all market conditions</li>
                                <li>Support for 150 cryptocurrencies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Algorithmic Execution Orders */}
            <div className='flex gap-10 mt-24'>
                <div>
                    <div className='lg:mt-5'>
                        <h1 className='text-4xl font-bold text-primary'>Algorithmic Execution Orders</h1>
                        <h2 className='mt-10 text-2xl font-bold'>Optimize execution, reduce execution cost and market impact with our intelligent and customizable algorithmic execution solutions.  </h2>
                        <div className='mt-6'>
                            <ul className='list-disc text-third ml-4'>
                                <li>Agency execution algos intelligently respond to market conditions to optimize execution and maximize liquidity</li>
                                <li>Achieve best execution and transparent reporting  with detailed insights on order fills, market pricing and Transaction Cost Analysis (TCA) tools</li>
                                <li>Global institutional expertise in execution solutions for best-in-class institutional client service and real-time technical support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/brain.jpg" alt="" width="900px" />
                </div>
            </div>
        </div>
    );
};

export default SolutionMiddle;