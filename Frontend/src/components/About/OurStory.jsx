import React from 'react'

export default function OurStory() {
  return (
    <section className='bg-white'>
      <div className='flex '>
        <div className='lg:w-1/2 p-8 space-y-4 text-lg'>
            <h1 className='text-4xl font-bold'>Our Story</h1>
            <p className='text-slate-600'>In today's demanding industrial landscape, organizations face mounting pressure to
                <span className='text-emerald-500 font-bold'> maximize asset performance while minimizing risk and cost </span>
                Yet many struggle with fragmented engineering resources, aging infrastructure, and the exodus of experienced technical talent.
            </p>
            <p className='text-slate-600'>AERP Engineering emerged to address this challenge head-on. We assembled a multidisciplinary team of experts spanning reliability engineering, advanced analysis, operational excellence, and project controls disciplines that are too often siloed but must work in concert for true asset optimization.</p>
            <p className='text-slate-600'>Today, we serve as a <span className='text-emerald-500 font-bold'>strategic partner to critical industries,</span>  delivering integrated solutions from condition-based maintenance and computational fluid dynamics to earned value management and Six Sigma programs. Our mission is simple: transform technical complexity into operational clarity and measurable business value.
            </p>
        </div>
        <div className='hidden lg:block'>
            <img src="" alt="image1" />
        </div>
      </div>
    </section>
  )
}

