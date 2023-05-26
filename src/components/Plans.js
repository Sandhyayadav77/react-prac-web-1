import React from 'react'
import PlanDetails from './PlanDetails'

export default function Plans() {
    const items = PlanDetails.map((item, i) => <div key={i} className=' flex flex-col justify-center items-center'>
    <h2 className='text-[20px] lg:text-3xl font-bold mt-6 lg:mt-12'>{item.job}</h2>
    <p className='font-bold text-[20px] md:text-[30px] py-2'>{item.price}</p>
    <p className='font-normal  text-sm md:text-base  md:font-medium py-2   text-center'>{item.line1}</p>
    <p className='font-normal text-sm md:text-base md:font-medium py-2 px-3 text-center'>{item.line2}</p>
    <p className='font-normal  text-sm md:text-base  md:font-medium py-2 text-center'>{item.line3}</p>
    <button className='bg-black text-white px-5 py-2 my-5
                    rounded-md '>Get Started</button>
</div>)
    return (
        <>
            <div className='py-[70px]'>
                <div className=' px-10 md:py-4 md:px-3 md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6'>
                    <div className=' rounded-md shadow-lg shadow-gray-300  mx-6 md:mx-5 my-10  md:my-5 max-h-[400px] hover:scale-105 duration-300 '>
                        {items[0]}
                    </div>
                    
                    <div className=' rounded-md shadow-lg shadow-gray-300 mx-6 md:mx-5 my-10  md:my-5  max-h-[400px]  hover:scale-105 duration-300'>{items[1]}</div>
                    <div className=' rounded-md shadow-lg shadow-gray-300 mx-6  md:mx-5 my-10  md:my-5 max-h-[400px]  hover:scale-105 duration-300'>
                        {items[2]}
                    </div>
                </div>
            </div>
        </>
    )
}
