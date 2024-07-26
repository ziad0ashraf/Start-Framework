import React from 'react'
import { LuSearchX } from 'react-icons/lu'

export default function Notfound() {
  return (
    <>
        <section className='bg-mainColor h-lvh flex items-center'>
            <div className='container m-auto text-center flex justify-center items-center flex-col gap-3'>
                <h1 className='text-6xl font-bold'>404 Not Found !</h1>
                <LuSearchX className=' text-8xl text-red-600' />
            </div>    
        </section> 
    </>
  )
}
