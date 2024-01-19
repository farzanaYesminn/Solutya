import React from 'react'
import Line from "../assets/line.png"
import Line1 from "../assets/line4.png"
import Architecure from "../assets/architecure.png"
import Interior from "../assets/interior.png"
import HomeDecore from "../assets/homedecore.png"
import ONE from "../assets/01.png"
import TWO from "../assets/02.png"
import THREE from "../assets/03.png"


const OurService = () => {
  return (
    <div className='p-8'>
        <div className='flex gap-4 py-5 ' >
          <img src={Line} className='w-14 h-4 pt-2' />
              <p className='font-saira text-lg'>
              Our Service
             </p>
              
          </div>
          <div className='flex justify-between'>
          <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-[#252531]'>
            <span className=''>We Provide Best</span>
            <span>Interior Design Services </span>
          </div>
              <img src={Line1} />
          </div>
         

          <section>
        <div className="container px-6 m-auto py-10">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">

            {/* 1 */}
            <div className="col-span-4 border-2 p-2 border-[#B98E75]">
              <div className="overflow-hidden  bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Icon --> */}
        <div className='flex justify-between '>
        <img src={Architecure} />
        <img src={ONE} className='w-20 h-20 p-5'/>
        </div>
        
        {/*  <!-- Body--> */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">Architecure</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur. Amet id non felis pretium consectetur id magna.
          </p>
          <button className='bg-[#B98E75] py-3 px-4 rounded text-white mt-6'>Get Service</button>
        </div>
      </div>
            </div>
            {/* 2 */}
            <div className="col-span-4 border-2 p-2 border-[#B98E75]">
              <div className="overflow-hidden  bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Icon --> */}
        <div className='flex justify-between '>
        <img src={Interior} />
        <img src={TWO} className='w-20 h-20 p-5'/>
        </div>
        
        {/*  <!-- Body--> */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">Interior Design</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur. Amet id non felis pretium consectetur id magna.
          </p>
          <button className='bg-[#B98E75] py-3 px-4 rounded text-white mt-6'>Get Service</button>
        </div>
      </div>
            </div>
            {/* 3 */}
            <div className="col-span-4 border-2 p-2 border-[#B98E75]">
              <div className="overflow-hidden  bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Icon --> */}
        <div className='flex justify-between '>
        <img src={HomeDecore} className='w-40 h-40 p-5'/>
        <img src={THREE} className='w-20 h-20 p-5'/>
        </div>
        
        {/*  <!-- Body--> */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">Home Decor</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur. Amet id non felis pretium consectetur id magna.
          </p>
          <button className='bg-[#B98E75] py-3 px-4 rounded text-white mt-6'>Get Service</button>
        </div>
      </div>
            </div>
          </div>
        </div>
      </section>
        

    </div>
  )
}

export default OurService