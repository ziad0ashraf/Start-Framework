import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function Contact() {
  return (
    <>
        <section className='text-secondColor min-h-screen mt-20'>
            <div className="container m-auto py-14">
                <div className='text-center'>
                    <h1 className='font-bold text-5xl'>CONTACT SECTION</h1>
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                            <div className='h-1 w-24 bg-secondColor'></div>
                            <FaStar className='text-3xl' />
                            <div className='h-1 w-24 bg-secondColor'></div>
                    </div>
                </div>
                <div className='flex justify-center my-16'>
                    <div className='flex flex-col gap-14 lg:w-2/4 w-full'>      
                        <div className='relative flex flex-col'>
                        <input type="text" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Name'/>
                        <label className='text-mainColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Name</label>
                        </div>              
                        <div className='relative flex flex-col'>
                        <input type="text" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Age'/>
                        <label className='text-mainColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Age</label>
                        </div>              
                        <div className='relative flex flex-col'>
                        <input type="text" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Email'/>
                        <label className='text-mainColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Email</label>
                        </div>              
                        <div className='relative flex flex-col'>
                        <input type="password" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Password'/>
                        <label className='text-mainColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Password</label>
                        </div>    
                        <button className='bg-mainColor w-32 py-2 rounded-md text-white active:scale-95 duration-200'>Send Message</button>          
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}



