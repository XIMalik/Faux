import React, { useState } from 'react';
import logo_mob from '/public/ab-logo-col.png';
import flag from '/public/flag.png';
import ham from '/public/hamburger3.png';
import close from '/public/closedd.png';
import logo from '/public/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar for larger screens */}
      <div className="bg-[#0C2043] top-0 w-full h-[45px] flex justify-between items-center px-10 border-b-[0.2px] border-black/10">
        <div className="logo-holder flex gap-6 items-center">
          {/* <div className="w-[30px] h-[30px] rounded-lg bg-white"></div>
          <lord-icon
            src="https://cdn.lordicon.com/wmwqvixz.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: '25px', height: '25px' }}>
          </lord-icon> */}
          <img src={flag} className='w-[5%] min-w-[30px]' alt="" />

        </div>
        <div className="hold flex items-center gap-10">

          <div className="f-nav flex gap-5 text-white font-light text-xs">
            <span>Careers</span>
            <span>About WSD</span>
            <span>Contact</span>
          </div>

          <div className="lang-sel flex items-center gap-1  text-white font-light text-xs">
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/xcrjfuzb.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: '18px', height: '18px' }}>
            </lord-icon>
            <span>Language</span>
          </div>
        </div>
      </div>
      <div className="navbar hidden md:flex justify-between text-black bg-white px-10 py-2 border-b-[1.5px] border-black/10">
        <img src={logo} className='w-[13%]' alt="" />
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-black">
            <li><a href='#how-it-works'>How it works</a></li>
            <li><a href='#services'>Our Services</a></li>
            <li><a href='#eligibility'>Eligibility</a></li>
            <li><a href='#highlights'>Highlights</a></li>
          </ul>
        </div>
      </div>

      {/* Navbar for smaller screens */}
      <div className="navbar flex md:hidden bg-none">
        <div className="flex-1">
          <a className="text-sm flex items-center gap-2 header_title">
            {/* <img src={logo_mob} alt="Abeenton logo" className='h-[40px]' />
            <h1 className='header-title'>Abeenton</h1> */}
          </a>
        </div>
        <div className="flex-none">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Switch between ham and close icons */}
            <img src={isMenuOpen ? close : ham} alt="Menu icon" />
          </button>
        </div>
      </div>

      {/* Smooth Dropdown Menu */}
      <div className={`dropdown-menu mt-10 md:hidden ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav flex flex-col p-2 w-full">
          <li className="w-full text-center py-2 border-none">
            <a href='#how-it-works' onClick={toggleMenu}>How it works</a>
          </li>
          <li className="w-full text-center py-2">
            <a href='#services' onClick={toggleMenu}>Our Services</a>
          </li>
          <li className="w-full text-center py-2">
            <a href='#eligibility' onClick={toggleMenu}>Eligibility</a>
          </li>
          <li className="w-full text-center py-2">
            <a href='#highlights' onClick={toggleMenu}>CSBG Highlights</a>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
