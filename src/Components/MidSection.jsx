import React from 'react'
import Split from './Split'
import Services from './Services'
import WWSF from './WWSF'
import TheTeam from './TheTeam'
import ContactUs from './ContactUs'
import TrustedBy from './TrustedBy'
import Form from './Form'
import TopOne from './TopOne'
import Elig from './Elig'
import Highlights from './Highlights'

const MidSection = () => {
  return (
    <div className="w-[100%] flex flex-col ">
      <div className="">
        <TopOne/>
      </div>
      <div id='about-us' className="">
        <Split />
      </div>
      <div id='elig' className="">
        <Elig />
      </div>
      <div id='elig' className="">
        <Highlights />
      </div>
      {/* <div className=" flex items-center justify-center py-10">
      <Form/>
      </div> */}
      {/* <div id='services'>
        <Services />
      </div>
      <div id='our-stance'>
        <TrustedBy />
      </div> */}
      {/* <div id='our-stance'>
        <WWSF />
      </div> */}
      {/* <div id='the-team'>
        <TheTeam />
      </div> */}
      <div id='contact-us'>
        <ContactUs />
      </div>
    </div>
  )
}

export default MidSection