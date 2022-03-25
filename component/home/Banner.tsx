import React from 'react'
import Navigation from '../Navigation'

const Banner = () => {
  return (
    <div className="banner pb-156.5px">
      <Navigation />
      <div className="container mx-auto px-5 md:px-0 lg:max-w-container">
        <h1 className="m-auto mt-40 text-center text-3xl font-bold text-primary md:mt-151.5px md:text-5xl md:leading-3.5rem ">
          The leading liquidity and execution solutions provider in crypto
          markets
        </h1>
        <p className="mt-6 text-center text-sm text-seccondery md:text-xl">
          At WaterFort, we have been powering crypto liquidity across
          institutions and platforms and building efficient cryptocurrency
          markets since 2018.{' '}
        </p>
      </div>
    </div>
  )
}

export default Banner
