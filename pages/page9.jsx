import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Page9 = () => {
    return (
        <form className='flex  flex-col  h-[90vh]  py-[15vh] items-center'>
            <h4 className='text-[1.5vw] font-bold text-center  '>Sign Up</h4>
            <h4 className='text-[1.2vw] font-semibold text-gray-600 text-center  '>Let's Get Started</h4>

            <div className='flex flex-col gap-2 items-center w-1/2'>
                <input type='email' placeholder='Enter your email' className='border border-gray-500 rounded-md text-[0.8vw] text-white px-[1vw] py-[0.5vw] mt-2  w-full '

                />
                <button type='submit' className=' bg-[#2463EB]  border-gray-600  rounded-lg p-2 text-[1vw] text-white  mt-2  w-full '>Get Started</button>
                <h4 className='text-[1vw] bg-slate-300 w-5  font-semibold text-black mt-4 text-center  '>or</h4>
                <button type='submit' className='flex justify-center items-center gap-2 border  border-gray-600  rounded-lg p-2 text-[1vw] font-bold mt-2  w-full text-black'><FaGoogle />
                    Sign in with Google</button>
                <button type='submit' className='flex justify-center items-center gap-2 border  border-gray-600  rounded-lg p-2 text-[1vw] font-bold mt-2  w-full text-black'><FaFacebook />

                    Sign in with Facebook</button>
                <button type='submit' className='flex justify-center items-center gap-2 border  border-gray-600  rounded-lg p-2 text-[1vw] font-bold mt-2  w-full text-black'><FaXTwitter />

                    Sign in with X</button>



            </div>





        </form>
    )
}

export default Page9