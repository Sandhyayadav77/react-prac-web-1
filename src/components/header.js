import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Header() {
    const[toggle, setToggle]= useState(false);
    return (
        <>
            <div className='bg-[#2699fb] p-4 '>
                <div className='max-w-[1240px] mx-auto flex justify-between items-center mt-3'>
                    <div className="text-3xl md:text-5xl ml-6 font-bold">
                        Sandhya
                    </div>
                    {
                        toggle ? 
                        <AiOutlineClose onClick={()=> setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/>:
                        <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white  block md:hidden
                     text-2xl'/>

                    }
                    

                    <ul className=' hidden md:flex space-x-4 text-white '>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Company</li>
                        <li className='cursor-pointer'>Resources</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                    {/* responsive menu */}

                    <ul className={` duration-300 md:hidden fixed left-[-100%] h-screen bg-black text-white top-[79px] w-full ${toggle? 'left-[0]': 'left-[-100%]'}`}>
                        <li className='py-4 pl-4 cursor-pointer' >Home</li>
                        <li className='py-4 pl-4 cursor-pointer'>Company</li>
                        <li className='py-4 pl-4 cursor-pointer'>Resources</li>
                        <li className='py-4 pl-4 cursor-pointer'>About</li>
                        <li className='py-4 pl-4 cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header;