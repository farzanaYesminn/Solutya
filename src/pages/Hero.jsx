import React from 'react'
import Hero1 from "../assets/hero.jpg"

const Hero = () => {

    
  return (
    <div>
        <div className='w-full h-[100vh]  bg-gray-600 text-white'>
        < img src={Hero1} alt='/' className='w-full h-full object-cover from-black' />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col p-4'>
                <div className='flex gap-3'>
                    <hr className='h-2 px-8 mt-3 bg-[#b18973] '/>
                    <p className='text-xl'>#1</p>
                </div>
                <h1 className='font-bold text-4xl '>WORLD CLASS DESIGN</h1>
                <h1 className='font-bold text-4xl '>FOR YOUR INTERIOR SET-UP </h1>
                <p className='py-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam ullam optio quod sint non officia, corrupti velit odio vel provident aperiam voluptas nemo fuga sequi aut cumque maiores mollitia!
                </p>
                <button className='w-40 bg-[#B98E75] py-3 px-2 rounded font-bold text-white mt-6'>OUR PORTFOLIO</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero