import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
    return (
        <>
            <div className='bg-[#2699fb] w-full py-[70px] '>
                <div className='max-w-[1240px] mx-auto py-[40px] md:my-[100px] text-center font-bold' >
                    <div className='text-2xl md:text-3xl'>Learn With us</div>
                    <h2 className='text-white font-bold text-4xl sm:text-5xl md:text-6xl py-3' >Grow with us </h2>
                    <div className='text-2xl md:text-4xl text-white '> Learn
                        <Typed className='pl-3'
                            strings={[' Web Development ', 'Digital Marketing ', 'Ethical Hacking']}
                            typeSpeed={100}
                            loop={true}
                            backSpeed={50}
                        />
                    </div>
                    <button className='bg-black text-white px-5 py-3 my-10
                    rounded-md '>Get Started</button>
                </div>

            </div>
        </>
    )
}