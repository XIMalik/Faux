import React, { useState } from 'react';
import logo from '/public/ab-logo-wh.png';
import logo_mob from '/public/ab-logo-col.png';
import ham from '/public/hamburger3.png';
import close from '/public/closedd.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar for larger screens */}
      <div className="bg-[#304363] top-0 w-full h-[45px] flex justify-between items-center px-10">
        <div className="logo-holder flex gap-6 items-center">
          <div className="w-[30px] h-[30px] rounded-lg bg-white"></div>
          <lord-icon
            src="https://cdn.lordicon.com/wmwqvixz.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: '25px', height: '25px' }}>
          </lord-icon>

        </div>
        <div className="hold flex items-center gap-10">

          <div className="f-nav flex gap-5 text-white font-semibold text-sm">
            <span>Careers</span>
            <span>About WSD</span>
            <span>Contact</span>
          </div>

          <div className="lang-sel flex items-center gap-1  text-white font-semibold text-sm">
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
      <div className="navbar hidden md:flex justify-between bg-none rounded-full absolute px-10 py-2">
        <a className="text-sm flex items-center gap-2 header_title">
          <img src={logo} alt="Abeenton logo" className='h-[55px]' />
          {/* <h1 className='header-title'>Abeenton</h1> */}
        </a>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><a href='#about-us'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#the-team'>The Team</a></li>
            <li><a href='#contact-us'>Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Navbar for smaller screens */}
      <div className="navbar flex md:hidden bg-none">
        <div className="flex-1">
          <a className="text-sm flex items-center gap-2 header_title">
            <img src={logo_mob} alt="Abeenton logo" className='h-[40px]' />
            <h1 className='header-title'>Abeenton</h1>
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
      <div className={`dropdown-menu md:hidden ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav flex flex-col p-2 w-full">
          <li className="w-full text-center py-2 border-none">
            <a href='#about-us' onClick={toggleMenu}>About</a>
          </li>
          <li className="w-full text-center py-2">
            <a href='#services' onClick={toggleMenu}>Services</a>
          </li>
          <li className="w-full text-center py-2">
            <a href='#the-team' onClick={toggleMenu}>The Team</a>
          </li>
          <li className="w-full text-center py-2">
            <a href='#contact-us' onClick={toggleMenu}>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
