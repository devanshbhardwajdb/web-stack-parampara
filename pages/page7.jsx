import React from 'react'
import { CgComponents } from "react-icons/cg";


const Page7 = () => {
    return (
        <div className='px-[8vw] flex  justify-center gap-8 h-[70vh] pb-16  '>


            <div className='grid grid-rows-2 grid-flow-col w-1/2'>
                <div className='flex flex-col items-center gap-2 border border-gray-400 p-5 '>
                    <CgComponents className='text-lg border border-gray-500 rounded-sm ' />
                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>Components</h4>
                    <h4 className='text-[1.5vw] text-center font-bold text-black  '>5.5 million</h4>
                </div>
                <div className='flex flex-col items-center gap-2 border border-gray-400 p-5 '>
                    <CgComponents className='text-lg border border-gray-500 rounded-sm ' />
                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>Components</h4>
                    <h4 className='text-[1.5vw] text-center font-bold text-black  '>5.5 million</h4>
                </div>
                <div className='flex flex-col items-center gap-2 border border-gray-400 p-5 '>
                    <CgComponents className='text-lg border border-gray-500 rounded-sm ' />
                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>Components</h4>
                    <h4 className='text-[1.5vw] text-center font-bold text-black  '>5.5 million</h4>
                </div>
                <div className='flex flex-col items-center gap-2 border border-gray-400 p-5 '>
                    <CgComponents className='text-lg border border-gray-500 rounded-sm ' />
                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>Components</h4>
                    <h4 className='text-[1.5vw] text-center font-bold text-black  '>5.5 million</h4>
                </div>

            </div>
            <div className='flex flex-col items-start justify-start gap-2'>

                <h4 className='text-[1vw]  font-bold text-gray-500  '>TAGLINE FEATURE</h4>
                <h4 className='text-[1.5vw]  font-bold text-black  '>Result in Numbers</h4>
                <h4 className='text-[0.8vw]  font-medium text-gray-700 w-2/3 '>Use this text to describe your product in numbers and achievements.</h4>

                <button className='border border-1 border-gray-600  rounded-lg p-2 text-[0.8vw] text-black  mt-2   '>Learn More</button>



            </div>
        </div>
    )
}

export default Page7