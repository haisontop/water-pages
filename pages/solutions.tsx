import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeBottom from '../component/home/HomeBottom'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'
import SolutionBottom from '../component/solution/SolutionBottom'
import SolutionMiddle from '../component/solution/SolutionMiddle'

const Solutions: NextPage = () => {
  const routes = useRouter()
  console.log(routes)
  return (
    <div className="">
      <Layout>
        <div className="bg-fill pb-36">
          <Navigation />
          <div className="container mx-auto mt-91px lg:max-w-container">
            <div>
              <h1 className="text-3xl font-bold text-primary">Solutions</h1>
              <p className="mt-4 text-xl text-seccondery">
                Whether you are a financial institution, OTC desk, corporate
                treasurer, prime broker, hedge fund, asset manager or high net
                worth individual, Waterfort offers customizable liquidity and
                trading solutions.
              </p>
            </div>
            <div className="mt-60px flex flex-wrap gap-10 text-xl text-seccondery">
              <div className="border-b-4 border-demo py-5">
                <Link href="#otc-blocking-trading">OTC and Block Trading</Link>
              </div>
              <div className="border-b-4 border-demo py-5">
                <Link href="#order-book">
                  Order Book Market Making
                </Link>
              </div>
              <div className="border-b-4 border-demo py-5">
                <Link href="#algorithmic">
                  Algorithmic Execution Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SolutionMiddle />
        <SolutionBottom />
      </Layout>
    </div>
  )
}

export default Solutions
