"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import Style from "./swiper.module.css"



// Icons
import { CiHeart } from "react-icons/ci";
import { TiEyeOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function Sliting() {

    return (
        <>

            <div className="flex w-[90%]  mt-28 text-buttoncolor " >
                <div className="w-[15px] h-[27px] bg-buttoncolor rounded-sm " ></div>
                Today`s
            </div>

            <div className=" flex flex-col gap-10   " >
                <div className="flex h-10 items-center mt-7 gap-24 justify-between " >
                    <div className='flex gap-14 items-center ' >
                        <h2 className="text-black font-bold text-2xl" >Flash Sales</h2>
                        <div className="flex gap-6  text-sm " >
                            <div >
                                Days
                                <p className="text-3xl font-bold " >03</p>
                            </div>
                            {/* Dots */}
                            <div className="flex flex-col gap-4 text-3xl text-buttoncolor " >
                                <div className="w-1 h-1 " >.</div>
                                <div className="w-1 h-1 " >.</div>
                            </div>

                            <div>
                                Hours
                                <p className="text-3xl font-bold " >23</p>
                            </div>
                            {/* Dots */}
                            <div className="flex flex-col gap-4 text-3xl text-buttoncolor " >
                                <div className="w-1 h-1 " >.</div>
                                <div className="w-1 h-1 " >.</div>
                            </div>

                            <div>
                                Minutes
                                <p className="text-3xl font-bold " >19</p>
                            </div>
                            {/* Dots */}
                            <div className="flex flex-col gap-4 text-3xl text-buttoncolor " >
                                <div className="w-1 h-1 " >.</div>
                                <div className="w-1 h-1 " >.</div>
                            </div>

                            <div>
                                Seconds
                                <p className="text-3xl font-bold " >56</p>
                            </div>

                        </div>

                    </div>
                    <div className='relative  ' >
                        <div className='absolute  flex right-3 gap-3 mx-4 mb-10 cursor-pointer ' >
                            <button className='swiper-button-prev translate-y-[-50%] cursor-pointer z-10  ' > <FaArrowLeft className="text-xl text-black hover:text-gray-600" /></button>
                            <button className='swiper-button-next translate-y-[-50%] cursor-pointer z-10  '  > <FaArrowRight className='text-xl text-black hover:text-gray-600' /> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="  " >




                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={30}
                    navigation={{
                        nextEl: `.swiper-button-next`, // Targets the next button
                        prevEl: '.swiper-button-prev', // Targets the previous button
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='mt-10' >
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black   ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-buttoncolor  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' z-10 w-full my-1 h-[25%] ' quality={100} src="/images/remote.png" alt="remote-pic" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    HAVIT HV-G92 Gamepaid
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide >
                    <SwiperSlide className='mt-10' >
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-buttoncolor  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-[25%] ' src="/images/keyboard.png" alt="keyboard pic" quality={100} width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                AK-900 Wired Keyboard
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10'>
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-buttoncolor  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-[25%] ' src="/images/lcd.png" alt="LCD-pic" quality={100} width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                IPS LCD Gaming Monitor
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10'>
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-buttoncolor  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-[25%] ' src="/images/chair.png" alt="Chair-pic" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                S-Series Comfort Chair 
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10'>
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-buttoncolor  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-[25%] ' src="/images/chair.png" alt="chair-pic" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                S-Series Comfort Chair 
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10'>
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-buttoncolor  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-[25%] ' src="/images/lcd.png" alt="LCD-pic" quality={100} width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                IPS LCD Gaming Monitor
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className=' text-center my-10' >
                <button className='  text-center   bg-buttoncolor text-sm px-4 py-1  text-white ' > View All Products </button>
            </div>

        </>
    )
}

export default Sliting
