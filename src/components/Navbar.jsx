import React, { useState } from "react"
import logo from "../assets/logo.png"
import { MdOutlineWifiCalling3  } from "react-icons/md";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      <header className=" w-full min-h-[50px] flex justify-between gap-10 items-center absolute z-10 text-white bg-gray-600/30">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"

          >
            {/*      <!--  logo --> */}
            <a
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 "
            >
              <img
                width="200"
                height="200"
                src = {logo}
                className="bg-[#343438] p-2"
              />
                
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
         
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>    
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-[#343438]  px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch text-white">
                <a
                  className="flex items-center gap-2 py-4 transition-colors duration-300    focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Home</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <Link to="/signup" className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8">
                  <span>Sign Up</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <Link to="/login" className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8">
                  <span>Login</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <a
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300   focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Service</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <a
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300    focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Project</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <a
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300    focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Pages</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <a
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300    focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>News</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch text-white">
                <a
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300    focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Contact</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch text-white">
              <MdOutlineWifiCalling3  className="text-[#B98E75] bg-white rounded-full p-2 mr-2 mt-6" size={40}/>
                <a
                  className="flex flex-col-reverse items-center gap-1 py-4 transition-colors duration-300    focus:outline-none focus-visible:outline-none "
                  href="javascript:void(0)"
                >
                  <span>Call Anytime</span>
                  <span>+0987654321</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        </header>
    
    </>
  )
}

export default Navbar