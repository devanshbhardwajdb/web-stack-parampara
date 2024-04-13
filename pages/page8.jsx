import React from 'react'

const Page8 = () => {
    return (
        <div className='px-[8vw] flex  justify-center gap-8 h-[70vh]  pt-10 '>



            <div className='flex flex-col items-start justify-start gap-2 w-1/2'>


                <h4 className='text-[1.8vw]  font-bold text-black  '>Discover your Next Favourite!</h4>
                <h4 className='text-[1 vw]  font-medium text-gray-700 w-2/3 '>Explore a world of quality products across multiple categories.</h4>

                <button className=' bg-[#2463EB] font-semibold text-white   rounded-lg p-2 text-[0.8vw]   mt-2   '>Shop Now</button>

                <div className='     flex flex-col items-start w-full gap-5  border border-gray-400 rounded-md p-3 '>

                    <div className='flex gap-2'>

                        <img src={"/Rating.png"} alt="logo" className='w- ' />
                        <h4 className='text-[1vw] font-semibold text-black  '>5.0</h4>

                    </div>

                    <h4 className='text-[1.1vw]  font-semibold text-gray-600  '>Absolutely love the range and quality!</h4>

                    <div className='flex items-center gap-2'>
                    <img src={"/user1.png"} alt="logo" className='w-8 ' />

                    <h4 className='text-[1vw] font-semibold text-black  '>Dio Brando</h4>
                    </div>
                </div>



            </div>


            <div className=''>

                <img src={"/img2.png"} alt="logo" className='w-[30vw] ' />

            </div>
        </div>
    )
}

export default Page8