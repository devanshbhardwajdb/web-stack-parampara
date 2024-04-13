import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";





const Navbar = () => {
    return (
        <nav className='bg-white h-[9vh] shadow-md flex justify-between items-center  font-roboto px-[14vw]  '>

            <div className="logo">
                <img src={"/logo_2.svg"} alt="logo" className='w-24' />
            </div>
            <div className='flex  gap-16'>
                <h4 className='text-[1.7vh] font-semibold  '>BRACES AND SUPPORTS</h4>
                <h4 className='text-[1.7vh] font-semibold '>FOOTCARE</h4>
                <h4 className='text-[1.7vh] font-semibold '>LEGWEAR</h4>
                <h4 className='text-[1.7vh] font-semibold '>DAYS INSOLES</h4>
                <h4 className='text-[1.7vh] font-semibold '>ABOUT US</h4>
            </div>
            <div className="flex gap-6 text-md font-bold">
                <h4 className='text-[1.7vh] font-semibold '>ASK THE EXPERTS</h4>
                <div className='flex gap-3'>
                    <FaSearch />
                    <IoLocationOutline />
                    <FaUserAlt />
                    <MdOutlineShoppingBag />

                </div>



            </div>
        </nav>
    )
}

export default Navbar