

"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';

import Style from "./swiper.module.css"



// Icons
import { CiHeart } from "react-icons/ci";
import { TiEyeOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function  ExploreProducts() {
    return (
        <>

            <div className="flex w-[90%] h-auto   mt-28 text-buttoncolor " >
                <div className="w-[15px] h-[27px] bg-buttoncolor rounded-sm " ></div>
                Our Products
            </div>

            <div className=" flex flex-col gap-10   " >
                <div className="flex h-10 items-center mt-7 gap-24 justify-between " >
                        <h2 className="text-black font-bold text-2xl" >Explore Our Products</h2>
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
                    slidesPerView={4}
                    spaceBetween={30}
                grid={{
                    rows : 2,
                    fill : 'row'
                }}
                    navigation={{
                        nextEl: `.swiper-button-next`, // Targets the next button
                        prevEl: '.swiper-button-prev', // Targets the previous button
                    }}
                    modules={[Navigation,Grid]}
                    className="mySwiper"
                >
                    {/* card1 */}
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
                                    <Image className=' w-full my-1 h-36  ' src="/images/choclate.png" alt="Breed Dry Dog Food" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Breed Dry Dog Food
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide >
                    {/* card2 */}
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
                                    <Image className=' w-full my-1 h-36 ' src="/images/camera.png" alt="DSLR Camera" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Canon EOS DSLR Camera
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Card3 */}
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
                                    <Image className=' w-full my-1 h-36 ' src="/images/laptop.png" alt="ASUS Gaming laptop" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    ASUS FGHD Gaming Laptop
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* card4 */}
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
                                    <Image className=' w-full my-1 h-36 ' src="/images/remotepic.png" alt="Cuorology product set" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Cuorology Product Set
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* card 5 */}

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
                                    <Image className=' w-full my-1 h-36 ' src="/images/keyboard.png" alt="Stylish keyboard" width={20} height={20} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Stylish Keyboard
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Card 6 */}
                    <SwiperSlide className='mt-10'>
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-green-400  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-36 ' src="/images/car.png" alt="Kids electric car" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Kids electric car
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Card 7 */}
                    


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
                                    <Image className=' w-full my-1 h-36 ' src="/images/shoes.png" alt="Jr.zoom Soocer cleats" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Jr.zoom Soocer cleats
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                 {/* Card 8 */}
                    <SwiperSlide className='mt-10'>
                        <div className='flex flex-col h-72  bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='bg-slate-200 px-2 ' >
                                <div className='flex justify-between  ' >
                                    <div className='bg-green-400  my-1 w-16 h-6 text-center text-white' > -40% </div>
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className=' w-full my-1 h-36 ' src="/images/black remote.png" alt=" GP11 Shooter Usb Gamepad" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    GP11 Shooter Usb Gamepad
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* card9 */}
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
                                    <Image className=' w-full my-1 h-36 ' src="/images/yelowjacket.png" alt=" Qualified sampin jocket" width={100} height={100} />

                                </div>
                            </div>


                            <div>
                                <div className='text-sm gap-1 flex flex-col my-2 px-1 ' >
                                    Qualified sampin jocket
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                   
                    {/* Card 10 */}
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
                                    <Image className=' w-full my-1 h-36 ' src="/images/remote.png" alt="remote-pic" width={100} height={100} />

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
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className=' text-center my-10' >
                <button className='  text-center   bg-buttoncolor text-sm px-5 py-2  text-white ' > View All Products </button>
            </div>

        </>
    )
}

export default ExploreProducts
