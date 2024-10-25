import React from 'react'
import pay from '/public/pay.avif'
import comm from '/public/comm.avif'
import home from '/public/home.avif'

const TopOne = () => {
    return (

        <div className='bg-[#f8f8f8] w-full h-fit py-10 px-10 flex flex-col justify-center gap-10 items-center'>
            <h1 className='section-title'>​How it works</h1>
            <div className='bg-[#f8f8f8] w-full flex flex-wrap gap-12 md:flex-row justify-center md:gap-[150px]'>
                <div className="div flex justify-center items-center  flex-col gap-5">
                    <div className="circle w-[180px] h-[180px] rounded-full overflow-hidden bg-[#efefef]">
                        <img src={pay} className='object-cover w-full h-full' alt="" />
                    </div>
                    <span className='font-semibold text-md text-[#0C2043]'>Paying my energy bill</span>
                </div>
                <div className="div flex justify-center items-center  flex-col gap-5">
                    <div className="circle w-[180px] h-[180px] rounded-full overflow-hidden bg-[#efefef]">
                        <img src={comm} className='object-cover w-full h-full' alt="" />

                    </div>
                    <span className='font-semibold text-md text-[#0C2043]'>Community service</span>
                </div>
                <div className="div flex justify-center items-center  flex-col gap-5">
                    <div className="circle w-[180px] h-[180px] rounded-full overflow-hidden bg-[#efefef]">
                        <img src={home} className='object-cover w-full h-full' alt="" />

                    </div>
                    <span className='font-semibold text-md text-[#0C2043]'>Home energy efficiency</span>
                </div>
            </div>
        </div>
    )
}

export default TopOne