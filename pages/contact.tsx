import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'

const Contact: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className='bg-fill pb-36'>
          <Navigation />
          <div className='container mx-auto lg:max-w-container mt-91px px-5 md:px-0'>
            <h1 className='text-4xl font-bold text-primary'>Contact</h1>
          </div>
        </div>
        <div className='pt-20 bg-white -mt-20 rounded-large  px-5 md:px-0'>
          <div className='grid lg:grid-cols-2 gap-20 container mx-auto lg:max-w-container'>
            <div>
              <img src="/images/logo_2.png" alt="" width="" />
              <div className='mt-56.59px'>
                <h3 className='font-bold text-2xl text-primary'>Email</h3>
                <p className='mt-3 text-third font-light'>liquidity@waterfort.io</p>
              </div>
            </div>
            <div>
              <form>
                <div>
                  <label>
                    <span className='text-seccondery'>Name</span><br />
                    <input type="text" placeholder='Input your name' className='border-2 w-full rounded-sm outline-none px-3 mt-1 py-2' />
                  </label>
                </div>
                <div className='mt-7'>
                  <label>
                    <span className='text-seccondery'>Email</span><br />
                    <input type="email" placeholder='Input your email' className='border-2 w-full rounded-sm outline-none px-3 mt-1 py-2' />
                  </label>
                </div>
                <div className='mt-7'>
                  <label>
                    <span className='text-seccondery'>Phone</span><br />
                    <div className='flex border-2 rounded-sm px-2'>
                      <select className='outline-none text-third font-semibold'>
                        <option value="+880">880</option>
                        <option value="+996">996</option>
                      </select>
                      <input type="text" placeholder='Input your phone number' className='w-full rounded-sm outline-none px-3 mt-1 py-2 ml-3' />
                    </div>
                  </label>
                </div>
                <div className='mt-7'>
                  <label>
                    <span className='text-seccondery'>Company</span><br />
                    <input type="text" placeholder='Input your company' className='border-2 w-full rounded-sm outline-none px-3 mt-1 py-2' />
                  </label>
                </div>
                <div className='mt-7'>
                  <label>
                    <span className='text-seccondery'>Telegram name</span><br />
                    <input type="text" placeholder='Input your Telegram name' className='border-2 w-full rounded-sm outline-none px-3 mt-1 py-2' />
                  </label>
                </div>
                <div className='mt-7'>
                  <label>
                    <span className='text-seccondery'>Country</span><br />
                    <select className='outline-none text-third w-full mt-1 px-3 border-2 py-2 rounded-sm'>
                      <option>Select yout country</option>
                      <option value="+880">Bangladesh</option>
                      <option value="+996">China</option>
                    </select>
                  </label>
                </div>
                <div className='mt-7 text-primary'>
                  <label>
                    <span className='text-seccondery'>I’m Interested in</span><br />
                    <input type="checkbox" className='mt-5' value="OTC and Block Trading" />
                    <span className='ml-3'>OTC and Block Trading</span><br />
                    <input type="checkbox" className='mt-3' value="Order Book Market Making" />
                    <span className='ml-3'>Order Book Market Making</span><br />
                    <input type="checkbox" className='mt-3' value='Algorithmic Execution Orders' />
                    <span className='ml-3'>Algorithmic Execution Orders</span><br />
                    <input type="checkbox" className='mt-3' value="Others" />
                    <span className='ml-3'>Others</span><br />
                  </label>
                </div>
                <div className='mt-7'>
                  <label>
                    <span className='text-seccondery'>Message</span><br />
                    <textarea placeholder='Input your message' className='border-2 h-40 w-full rounded-sm outline-none px-3 mt-1 py-2' />
                  </label>
                </div>
                <button className='button text-white px-7 py-3 mt-7 rounded-md'>submit</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact

