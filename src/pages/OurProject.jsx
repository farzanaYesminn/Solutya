import React from 'react'
import Line from "../assets/line.png"
import Work1 from "../assets/work1.png"
import Work2 from "../assets/work2.png"
import Work3 from "../assets/work3.png"
import Work4 from "../assets/work4.png"
import Line1 from "../assets/line4.png"
import Line2 from "../assets/line5.png"


const OurProject = () => {
  return (
    <div>
         <div className='px-20  '>

          <img src={Line2} />
          <div className='flex flex-col gap-4 pb-5  ' >
          <img src={Line} className='w-14 h-2' />
              <p className='font-saira text-lg'>
              Our Project        
              </p>
              </div>

        <div className='flex justify-between'>
          <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-[#252531]'>
            <span className=''>Our Outstanding Latest </span>
            <span>Proejcts & Work</span>
          </div>
              <img src={Line1} />
        </div>

        <section>
            <div class="container px-6 m-auto pt-9">
                <div class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div class=""><img src={Work1}/></div>
                <div class=""><img src={Work2}/></div>
                <div class=""><img src={Work3}/></div>
                <div class=""><img src={Work4}/></div>
                </div>
            </div>
        </section>

        <div className='flex justify-center items-center pt-8'>
        <button className='p-4 bg-[#B98E75] text-white text-xl rounded mt-6 items-center justify-center'>Learn More</button>
        </div>
        


        </div>




    </div>
  )
}

export default OurProject