import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Arci1 from "../assets/archi1.png"
import Arci2 from "../assets/archi2.png"
import Inte1 from "../assets/inte1.png"
import Inte2 from "../assets/inte2.png"
import Inte3 from "../assets/inte3.png"
import Deco1 from "../assets/deco1.png"
import Deco2 from "../assets/deco2.png"
import Deco3 from "../assets/deco3.png"
import Logo from "../assets/logo.png"
import Line from "../assets/line.png"
import { FaFacebookF ,FaTwitter , FaInstagram, FaLinkedinIn    } from "react-icons/fa";








const Footer = () => {
  return (
    <div >
       <div className='flex flex-col sm:flex sm:flex-row justify-evenly items-center border-y-2 border-[#B98E75] mt-5 '>

        <div className='py-8 flex flex-col gap-5 '>
            <img src={Line} className='w-36 h-10 py-4'/>
            <p className='text-[#B98E75]'>Phone</p>
            <p>+1 203-123-0606</p>
        </div>

        <hr className='hidden sm:block py-14 px-0.5 bg-[#B98E75] '/>

        <div className='p-14 flex flex-col gap-5'>
         <img src={Line} className='w-36 h-10 py-4'/>
            <p className='text-[#B98E75]'>Email</p>
            <p>architecture@bauen.com</p>
        </div>

        <hr className='hidden sm:block py-14 px-0.5 bg-[#B98E75] '/>

        <div className='p-14 flex flex-col gap-5'>
         <img src={Line} className='w-36 h-10 py-4'/>
            <p className='text-[#B98E75]'>Our Address</p>
            <p>24 King St, Charleston, SC 29401 USA</p>
        </div>
       </div>


        <footer className="w-full text-white">
        {/*    <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t bg-[#343438]">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-5 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-4 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3
                  className="mb-6 text-5xl font-semibold text-white"
                >
                  Newsletter
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="text-[12px]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Diam nisl nisl eget vitae iaculis. Ut elementum quam vel sagittis faucibus. Lorem ipsum dolor sit amet consectetur.
                    </a>
                  </li>
                  <li className="mb-2 leading-6 pt-3">
                    <input className='p-1 sm:py-2 sm:px-2 '/>
                    <button className='text-white bg-[#B98E75] sm:py-2 sm:px-2 p-1'> Enter</button> 
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3 lg:pl-7"
              >
                <h3
                  className="mb-6 text-xl font-saira text-white "
                >
                  Our Service

                  <span></span>
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowRight size={22} className='pt-1 text-[#B98E75]'/><span>Architecture</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowRight size={22} className='pt-1 text-[#B98E75]'/><span>Interior Design</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowRight size={22} className='pt-1 text-[#B98E75]'/><span>Home Decor</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowRight size={22} className='pt-1 text-[#B98E75]'/><span>Urban Design</span>
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-2"
                    >
                      <FaArrowRight size={22} className='pt-1 text-[#B98E75]'/><span>Design System</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3
                  className="mb-6 text-xl font-saira text-white "
                >
                    OUR Project 
                </h3>
                <ul>
                  <li className=" leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                    >
                      Architecture
                    </a>
                    <div className='flex gap-4 py-1'>
                        <img src={Arci1}/>
                        <img src={Arci2}/>
                        <img src={Arci2}/>
                    </div>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                    >
                      Interior
                    </a>
                    <div className='flex gap-4 py-1'>
                        <img src={Inte1}/>
                        <img src={Inte2}/>
                        <img src={Inte3}/>
                    </div>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                    >
                      Decoration
                    </a>
                    <div className='flex gap-4 py-1'>
                        <img src={Deco1}/>
                        <img src={Deco2}/>
                        <img src={Deco3}/>
                    </div>
                  </li>
                
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
               <img src={Logo}/>
                <ul>
                  <li className="my-2 leading-6">
                    <a
                      href="#"
                      className="text-[12px] "
                    >
                      Lorem ipsum dolor sit amet consectetur. Diam nisl nisl eget vitae iaculis. Ut elementum quam vel sagittis faucibus. Lorem ipsum dolor sit amet consectetur. Diam nisl nisl eget vitae iaculis. Ut elementum quam vel sagittis faucibus.
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="#"
                      className="flex gap-3 pt-3"
                    >
                      <FaFacebookF className='bg-[#B98E75] border-4xl text-white p-2 size-10'/>
                      <FaTwitter className='bg-[#B98E75] border-4xl text-white p-2 size-10'/>
                      <FaInstagram className='bg-[#B98E75] border-4xl text-white p-2 size-10'/>
                      <FaLinkedinIn className='bg-[#B98E75] border-4xl text-white p-2 size-10'/>




                    </a>
                  </li>
                  
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/*    <!-- Subfooter --> */}
        <div className="py-4 text-sm border-t border-white bg-[#343438]">
          <div className="container px-6 mx-auto">
              <div className=" text-center text-white p-4">
              Copyright by SoluArt © 2022. All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer