import React from 'react'

export default function Hero() {
  return (
    <section className='bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 w-full min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center text-white'>
        <div className='text-center px-4 space-y-4'>
        <h1 className='text-5xl lg:text-6xl font-bold'>Engineering Store</h1>
        <p className='text-lg lg:text-xl'>Browse our bookstore and access engineering tools.</p>
        </div>
    </section>
  )
}


