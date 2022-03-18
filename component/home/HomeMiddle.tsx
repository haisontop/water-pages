import Link from 'next/link';
import React from 'react';
import { service } from '../../constant/SERVICE_MOCK_DATA'
const HomeMiddle = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 lg:px-120px py-20 -mt-16 rounded-large bg-white'>
                {
                    service.map(service =>
                        <div className='text-center'>
                            <img src={service.img} alt="" className='mx-auto' />
                            <h2 className='text-2xl font-bold mt-27px text-primary'>{service.name}</h2>
                            <Link href={service.link}>
                                <button className='border-2 flex px-6 py-2 mx-auto rounded-md mt-10 border-button text-button'>Find Out More<img src="/images/icon/arrow.png" alt="" className='my-auto ml-3' /></button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeMiddle;