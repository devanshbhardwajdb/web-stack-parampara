import React from 'react'

const Page1 = () => {
    return (
        <div className='flex justify-center  px-[8vw] gap-4 pt-[10vw]'>

            <div className='relative'>
                <img src={"/hero_img_1.avif"} alt="logo" className='w-[35vw] ' />
                <img src={"/red1.png"} alt="logo" className='w-[35vw] absolute -left-11 -top-7  z-[-1]' />

            </div>
            <div className='font-roboto  flex gap-1 justify-top flex-col items-center w-1/2  px-16 text-center '>
                <h4 className='text-sm underline '>ΕΠΙΔΕΣΜΙΚΑ</h4>
                <h4 className='text-2xl font-semibold underline '>EMBRACE YOURSELF</h4>
                <h4 className='text-lg text-[#ED1C24] underline'>with comfort & style</h4>
                <p className='text-[0.8vw] 0 underline'>Explore your body's full potential and feel the transforming bracing effect. Christou1910 combines expertise with fashion, thus creating an imaginative collection of protective health accessories!</p>

                <button className='bg-[#ED1C24] text-[0.8vw] text-white px-[1vw] py-[0.5vw] mt-2 rounded-full underline'>SHOP THE PRODUCTS</button>

            </div>


        </div>
    )
}

export default Page1