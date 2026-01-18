import React from 'react'

export default function OurApproach() {
  return (
    <section className='bg-white'>
      <div className='flex '>
        <div className='lg:w-1/2 p-8 space-y-4 text-lg'>
            <h1 className='text-4xl font-bold'>Our Approach</h1>
            <p className='text-slate-600'>
                We deliver integrated engineering solutions that combine technical excellence with operational pragmatism. Our methodology bridges maintenance reliability, advanced analysis, operational improvement, and project controls into a unified framework for asset performance optimization.
            </p>
            <p className='text-slate-600'>
                From predictive maintenance strategies and finite element analysis to earned value management and process re-engineering, we leverage decades of industrial experience to drive measurable results across critical infrastructure and manufacturing environments.
            </p>
            <p className='text-slate-600'>
                Our focus is delivering actionable insights and sustainable improvements that enhance reliability, reduce costs, and maximize return on investment for our clients' most valuable assets.
            </p>
        </div>
        <div className='hidden lg:block'>
            <img src="" alt="image1" />
        </div>
      </div>
    </section>
  )
}

