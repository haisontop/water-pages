import React from 'react'
interface props{
    title: string;
    subtitle: string;
    list: string[];
}

export default function SolutionCard({title, subtitle, list} : props) {
  return (
    <div className='grid md:grid-cols-1fr-2fr md:gap-10 mb-20'>
      <div>
         <h1 className='text-4xl mb-10 md:mb-0'>{title}</h1>
      </div>
      <div>
        <h3 className='text-3xl font-bold leading-9'>{subtitle}</h3>
        <ul className='list-disc ml-5 mt-6 text-xl text-blue-gray'>
            {
                list.map(list => <li className='mt-4'>{list}</li>)
            }
        </ul>
      </div>
    </div>
  )
}
