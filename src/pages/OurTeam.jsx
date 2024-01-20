import React from 'react'
import Line from "../assets/line.png"
import Line1 from "../assets/line2.png"
import Team1 from "../assets/Team1.png"
import Team2 from "../assets/Team2.png"
import Team3 from "../assets/Team3.png"
import Team4 from "../assets/Team4.png"

const OurTeam = () => {

  return (
    <div>
      <img src={Line1}/>        
      <div className='px-20 pb-20 '> 
          
            <div className='flex gap-4 py-5 ' >
            <img src={Line} className='w-14 h-4 pt-2' />
                <p className='font-saira text-lg'>
                Meet Our Team
                </p>
                
            </div>
            <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-[#252531]'>
              <span className=''>Let's See Our Expert </span>
              <span>Engineer & Designer</span>
            </div>

          <section>
            <div className="container px-6 m-auto ">
              <div className="grid grid-cols-4 py-10 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 lg:col-span-3"><img src={Team1}/></div>
                <div className="col-span-4 lg:col-span-3"><img src={Team2}/></div>
                <div className="col-span-4 lg:col-span-3"><img src={Team3}/></div>
                <div className="col-span-4 lg:col-span-3"><img src={Team4}/></div>
              </div>
            </div>
        </section>
        </div>
    </div>
  )
}

export default OurTeam
