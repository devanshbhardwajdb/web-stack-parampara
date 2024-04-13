import React from 'react'

const Page6 = () => {
    return (
        <div className='h-[60vh] flex flex-col gap-10  py-10 bg-white z-10'>
            <h4 className='text-[1.5vw] font-bold text-center  '>Testimonials</h4>

            <div className='flex justify-center gap-5'>

                <div className='w-[20vw] flex flex-col items-center gap-5  '>
                    <img src={"/user1.png"} alt="logo" className='w-12 ' />
                    <img src={"/Rating.png"} alt="logo" className='w-20 ' />

                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>Frames Design System was worth fortune to my team. definitely worth the investment.</h4>
                    <h4 className='text-[1vw] font-semibold text-black  '>John Din</h4>
                </div>
                <div className='w-[20vw] flex flex-col items-center gap-5  '>
                    <img src={"/user2.png"} alt="logo" className='w-12 ' />
                    <img src={"/Rating.png"} alt="logo" className='w-20 ' />

                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>Your design system is truly upstanding and is behind its product 100%. I will recommend you to my colleagues.</h4>
                    <h4 className='text-[1vw] font-semibold text-black  '>Dio Brando</h4>
                </div>
                <div className='w-[20vw] flex flex-col items-center gap-5  '>
                    <img src={"/user3.png"} alt="logo" className='w-12 ' />
                    <img src={"/Rating.png"} alt="logo" className='w-20 ' />

                    <h4 className='text-[1.1vw] text-center font-semibold text-gray-600  '>After using Frames UI Kit my business skyrocketed! I just can't get enough of this design system.</h4>
                    <h4 className='text-[1vw] font-semibold text-black  '>John Pliskin</h4>
                </div>
            </div>




        </div>
    )
}

export default Page6