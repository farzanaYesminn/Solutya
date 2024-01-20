import React from 'react'
import Line from "../assets/line.png"
import Line1 from "../assets/line4.png"
import Line2 from "../assets/line5.png"
import WE1 from "../assets/we1.png"
import WE2 from "../assets/we2.png"
import WE3 from "../assets/we3.png"
import WE4 from "../assets/we4.png"

const WeWork = () => {
  return (
    <div className='bg-[#343438] text-white'>
        <section class="relative overflow-hidden  my-8">
                        <div class="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
                            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                            {/* <p class="text-sm font-bold uppercase tracking-widest text-gray-700 text-center">How It Works</p> */}
                <div className='px-20  '>

                    <div className='flex flex-row-reverse justify-between'>
                        <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-white'>
                            <div className='flex gap-4 pb-4 ' >
                            <img src={Line} className='w-14 h-4 pt-2' />
                                <p className='font-saira text-lg'>
                                How We Works        
                                </p>
                        </div>
                            <span className=''>Our Easy Working Steps </span>
                            <span>To Do Start A Project</span>
                         </div>
                            <img src={Line2} className='w-[600px]'/>
                        </div>
                    </div>



            <div class="relative mt-12 lg:mt-20">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-26 lg:px-40">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
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
                            <img className=' rounded-full bg-white p-2' src={WE1} />
                            </span>
                        </div>

                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-[#B98E75] dark:text-white md:mt-10">
                            Visit Project
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-white dark:text-gray-400 px-7">
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget laoreet volutpat egestas posuere urna phasellus.
                        </p>
                    </div>
                    <div>
                    <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <img className=' rounded-full bg-white p-2' src={WE2} />
                            </span>
                        </div>

                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-[#B98E75] dark:text-white md:mt-10">
                            Planning Design
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-white dark:text-gray-400 px-7">
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget laoreet volutpat egestas posuere urna phasellus.
                        </p>
                    </div>
                    <div>
                    <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <img className=' rounded-full bg-white p-2' src={WE3} />
                            </span>
                        </div>

                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-[#B98E75] dark:text-white md:mt-10">
                            Project Sketch
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-white dark:text-gray-400 px-7">
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget laoreet volutpat egestas posuere urna phasellus.
                        </p>
                    </div>
                    <div >
                    <div
                            class="flex items-center justify-center w-28 h-20 mx-auto transform hover:scale-125 transition-transform duration-300 ease-in-out">
                            <span class="  rounded-full p-2">
                            <img className=' rounded-full bg-white p-2' src={WE4} />
                            </span>
                        </div>

                        <h3
                            class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-[#B98E75] dark:text-white md:mt-10">
                            Start Working
                        </h3>
                        <p class=" mt-3 sm:mt-4 text-base text-white dark:text-gray-400 px-7">
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper euismod eget laoreet volutpat egestas posuere urna phasellus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default WeWork