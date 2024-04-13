import React from 'react'

const Page3 = () => {
  return (
    <div className='flex justify-center  px-[8vw] gap-4 py-[6vw]'>

            <div className='relative'>
                <img src={"/hero_img_3.avif"} alt="logo" className='w-[35vw] ' />
                <img src={"/red1.png"} alt="logo" className='w-[35vw] absolute -left-11 -top-7  z-[-1]' />

            </div>
            <div className='font-roboto  flex gap-1 justify-center flex-col items-center w-1/2 px-16 text-center '>
                <h4 className='text-[0.8vw] font-medium underline '>ANATOMICAL & DEODORIZING COMFORT INSOLES</h4>
                <h4 className='text-2xl font-semibold underline '>DAYS</h4>
                <h4 className='text-lg text-[#ED1C24] underline'>Fresh & Comfy</h4>
                <p className='text-[0.8vw] 0 underline'>This is a range of products that was created to make us walk, run, dance, move, feel, live better. All day. Everyday.</p>

                <button className='bg-[#ED1C24] text-[0.8vw] text-white px-[1vw] py-[0.5vw] mt-2 rounded-full underline'>SHOP THE PRODUCTS</button>

            </div>


        </div>
  )
}

export default Page3