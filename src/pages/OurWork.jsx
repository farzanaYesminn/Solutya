import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Line from "../assets/line.png"
import Work1 from "../assets/ourWork1.png"

const OurWork = () => {

    useEffect(() => {
        const slider = new Glide(".glide-05", {
          type: "carousel",
          focusAt: "center",
          perView: 1,
          autoplay: 3000,
          animationDuration: 700,
          gap: 24,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
      }, [])
  return (
    <div>
        <div className='px-20  '> 
          
          <div className='flex gap-4 py-5 ' >
          <img src={Line} className='w-14 h-4 pt-2' />
              <p className='font-saira text-lg'>
              What We Done              </p>
              
          </div>
          <div className='text-3xl font-bold flex flex-col gap-4 font-saira text-[#252531]'>
            <span className=''>Let's Have a Look What</span>
            <span>We Have Done An Amazing Work!</span>
          </div>
        </div>


        <div className="glide-05 relative w-full p-20">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={Work1}
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src={Work1}
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src={Work1}
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
        
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default OurWork