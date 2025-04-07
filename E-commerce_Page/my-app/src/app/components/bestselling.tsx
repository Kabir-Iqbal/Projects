import Image from "next/image"

// icons
import { CiHeart } from "react-icons/ci";
import { TiEyeOutline } from "react-icons/ti";



function BestSelling() {
    return (
        <>
        <div>
            <div className="h-[518px] flex flex-col  gap-3  " >

                <div className='flex gap-3 text-buttoncolor ' >
                    <div className="w-[15px] h-[27px] bg-buttoncolor rounded-sm " ></div>
                    <p>  This Month</p>
                </div>
                <div className="flex justify-between " >
                    <div className="text-2xl font-bold"> Best Selling Products </div>
                    <button className="bg-buttoncolor px-2  py-1 text-white "  > View All </button>
                </div>

              {/* Card */}
            <div className=" flex flex-row gap-5  ">
                {/* card1 */}
              <div className='flex flex-col h-72  w-[25%]    bg-gray-100 shadow-sm shadow-black   ' >
                            <div className='bg-slate-200 px-2  ' >
                                <div className='flex justify-end   ' >
                                    
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className='w-full py-1 h-36 ' src="/images/jacket.png" alt="The North Coat" width={100} height={100} />

                                </div>
                            </div>
                            <div>
                                <div className='text-sm gap-1 mt-4 flex flex-col my-2 px-1 ' >
                                    The north Coat
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                    </div>
              

              {/* 2nd */}
              <div className='flex flex-col h-72  w-[25%]    bg-gray-100 shadow-sm shadow-black   ' >
                            <div className='bg-slate-200 px-2  ' >
                                <div className='flex justify-end   ' >
                                    
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className='w-full py-1 h-36 ' src="/images/purse.png" quality={100} alt="Gucci duuffle Bag" width={100} height={100} />

                                </div>
                            </div>
                            <div>
                                <div className='text-sm gap-1 mt-4 flex flex-col my-2 px-1 ' >
                                    Gucci duffle bag
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                    </div>
                    {/* card3 */}
                    <div className='flex flex-col h-72  w-[25%]    bg-gray-100 shadow-sm shadow-black   ' >
                            <div className='bg-slate-200 px-2  ' >
                                <div className='flex justify-end   ' >
                                    
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className='w-full py-1 h-36 ' src="/images/sound.png" alt="The CPU Cooler" quality={100} width={100} height={100} />

                                </div>
                            </div>
                            <div>
                                <div className='text-sm gap-1 mt-4 flex flex-col my-2 px-1 ' >
                                    RGB liquid CPU Cooler
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                    </div>
                  {/* Card 4 */}
                  <div className='flex flex-col h-72  w-[25%]    bg-gray-100 shadow-sm shadow-black   ' >
                            <div className='bg-slate-200 px-2  ' >
                                <div className='flex justify-end   ' >
                                    
                                    <div>
                                        <CiHeart className="text-2xl" />
                                        <TiEyeOutline className="text-2xl" />
                                    </div>
                                </div>

                                <div className='w-[60%] mx-auto ' >
                                    <Image className='w-full py-1 h-36 ' src="/images/bench.png" alt="Small Book Self" quality={100} width={100} height={50} />

                                </div>
                            </div>
                            <div>
                                <div className='text-sm gap-1 mt-4 flex flex-col my-2 px-1 ' >
                                    Small Book Self
                                    <p className='text-buttoncolor' > $120 <span className='text-gray-600' >$160</span> </p>
                                    <p className='text-yellow-500' >stars <span className='text-gray-400' > 68 </span> </p>
                                </div>
                            </div>
                    </div>
                </div>    
              </div>
        </div>
        </>
    )
}

export default BestSelling
