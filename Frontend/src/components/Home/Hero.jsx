import React from 'react'

export default function Hero() {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 w-full min-h-[60vh] lg:min-h-[80vh] flex items-center text-white'>
      <section>
        <div className='max-w-7xl mx-auto px-4 lg:px-16'>
          <div className='max-w-4xl'>
          <h1 className='text-3xl lg:text-6xl font-bold leading-tight'>Asset-Centric Solutions for Industrial Excellence</h1>
          <p className='mt-4 text-lg lg:text-2xl text-gray-300 leading-relaxed'>AssetHealth <span className='align-super text-sm'>360</span> delivers comprehensive asset integrity management across critical industries and applications</p>
          </div>
          <div className='mt-10 flex gap-4'>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white lg:font-semibold px-6 py-3 text-lg lg:text-xl font-semibold lg:px-6 rounded-md transition">Explore Our Solutions</button>
            <button className="border border-gray-400 hover:border-white hover:bg-white/5
            lg:font-semibold px-6 py-3 text-lg lg:text-xl font-semibold lg:px-6 rounded-md transition ml-4">Contact Our Team</button>
          </div>
        </div>
      </section>
    </div>
  )
}
