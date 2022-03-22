import Link from 'next/link';
import React, { useState } from 'react';

const Navigation = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='md:flex space-x-50.95px container mx-auto lg:max-w-container py-6  px-5 md:px-0 hidden'>
                <div>
                    <Link href='/'>
                        <img src="/images/Logo.png" alt="" width="147.05px" />
                    </Link>
                </div>
                <div className='md:flex text-seccondery font-semibold'>
                    <div className='mr-8 my-auto'>
                        <Link href="/about">About</Link>
                    </div>
                    <div className='mr-8 my-auto'>
                        <Link href="/solutions/OTC and Block Trading">Solutions</Link>
                    </div>
                    <div className='mr-8 my-auto'>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
            {/* responsive navigation */}
            <div className='py-6 mx-5 md:hidden flex justify-between'>
                <div>
                    <Link href='/'>
                        <img src="/images/Logo.png" alt="" width="147.05px" />
                    </Link>
                </div>
                <button onClick={() => setOpen(!open)}>
                    <img src="images/icon/menu.png" width={40} alt="" />
                </button>
            </div>
            {
                open &&
                <div className='bg-fill fixed h-screen w-screen text-seccondery top-0 z-50'>
                    <div className='text-seccondery font-semibold text-center text-3xl mt-72'>
                        <button onClick={() => setOpen(!open)} className='absolute top-5 right-5'>
                            <img src='images/icon/cross.png' alt="" width={35} className="rotate-5" />
                        </button>
                        <div onClick={() => setOpen(!open)}>
                            <Link href="/">Home</Link>
                        </div>
                        <div onClick={() => setOpen(!open)} className='mt-5'>
                            <Link href="/about">About</Link>
                        </div>
                        <div onClick={() => setOpen(!open)} className='mt-5'>
                            <Link href="/solutions">Solutions</Link>
                        </div>
                        <div onClick={() => setOpen(!open)} className='mt-5'>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navigation;