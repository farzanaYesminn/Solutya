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


       

        <div class="relative mt-12 lg:mt-20 bg-[#B98E75] py-32">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-26 lg:px-40 py-32">
                    <svg class="w-full opacity-20" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                        fill="none">
                        <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="#D4D4D8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                    </svg>
                </div>
                <div
                    class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
                    <div>
                        <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <div className="col-span-4 lg:col-span-3 p-4 flex flex-col justify-center items-center">
                                <p className='text-[#D5D2DA] text-4xl font-bold font-saira'>300</p>
                                <p className='text-[#D5D2DA] text-xl font-bold font-saira'> Projects Succeed</p>
                             </div>
                             </span>
                            </div>

                    </div>
                    <div>
                    <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <p className='text-[#D5D2DA] text-4xl font-bold font-saira'>500</p>
                            <p className='text-[#D5D2DA] text-xl font-bold font-saira'> Satisfied Clients </p>
                            </span>
                        </div>
                    </div>
                    <div>
                    <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <p className='text-[#D5D2DA] text-4xl font-bold font-saira'>60</p>
                            <p className='text-[#D5D2DA] text-xl font-bold font-saira'> Professional Engineers</p>
                            </span>
                        </div>
                    </div>
                    <div >
                    <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <p className='text-[#D5D2DA] text-4xl font-bold font-saira'>10</p>
                            <p className='text-[#D5D2DA] text-xl font-bold font-saira'> Year Of Experience</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default VIdeoFeedback