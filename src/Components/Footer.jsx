import React from 'react'
import logo from '/public/ab-logo-wh.png'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#25396f] text-primary-content p-10">
  <aside className='text-white'>
    {/* <img src={logo} className='h-[60px] mb-5' alt="" /> */}
    <div className="icons flex gap-5 mb-5">
    <img width="20" height="20" src="https://img.icons8.com/ios-filled/60/FFFFFF/twitter.png" alt="twitter"/>
    <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/FFFFFF/facebook--v1.png" alt="facebook--v1"/>
    <img width="20" height="20" src="https://img.icons8.com/glyph-neue/512/FFFFFF/gmail-new.png" alt="gmail-new"/>
      </div>    
    {/* <p className="font-bold text-[12px]">
      Abeenton Oil & Gas
      <br />
      Providing reliable services for everyday living 
    </p> */}
    {/* <p className='text-[12px]'>Copyright © {new Date().getFullYear()} - All right reserved</p> */}
  </aside>
</footer>
  )
}

export default Footer