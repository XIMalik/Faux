import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'
import start from '/public/form_bg.avif'
import Footer from '../Components/Footer'

const GetStarted = () => {
    return (
        <div>
            <Navbar />

            <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center px-5 py-10" style={{
                backgroundImage: `url(${start})`, // Correctly set background image
                backgroundSize: 'cover', // Optional: cover to ensure the image fills the div
            }}>
                <h1 className='section-title-light text-white z-12 '>​Get started</h1>
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default GetStarted