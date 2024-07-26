import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { TbWorld } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer className='text-white'>
        <section className='bg-secondColor p-20'>
            <div className="container m-auto text-center">
                <div className="grid lg:grid-cols-3 md:gird-cols-3 sm:grid-cols-1 gap-5">
                    <div>
                        <h3 className='text-3xl font-semibold'>LOCATION</h3>
                        <p className='my-3'>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold'>AROUND THE WEB</h3>
                        <div className='flex justify-center gap-3 my-3 cursor-pointer'>
                        <FaFacebook className='border-1 p-2 text-4xl rounded-full'/>
                        <FaTwitter className='border-1 p-2 text-4xl rounded-full'/>
                        <FaLinkedin className='border-1 p-2 text-4xl rounded-full'/>
                        <TbWorld className='border-1 p-2 text-4xl rounded-full'/>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold'>ABOUT FREELANCER</h3>
                        <p className='my-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='bg-thirdColor p-5'>
            <div className='text-center'>Copyright © Your Website 2021</div>
        </section>
    </footer>
  )
}
