import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";






const Footer = () => {
    return (
        <div className='bg-black/90 h-[50vh] relative px-[8vw] flex justify-center font-roboto py-[6vh]'>

            <img src={"/logo.svg"} alt="logo" className='w-24 absolute -top-10 left-[45vw] ' />

            <div className='font-roboto text-white w-1/3 flex flex-col justify-between h-full '>

                <div>
                    <h4 className='text-[1.7vh] pb-2  '>NEWSLETTER AND SUBSCIRPTION</h4>
                    <h4 className='text-[1.5vh]   '>Subscribe to our Newsletter to be the first to learn about new
                        product releases, the most informative articles and global wellness
                        trends as well as unique offers. ❤️</h4>

                    <div className='relative '>
                        <input type='email' placeholder='Enter your email' className='bg-[#ED1C24] text-[0.8vw] text-white px-[1vw] py-[0.5vw] mt-2 rounded-full w-full '

                        />
                        {/* <FaLongArrowAltRight /> */}

                    </div>
                    <div className='flex justify-start items-center'>

                        <input id='checkbox' type='checkbox' placeholder='Enter your email' className='bg-[#ED1C24] text-[0.8vw] text-white px-[1vw] py-[0.5vw] mt-2 rounded-full  '

                        /><label htmlFor="checkbox" className='text-[0.8vw]'>I agree to the terms and conditions</label>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <img src={"/cc-visa.svg"} alt="logo" className='w-6   ' />
                    <img src={"/cc-discover.svg"} alt="logo" className='w-6   ' />
                    <img src={"/cc-diners-club.svg"} alt="logo" className='w-6   ' />
                    <img src={"/cc-amex.svg"} alt="logo" className='w-6   ' />

                </div>
                <h4 className='text-[1.5vh] text-gray-200   '>Web Stack Parampara © 2024</h4>



            </div>
            <div className='flex flex-col items-center justify-end gap-3  w-1/3 '>

                <div className='flex gap-2 items-end'>
                    <div className='flex flex-col items-center'>
                        <img src={"/elevate_logo.png"} alt="logo" className='w-20 bg-white px-4 py-2' />
                        <h4 className='text-[1.5vh] text-gray-200   '>Elevate Greece</h4>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={"/swiss_cert_logo.png"} alt="logo" className='w-20 bg-white px-4 py-2' />
                        <h4 className='text-[1.5vh] text-gray-200   '>ISO 13485:2016</h4>
                    </div>

                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-[1.5vh] text-gray-200   '>Rizariou 12, Chalandri, 15233, Athens, Greece</h4>
                        <img src={"/Banner_Psifiakos_logo.png"} alt="logo" className='w-60 bg-white px-4 py-2' />
                        <div className='flex gap-5 '>
                            <h4 className='text-[1.5vh] text-gray-200   '>Privacy Policy </h4>
                            <h4 className='text-[1.5vh] text-gray-200   '>Terms & Conditions</h4>

                        </div>
                    </div>

                </div>



            </div>
            <div className='flex flex-col justify-between items-end w-1/3'>

                <div className='flex gap-2'>
                    <h4 className='text-[1.7vh] text-gray-200   '>SUPPORT</h4>
                    <h4 className='text-[1.7vh] text-gray-200   '>CONTACT</h4>

                </div>
                {/* <div className='flex text-[#FF0000] relative'>

                    <div className='flex  gap-2  border border-[#FF0000] rounded-full px-5 py-1 w-[20vw]'>
                        <div className='flex  border border-[#FF0000] rounded-full items-center absolute left-0 '>
                            <IoIosCall className='text-5xl   ' />

                        </div>
                        <div className='flex flex-col justify-end'>

                            <h4 className='text-[1.7vh] text-gray-200   '>GET IN TOUCH</h4>
                            <h4 className='text-[1.7vh] text-gray-200   '>+91 6396480269</h4>
                        </div>
                    </div>


                </div> */}
                <div className='flex text-white text-md items-center gap-4'>
                    <FaFacebookF />
                    <FaInstagram />
                    <RiYoutubeLine />




                </div>
                <div>
                    <h4 className='text-[1.5vh] text-gray-200   '>Developed by Devansh Bhardwaj</h4>
                </div>

            </div>

        </div>
    )
}

export default Footer