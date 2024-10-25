import React from 'react'
import contact from '/public/contact.avif'
import { useNavigate } from 'react-router'

const ContactUs = () => {
    const nav = useNavigate()
    return (

        <div className='flex justify-center items-center my-12'>
            <div
            className="hero h-[50vh] bg-[#f6f6f6] w-[85vw] rounded-[30px] overflow-hidden"
            style={{
                backgroundImage: `url(${contact})`, // Correctly set background image
                backgroundSize: 'cover', // Optional: cover to ensure the image fills the div
                backgroundPosition: 'center', // Optional: center the image
            }}>
            <div className="w-full h-full bg-black/50"></div>
            <div className="hero-content text-[#fffff] text-center flex flex-col">
                <div className="">
                    <h1 className="mb-5 text-5xl section-title-light font-bold">Get assistance today</h1>
                    {/* <p className="mb-5">
                        Via any of the below avenues, reach us and make an enquiry today
                    </p> */}
                </div>
                <div className='flex gap-5 items-center w-full justify-center'>
                <button onClick={()=> nav('/get-started')} className="px-6 py-3 rounded-md bg-[#F58721] hover:bg-[#F58728] text-sm flex gap-3 justify-center items-center text-white">Sign up<img width="18" height="18" src="https://img.icons8.com/ios-filled/20/FFFFFF/chevron-right.png" alt="chevron-right"/></button>
                </div>
            </div>
        </div></div>
    )
}

export default ContactUs