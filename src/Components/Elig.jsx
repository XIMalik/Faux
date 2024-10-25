import React from 'react'

const Elig = () => {
    return (
        <div className="px-[60px] md:px-[80px] lg:px-[120px] py-[100px]">
            <h1 className='section-title mb-[100px]'> Eligibility
            </h1>
            <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
                <div className="p1 md:w-[50%] p-10 section-paragraph bg-yellow-400/50 opactiy-[100%] text-sm ease-in duration-150 flex flex-col gap-3 rounded-md">
                    CSBG eligible entities have established partnerships and collaborate with local community organizations, service providers and public and private agencies to assure the effective delivery of services to the low-income population. CSBG eligible entities improve local services by linking low-income Californians to available resources through direct services, and by establishing formal and informal agreements through contractual relationships with subcontractors and referrals to community partners.
                    <button className='blue w-fit p-3 rounded-md text-white text-xs'> Check eligibility</button>
                </div>
                <div className="p1 md:w-[50%] section-paragraph text-[#1C2451] bg-[#f8f8f8] p-10 text-sm flex flex-col gap-4 border border-[0.2px] border-solid border-[#e8e8e8] rounded-md">
                    CSBG eligible entities apply and evaluate community assessment data to identify gaps in services and opportunities. They then develop strategies to resolve the identified gaps and enhance current programs. As such, the practice of cross-referring clients is common, as staff participates on local area commissions and share information about respective services and gaps in services.                    <button className='bg-white w-fit p-3 rounded-md text-xs'> Check eligibility</button>

                </div>
            </div>
        </div>
    )
}

export default Elig