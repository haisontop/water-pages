import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Body from '../component/about/Body'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'

const About: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className='bg-fill pb-10'>
          <Navigation />
          <h1 className='lg:px-120px text-4xl font-bold text-primary mt-20'>About</h1>
        </div>
        <Body />
      </Layout>
    </div>
  )
}

export default About

