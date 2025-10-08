

import Image from 'next/image'

const Hero = () => {
  return (
    <main className='relative w-full h-screen min-h-[100vh]'>
      <Image className='brightness-50 object-center ' fill priority style={{ objectFit: "cover" }} src="/images/main.webp" alt="building picture" />
      <div className="relative inset-0 z-10 flex pl-8 pt-8 md:pl-20 md:pt-20 h-full flex-col">
        <h1 className="text-[#FFE100] pb-5 text-4xl md:text-6xl xl:text-8xl font-bold">Casa Lumière</h1>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold">EXPERIENCE ELEGANCE</h2>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold ">IN EVERY STAY</h2>
        <div className='flex gap-5'>
          <button className='mt-10 text-white border border-white text-sm sm:text-xl md:text-2xl xl:text-3xl hover:underline px-6 py-2 w-fit rounded-md hover:cursor-pointer bg-transparent transition-all 700 ease-in hover:bg-white hover:text-black'>
            Explore
          </button>
          <button className='mt-10 text-white border border-white text-sm sm:text-xl md:text-2xl xl:text-3xl hover:underline px-6 py-2 w-fit rounded-md hover:cursor-pointer bg-transparent transition-all 700 ease-in hover:bg-white hover:text-black'>
            Reserve
          </button>
        </div>
        <div className='flex md:justify-end mt-10   '>
          <div className='description md:bottom-10 right-5 backdrop-blur-md p-3 md:p-5 md:mr-8 w-11/12 md:w-1/2 text-white border border-white rounded-2xl md:rounded-2xl md:text-xl lg:text-2xl xl:text-3xl absolute bg-black/10'>Casa Lumière - Where timeless European charm meets modern luxury. Nestled in the heart of the city, our elegant retreat glows with warm hospitality, exquisite interiors, and moments that feel effortlessly magical.
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
