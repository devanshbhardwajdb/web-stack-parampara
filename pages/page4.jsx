import React from 'react'

const PAGE4 = () => {
    return (
        <div className='flex justify-center gap-10 px-[8vw] h-[60vh] items-center z-[10] bg-gray-100 font-roboto'>

            <div className='flex flex-col gap-5'>
                <h4 className='text-[1.8vw] font-medium underline '>Clothings Hot</h4>
                <h4 className='text-[1.8vw] font-medium underline '>Shoe Collection</h4>
                <h4 className='text-[1.8vw] font-medium underline '>Accessories</h4>

            </div>
            <div className='relative '>
                <img src={"/bag_deal_of_the_day.webp"} alt="logo" className='w-[18vw] ' />

                
                <h4 className='text-[0.8vw] font-semibold underline text-white absolute -right-5 -top-5 bg-black rounded-full h-[6vh]  w-[5vw] text-center '>Sale of <br/> Rs.29.99</h4>

            </div>
            <div className='flex flex-col gap-4 '>
                <h4 className='text-[0.8vw] font-semibold underline text-red-500  '>DEAL OF THE WEEK</h4>
                <h4 className='text-[1.8vw] font-semibold underline  '>Multi-Pocket Chest Bag Black</h4>
                <h4 className='text-[1.8vw] font-medium underline '>29 : 04 : 39 : 37</h4>
                <button className='bg-black text-[0.8vw] text-white px-[1vw] py-[1.3vw] mt-2  underline w-1/2'>SHOP NOW</button>


            </div>
        </div>
    )
}

export default PAGE4