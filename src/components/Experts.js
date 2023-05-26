import React from 'react'
import laptop from '../assets/images/laptop.png'

export default function Experts() {
    return (
        <>
            <div className='max-w-[1240px] flex flex-col justify-center items-center my-4 mx-auto md:grid grid-cols-2'>
                <div className='col-span-1 w-[80%]'>
                    <img src={laptop} alt="" />
                </div>
                <div className='col-span-1 flex  flex-col  items-center md:items-start justify-center px-6'>
                    <h1 className='text-[#00df9a] font-bold mt-6 md:my-2'>LEARN FROM EXPERTS</h1>
                    <p className='mx-5 text-sm  md:text-2xl text-center md:text-left md:mx-0 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos quaerat necessitatibus ea sequi blanditiis iure doloribus nisi consequuntur, esse natus aliquam asperiores totam debitis quidem, fuga iusto fugit porro eos rerum est dolor deserunt.
                    </p>
                    <button className='bg-black text-white px-5 py-3 my-3
                    rounded-md '>Get Started</button>
                </div>
            </div>
        </>
    )
}
