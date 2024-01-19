import React from 'react'
import Line from "../assets/line.png"
import Line1 from "../assets/line4.png"
import Line2 from "../assets/line5.png"
import ClientSay from "../assets/ClientSay.png"
import Client from "../assets/Client.png"

const VIdeoFeedback = () => {
  return (
    <div>
       <div className='px-20  '>
            <img src={Line2} />
            <div className='flex flex-col gap-4 pb-5  ' >
            <img src={Line} className='w-14 h-2' />
                <p className='font-saira text-lg'>
                Video & Feedback       
                </p>
                </div>

            <div className='flex justify-between'>
            <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-[#252531]'>
            <span className=''>Let's See The Video &</span>
            <span>What Client Say About Our Project </span>
            </div>
                <img src={Line1} />
            </div>
        </div>


        <div>
            <div className='mb-20'>
                <img src={ClientSay }  className='relative '/>

                <div> 
                <div className="w-100 relative mr-[5rem] ml-[45rem] mt-[-20rem]  overflow-hidden bg-white rounded text-slate-500 shadow-slate-600 shadow-xl ">
                    <div    className=" p-6 ">
                        <figure    className="">
                        <blockquote    className="p-6 text-lg leading-relaxed">
                            <h1 className='text-xl font-bold'>WHAT CLIENT'S SAY?</h1>  
                            <hr className='my-4 py-0 px-14 bg-[#B98E75] '/>
                          
                            <p>Lorem ipsum dolor sit amet consectetur. Elit ac vel nec augue pharetra lectus duis. Nullam dignissim pretium egestas non turpis turpis purus lobortis.</p>
                        </blockquote>
                        </figure>

                        <div className='flex flex-col justify-center items-center py-5'>
                             <img src={Client}/>
                             <h1 className='text-xl'>Johan Smith</h1>
                             <p className='text-sm'>Manager Of Alco. LTD</p>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>

       

        </div>

    </div>
  )
}

export default VIdeoFeedback