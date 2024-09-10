'use client'
import dotenv from 'dotenv'
dotenv.config()

export default function Example() {
  const logoImagePath = `${process.env.IMAGES_PATH}buildOnlineLogo.png`
  return (
    <div className='flex flex-col min-h-fit w-full min-h-26 bg-black'>
      <div className='flex flex-row justify-between bg-white h-20 mt-28 rounded-3xl mx-6'>
        <div className='flex flex-row w-48'>
          <img src={logoImagePath} alt="error getting image" className='w-6 h-6 mb-7 mt-auto ml-8 mr-0.5'/>
          <p className='mb-6 mt-auto ml-0 mr-0 font-bold font-sans text-l text-gradient'>uildOnline</p>
        </div>
        <div className='flex flex-row justify-between items-center w-48'>
          <button className='inter-font font-medium'>contacts</button>
          <button className='inter-font font-medium'>notes</button>
        </div>
        <div className='flex flex-row items-center justify-between items-center w-48'>
          <button className='inter-font font-medium max-mr-12'>log in</button>
          <button className='inter-font font-medium mr-6 bg-green_bo rounded-full w-24 h-8'>sign in</button>
        </div>
      </div>
    </div> 
  )
}
