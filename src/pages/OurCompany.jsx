import React from 'react'
import Line from "../assets/line.png"
import { FaArrowAltCircleRight  } from "react-icons/fa";

const OurCompany = () => {
  return (
    <div className='bg-[#343438] py-8'>
        <div className='flex gap-3 text-white'>
            <div>
            <div className="pt-6  px-6 mx-auto md:mx-auto ">
                 <iframe className=" w-[260px] h-[215px] sm:w-[360px] sm:h-[215px]  md:w-[560px] md:h-[315px] lg:w-[560px] lg:h-[315px] mx-auto  mt-4 md:mt-6 lg:mt-0 "  src="https://www.youtube.com/embed/6L7NnZWeW-s?si=eosu1MxsX4pQd0hx"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
            </div>
            <div>
            <div className='px-20 '> 
          
          <div className='flex gap-4 py-5 ' >
          <img src={Line} className='w-14 h-4 pt-2' />
              <p className='font-saira text-lg text-white'>
              About Our Company
              </p>
              
          </div>
          <div className='text-3xl font-bold flex flex-col gap-2 font-saira text-white'>
            <span className=''>Providing the best architecture  </span>
            <span>& interior design services</span>
          </div>
          <p className='font-saira text-sm pt-5 text-white'> Lorem ipsum dolor sit amet consectetur. Morbi luctus sagittis cursus pellentesque commodo urna. Ut consectetur mi gravida interdum nunc.</p>
          <nav
                className="col-span-2 md:col-span-4 lg:col-span-3 "
              >

                <ul className='font-saira text-sm py-5 text-white'>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowAltCircleRight  size={22} className='pt-1 text-[#B98E75]'/><span>Business applications through the Project</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowAltCircleRight  size={22} className='pt-1 text-[#B98E75]'/><span>Procedures whereas processes Is finally Set-up</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowAltCircleRight  size={22} className='pt-1 text-[#B98E75]'/><span>Revolutionary catalysts for changes when needed</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowAltCircleRight  size={22} className='pt-1 text-[#B98E75]'/><span>Business applications through the Project</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowAltCircleRight  size={22} className='pt-1 text-[#B98E75]'/><span>Design System</span>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
            </div>
        </div>
    </div>
  )
}

export default OurCompany