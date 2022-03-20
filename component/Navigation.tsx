import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className='flex space-x-50.95px container mx-auto max-w-container py-6'>
                <div>
                    <Link href='/'>
                        <img src="/images/Logo.png" alt="" width="147.05px" />
                    </Link>
                </div>
                <div className='flex text-seccondery font-semibold'>
                    <div className='mr-8 my-auto'>
                        <Link href="/about">About</Link>
                    </div>
                    <div className='mr-8 my-auto'>
                        <Link href="/solutions/OTC and Block Trading">Solutions</Link>
                    </div>
                    <div className='mr-8 my-auto'>
                        <Link href="/contact">contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;