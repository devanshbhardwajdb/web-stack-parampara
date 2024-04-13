import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Hero = () => {
    return (

        // Main Hero Div
        <div className='  '>

            <div className='flex justify-center items-center gap-6 py-6 '>
                <div className="logo">
                    <img src={"/logo.svg"} alt="logo" className='w-24' />
                </div>
                <div className='flex flex-col gap-3 w-[65vw]'>


                    <div className='border-b border-gray-300 flex justify-center relative   pb-3'>
                        <h4 className='text-[1.5vh] font-semibold  text-red-500 '>Life Improving Products</h4>
                        <div className='flex gap-3  absolute right-0 '>
                            <FaSearch />
                            <IoLocationOutline />
                            <FaUserAlt />
                            <MdOutlineShoppingBag />

                        </div>

                    </div>

                    <div className='flex pl-5  gap-20 justify-start'>
                        <h4 className='text-[1.7vh] font-semibold  '>BRACES AND SUPPORTS</h4>
                        <h4 className='text-[1.7vh] font-semibold '>FOOTCARE</h4>
                        <h4 className='text-[1.7vh] font-semibold '>LEGWEAR</h4>
                        <h4 className='text-[1.7vh] font-semibold '>DAYS INSOLES</h4>
                        <h4 className='text-[1.7vh] font-semibold '>ABOUT US</h4>
                        <h4 className='text-[1.7vh] font-semibold '>ASK THE EXPERTS</h4>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero