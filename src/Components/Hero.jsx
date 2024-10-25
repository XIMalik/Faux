import React, { useState, useEffect } from 'react';
import solar from '/public/solar.jpg'
import wired from '/public/wired.jpg'
import boosters from '/public/boosters.jpg'
import one from '/public/one.jpg'
import two from '/public/two.avif'
import three from '/public/three.avif'
import four from '/public/four.avif'
import five from '/public/five.avif'
import { useNavigate } from 'react-router';

const Hero = () => {
    const images = [one, two, three, four, five];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);

    const nav = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='bg-black m-0'>

            <div className="hero min-h-[70vh] md:min-h-[80vh] relative overflow-hidden">
                {images.map((img, index) => (
                    <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: index === currentImageIndex ? 1 : 0,
                    }}
                    />
                ))}
                <div className="hero-overlay bg-black/50 absolute inset-0"></div>
                <div className="hero-content text-neutral-content text-center relative z-10">
                    <div className="flex flex-col items-center justify-center">
                    <h1 className="hero_title w-full tracking-tight">
    Community Services Block Grant
</h1>

                        <p className="mb-5 text-white lg:max-w-[500px]">
                        ​The Community Services Block Grant (CSBG) is funded under the U.S. Department of Health and Human Services, Administration for Children and Fam​​ilies. 
                        </p>
                        <div className='flex gap-5 items-center w-full justify-center'>
                            <button onClick={()=> nav('/get-started')} className="px-6 py-3 rounded-md bg-[#F58721] hover:bg-[#F58728] text-sm flex gap-3 justify-center items-center text-white">Get Started <img width="18" height="18" src="https://img.icons8.com/ios-filled/20/FFFFFF/chevron-right.png" alt="chevron-right"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;