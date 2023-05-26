import React from 'react'

export default function NewsLetter() {
    return (
        <div className='bg-[#2699fb] w-full  p-4'>
            <div className='max-w-[1240px] mx-auto md:flex  justify-center items-center md:space-x-20'>
                <div className='  md:text-left '>
                    <h1 className='text-[24px] md:text-[35px] font-bold text-white'>Want ot learn to latest I.T skills ?</h1>
                    <p className='text-white'>Sign up to Our newsletter and stay up to date.</p>
                </div>
                <div className=' py-4  '>
                    <input className='py-3 px-2 rounded-md  text-slate-400' placeholder='Email' type="text" name="myEmail" id="email" />
                    <button className='bg-black text-white px-5 mx-2 md:mx-0 py-3 my-3
                    rounded-md '>Get Started</button>

                    <br />
                    <p className=' text-white tracking-tight'>We care about the protection of your data . Read Our <br />
                        Privacy Policy .</p>
                </div>
            </div>
        </div>
    )
}
