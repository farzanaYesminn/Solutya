import React from 'react'
import Hero1 from "../assets/hero.jpg"

const Hero = () => {
  return (
    <div>
        <div className='w-full h-[90vh]'>
        < img src={Hero1} alt='/' className='w-full h-full object-cover from-black' />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl '>Find Your Special Trip</h1>
                <h2 className='text-3xl py-4 italic'>With Weekaway</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam ullam optio quod sint non officia, corrupti velit odio vel provident aperiam voluptas nemo fuga sequi aut cumque maiores mollitia!
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero