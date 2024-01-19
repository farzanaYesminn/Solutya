import React from 'react'

const OurService = () => {
  return (
    <div>
        <div className='flex gap-4 py-5 ' >
          <img src={Line} className='w-14 h-4 pt-2' />
              <p className='font-saira text-lg'>
              Our Service
             </p>
              
          </div>
          <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-[#252531]'>
            <span className=''>We Provide Best</span>
            <span>Interior Design Services </span>
          </div>

          <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4">Column 1/3</div>
            <div className="col-span-4">Column 2/3</div>
            <div className="col-span-4">Column 3/3</div>
          </div>
        </div>
      </section>
        

    </div>
  )
}

export default OurService