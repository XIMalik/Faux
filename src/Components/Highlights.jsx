import React from 'react'
import one from '/public/highlight_one.png'
import two from '/public/highlight_two.png'
import three from '/public/highlight_three.png'

const Highlights = () => {
    return (
        <div className='bg-[#efefef] w-full flex flex-col-reverse md:flex-row gap-10 h-fit p-[60px] md:p-[80px] lg:p-[120px]'>
            <div className="pictures flex flex-col gap-5 w-[100%] md:w-[40%]">
                <img src={one} className='w-full h-[200px] rounded-md object-cover' alt="" />
                <img src={two} className='w-full h-[200px] rounded-md object-cover' alt="" />
                <img src={three} className='w-full h-[200px] rounded-md object-cover' alt="" />
            </div>
            <div className="text text-left w-[100%] md:w-[60%] ">
                <h1 className='section-title'>​CSBG Highlights:</h1>
                <h1 className='section-title'>​​40 Prado Homeless Services Center</h1>
                <p className='section-paragraph'>
                    The 40 Prado Homeless Services Center opened its doors in San Luis Obispo County on September 17, 2018, to provide a cost-effective and central location for homeless families and individuals as they embark on the path to self-sufficiency. In partnership with the compassionate community of San Luis Obispo County, the Community Action Partnership of San Luis Obispo County, Inc. (CAPSLO) spearheaded planning and construction to bring 40 Prado to life.
                </p>
                <p className='section-paragraph'>
                    40 Prado is a 24-hour, year-round facility that provides personal care and shelter for 100 clients, including an average of ten children a night, and serves 84,000 meals per year. As part of the County’s Continuum of Care, CAPSLO and 40 Prado effectively assist the homeless by providing customized services that include: counseling, case management, on-site primary healthcare, veterans’ services, and much more. Built to improve the health and stability of its participants, 40 Prado aims to provide families and individuals with a means to an end.                </p>
                <p className='section-paragraph'>
                    To meet the needs of homeless individuals who come to 40 Prado with mental health issues, CAPSLO has begun collaborating with Transitions Mental Health Association (TMHA) on a program that provides mobile mental health services for clients classified as “Moderate to Severe.” TMHA’s Homeless Outreach Team works with 40 Prado staff to reach the most challenging of clients, utilizing mobile tele-psychiatry services to identify those who suffer from dual diagnoses, such as mental health illnesses in conjunction with substance abuse disorders, and prescribe necessary medications.                </p>
            </div>
        </div>
    )
}

export default Highlights