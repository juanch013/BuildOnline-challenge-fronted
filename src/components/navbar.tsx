'use client'
import dotenv from 'dotenv'
dotenv.config()

export default function Navbar() {
  const logoImagePath = `${process.env.IMAGES_PATH}buildOnlineLogo.png`
  return (
    <div className='fixed top-10 left-0 w-full bg-black z-0 bg-black'>
      <div className='flex flex-row justify-between bg-white h-16 rounded-3xl mx-6'>
        <div className='flex flex-row w-48'>
          <img src={logoImagePath} alt="error getting image" className='w-6 h-6 mb-6 mt-auto ml-8 mr-0.5'/>
          <p className='mb-5 mt-auto ml-0 mr-0 font-bold font-sans text-l text-gradient'>uildOnline</p>
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
