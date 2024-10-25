import React, { useState } from 'react'
import smile from '/public/smile.avif'
import family from '/public/family.avif'
import Form from './Form'
import { useNavigate } from 'react-router'


const Split = () => {

    const nav = useNavigate()

    return (
        <div
            className="h-fit md:h-fit flex flex-col-reverse md:flex-row-reverse items-center bg-[#efefef]">
            <div className='w-full md:h-[70vh] md:w-[40%] flex p-12 gap-10 relative overflow-hidden'>
                <img
                    src={smile}
                    className='h-full w-[35%] object-cover hover:scale-[102%] ease-in duration-500 -mt-[50px]' // Add negative margin here
                    alt=""
                />
                <img
                    src={family}
                    className='h-full w-[35%] object-cover hover:scale-[102%] ease-in duration-500'
                    alt=""
                />
                {/* <img src="https://framerusercontent.com/images/auOY3SUhdGwxbTIUq3Nc5zKeEds.jpg?scale-down-to=2048" className='h-full w-[33%] object-cover hover:scale-[102%] ease-in duration-500' alt="" /> */}
            </div>

            <div className='w-full md:w-[60%] flex flex-col items-start justify-center p-[60px] md:p-[80px] lg:p-[120px]'>
                <span className='sub text-[#1C2451] font-regular text-xs'>ABOUT US</span>
                <h1 className='section-title'>​CSBG and our services
                </h1>
                {/* <p className='section-paragraph'>CSBG is a federally funded investment that aims to reduce poverty in the United States. CSBG is funded by the U.S. Department of Health and Human Services, Administration for Children and Families, Office of Community Services. CSD is designated by the Governor as the state agency responsible for administering the CSBG program in California. <br /> There are currently 60 private nonprofit and local government organizations across California (referred to as eligible entities) receiving CSBG funds. This network of eligible entities continues to administer programs that assist low-income individuals and families with attaining the skills, knowledge, and motivation necessary to achieve self-sufficiency.</p> */}
                <p className='section-paragraph'>The Community Services Block Grant (CSBG) is a federally funded initiative aimed at reducing poverty in the United States, managed by the U.S. Department of Health and Human Services. <br /> In Washington, the state agency designated by the Governor, known as CSD, administers the program. Currently, 60 private nonprofit and local government organizations receive CSBG funds to support programs that help low-income individuals and families gain the skills and motivation needed for self-sufficiency.

                </p>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="border-[2px] flex flex-row-reverse items-center gap-2 p-2 rounded-md text-sm text-[#0C2043]"><lord-icon
                        src="https://cdn.lordicon.com/xcrjfuzb.json"
                        trigger="hover"
                        colors="primary:#0C2043"
                        style={{ width: '18px', height: '18px' }}>
                    </lord-icon> <span>Our Services</span></div>
                    <ul tabIndex={0} className="dropdown-content f-select max-h-[200px] bg-white text-[#0C2043] shadow-xl rounded-box z-[1] w-[400px] p-2 overflow-y-auto ">
                        <li><a onClick={() => nav('/get-started')}>Child/Youth Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Education Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Emergency Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Employment Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Food/Nutrition Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Health Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Homeless Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Housing Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Income Management Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Senior Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Transportation Services</a></li>
                        <li><a onClick={() => nav('/get-started')}>Plus, Other Services</a></li>

                    </ul>
                </div>            </div>
        </div>
    )
}

export default Split