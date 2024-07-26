import React, {useState } from 'react'
import port1 from '../assets/port1.png'; 
import port2 from '../assets/port2.png'; 
import port3 from '../assets/port3.png';
import { FaPlus } from "react-icons/fa6"; 
import { FaStar } from "react-icons/fa6";

export default function Portfolio() {
    const [boxImg, setBoxImg] = useState(false);
    const [Image, setImage] = useState();
  
    function getSrc(src) {
        setImage(src)
        setBoxImg(!boxImg)
    }
  
    return (
      <>
        <section className='text-secondColor min-h-screen mt-20 overflow-hidden'>
          <div className="container m-auto py-12">
            <div className='text-center'>
              <h1 className='font-bold text-5xl'>PORTFOLIO COMPONENT</h1>
              <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                <div className='h-1 w-24 bg-secondColor'></div>
                <FaStar className='text-3xl' />
                <div className='h-1 w-24 bg-secondColor'></div>
              </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
              {[port1, port2, port3, port1, port2, port3].map((src, index) => (
                <div key={index} className='relative cursor-pointer'>
                  <img className='rounded-xl' src={src} alt="" />
                  <div onClick={() => getSrc(src)} className='rounded-2xl bg-mainColor w-full h-full z-30 absolute top-0 opacity-0 hover:opacity-90 duration-500 flex items-center justify-center'>
                    <FaPlus className='text-9xl text-white'/>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`fixed h-full w-full z-50 top-0 left-0 bg-rgbaMainColor ${boxImg ? "flex" : "hidden"} justify-center items-center`}>
            <div onClick={() => setBoxImg(!boxImg)} className="container flex justify-center">
              <img className='rounded-2xl lg:w-1/2' src={Image} alt="" />
            </div>
          </div>
        </section>
      </>
    );
  }


