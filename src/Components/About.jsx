import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function About() {
  return (
    <>
        <section className='bg-mainColor text-white min-h-screen flex items-center mt-20 overflow-hidden'>
            <div className="container m-auto">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-bold text-center'>ABOUT COMPONENT</h1>
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5 text-center">
                            <div className='h-1 w-24 bg-white'></div>
                            <FaStar className='text-3xl' />
                            <div className='h-1 w-24 bg-white'></div>
                    </div>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 px-16'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
