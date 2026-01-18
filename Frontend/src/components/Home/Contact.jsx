import React from 'react'

export default function Contact() {
  return (
    <section className='w-full lg:h-50 bg-gradient-to-r from-[#083F36] via-[#0A3232] to-[#0C242E] text-white flex flex-col items-center justify-center gap-6 lg:p-32 p-20'>
        <div className='flex flex-col gap-4 text-center'>
            <h1 className='lg:font-bold lg:text-4xl max-w-4xl text-lg font-semibold whitespace-nowrap'>Ready to Optimize Your Asset Performance?</h1>
            <p className='text-sm lg:text-lg leading-relaxed'>Partner with industry leaders in asset integrity management and technical excellence</p>
        </div>
        <div className='flex gap-4 lg:text-lg text-sm font-semibold'>
            <button className='border p-4 rounded-lg cursor-pointer bg-white text-green-800 whitespace-nowrap'>Request a Consultation</button>
            <button className='border border-[#769194] p-4 rounded-lg hover:bg-[#435C60] cursor-pointer whitespace-nowrap'>View All Solutions</button>
        </div>
    </section>
  )
}



