import React from 'react'
import Split from './Split'
import Services from './Services'
import WWSF from './WWSF'
import TheTeam from './TheTeam'
import ContactUs from './ContactUs'
import TrustedBy from './TrustedBy'

const MidSection = () => {
  return (
    <div className="w-[100%] flex flex-col ">
      <div id='about-us' className="">
        <Split />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='our-stance'>
        <TrustedBy />
      </div>
      <div id='our-stance'>
        <WWSF />
      </div>
      <div id='the-team'>
        <TheTeam />
      </div>
      <div id='contact-us'>
        <ContactUs />
      </div>
    </div>
  )
}

export default MidSection