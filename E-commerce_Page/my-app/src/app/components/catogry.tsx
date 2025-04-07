"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';



// Icons
import { CiMobile1 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function Categorie() {

    return (
        <>

            <div className=" h-[313px] flex flex-col gap-4 mt-10 cursor-pointer   " >
                <div className='flex gap-3' >
                    <div className="w-[15px] h-[27px] bg-buttoncolor rounded-sm " ></div>
                    <p>Categories</p>
                </div>

                <div className='flex justify-between ' >
                    <h2 className="text-black font-bold text-2xl" >Browser Categories</h2>

                    <div className='relative  ' >
                        <div className='absolute  flex right-3 gap-3 mx-4 mb-10 cursor-pointer ' >
                            <button className='swiper-button-prev translate-y-[-50%] cursor-pointer z-10  ' > <FaArrowLeft className="text-xl text-black hover:text-gray-600" /></button>
                            <button className='swiper-button-next translate-y-[-50%] cursor-pointer z-10  '  > <FaArrowRight className='text-xl text-black hover:text-gray-600' /> </button>
                        </div>
                    </div>
                </div>

                <div>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={0}
                        navigation={{
                            nextEl: `.swiper-button-next`, // Targets the next button
                            prevEl: '.swiper-button-prev', // Targets the previous button
                        }}
                        modules={[Navigation]}
                        className="mySwiper">
                        <SwiperSlide  >
                            <div className=' hover:bg-buttoncolor hover:text-white w-[140px] text-center flex flex-col  gap-1 h-[120px] items-center justify-center border-[1px] border-black ' >
                                <CiMobile1 className='text-6xl' />
                                Phones
                            </div>
                        </SwiperSlide >
                        <SwiperSlide  >
                            <div className=' hover:bg-buttoncolor hover:text-white w-[140px] text-center flex flex-col  gap-1 h-[120px] items-center justify-center border-[1px] border-black '>

                                <RiComputerLine className='text-6xl' />
                                Computers
                            </div>
                        </SwiperSlide >
                        <SwiperSlide  >
                            <div className=' hover:bg-buttoncolor hover:text-white w-[140px] text-center flex flex-col  gap-1 h-[120px] items-center justify-center border-[1px] border-black '>

                                <BsSmartwatch className='text-6xl' />
                                SmartWatches
                            </div>
                        </SwiperSlide >
                        <SwiperSlide  >
                            <div className='hover:bg-buttoncolor hover:text-white w-[140px] text-center flex flex-col  gap-1 h-[120px] items-center justify-center border-[1px] border-black '>

                                <CiCamera className='text-6xl' />
                                Camera
                            </div>
                        </SwiperSlide >
                        <SwiperSlide  >
                            <div className='hover:bg-buttoncolor hover:text-white w-[140px] text-center flex flex-col  gap-1 h-[120px] items-center justify-center border-[1px] border-black '>

                                <FaHeadphones className='text-6xl' />
                                HeadPhones
                            </div>
                        </SwiperSlide >
                        <SwiperSlide  >
                            <div className='hover:bg-buttoncolor hover:text-white w-[140px] text-center flex flex-col gap-1 h-[120px] items-center justify-center border-[1px] border-black '>

                                <GrGamepad className='text-6xl' />
                                Games
                            </div>
                        </SwiperSlide >
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default Categorie
