import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
          title: titleRef.current.value,
          location: locationRef.current.value
        })
        setIsSearched(true)
    }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-yellow-500 to-yellow-800 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>
            Over 10000+ jobs to apply
        </h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci obcaecati quidem exercitationem beatae sed inventore ipsa voluptates tenetur repellendus voluptate, reiciendis incidunt? Modi atque aliquid voluptatum consectetur cumque, non saepe exercitationem vel blanditiis provident!
        </p>
        {/* <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'> */}
        <div className='flex flex-col sm:flex-row items-stretch bg-white rounded text-gray-600 max-w-xl  mx-4 sm:mx-auto overflow-hidden'>

            <div className='flex items-center pl-4'>
                <img className='h-4' src={assets.search_icon}/>
                <input ref={titleRef} type="text" placeholder='Search For Jobs' className='max-sm:text-xs p-2 rounded outline-none width: full'/>
            </div>
            <div className='flex items-center pl-4'>
                <img className='h-4' src={assets.location_icon}/>
                <input ref={locationRef} type="text" placeholder='Location' className='max-sm:text-xs p-2 rounded outline-none width: full'/>
            </div>
            <button onClick={onSearch} 
            
            // className='bg-indigo-950 px-6 py-2 rounded text-white m-1'

            className='bg-indigo-950 px-12 py-2 sm:rounded-r rounded-b text-white w-full sm:w-auto'
            >Search</button>
        </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
            <p className='font-medium'>Trusted By</p>
            <img className='h-6' src={assets.accenture_logo} alt="" />
            <img className='h-6' src={assets.adobe_logo} alt="" />
            <img className='h-6' src={assets.amazon_logo} alt="" />
            <img className='h-6' src={assets.microsoft_logo} alt="" />
            <img className='h-6' src={assets.samsung_logo} alt="" />
            <img className='h-6' src={assets.wal} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
