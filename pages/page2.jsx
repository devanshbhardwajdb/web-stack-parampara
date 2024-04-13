import React from 'react'

const Page2 = () => {
    return (
        <div className='flex justify-center  px-[8vw] gap-4 py-[6vw]'>


            <div className='font-roboto  flex gap-1 justify-center flex-col items-center w-1/2  px-16 text-center '>
            <h4 className='text-[0.8vw] font-medium underline '>LEGWEAR</h4>
                <h4 className='text-2xl font-semibold underline '>COMPRESSION TECHNOLOGY</h4>
                <h4 className='text-lg text-[#ED1C24] underline'>Super power, legwear</h4>
                <p className='text-[0.8vw] 0 underline'>Graduated compression technology will guarantee your proper blood flow throughout your whole body while coping effectively with its normal wear, the effects of gravity and the sense of pain.</p>

                <button className='bg-[#ED1C24] text-[0.8vw] text-white px-[1vw] py-[0.5vw] mt-2 rounded-full underline'>SHOP THE PRODUCTS</button>

            </div>
            <div className='relative'>
                <img src={"/hero_img_2.avif"} alt="logo" className='w-[35vw] ' />
                <img src={"/red2.png"} alt="logo" className='w-[35vw] absolute -left-11 -top-7  z-[-1]' />

            </div>


        </div>
    )
}

export default Page2