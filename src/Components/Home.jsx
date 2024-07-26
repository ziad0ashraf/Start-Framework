import React from 'react';
import avatar from '../assets/avataaars.svg'; 
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    <>
        <section className='bg-mainColor text-white min-h-screen flex items-center mt-20'>
            <div className="container m-auto">
                <div className='flex flex-col text-center justify-center items-center'>
                    <img className='w-1/5' src={avatar} alt="avatar" />
                    <div className='m-8'>
                        <h1 className='text-5xl font-bold'>START FRAMEWORK</h1>
                        <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                            <div className='h-1 w-24 bg-white'></div>
                            <FaStar className='text-3xl' />
                            <div className='h-1 w-24 bg-white'></div>
                        </div>
                        <div className='font-semibold'>Graphic Artist - Web Designer - Illustrator</div>
                    </div>
                </div>
            </div>
            </section>
    </>
  );
}
