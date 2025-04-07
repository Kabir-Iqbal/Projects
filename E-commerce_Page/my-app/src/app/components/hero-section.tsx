"use client"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Sliting from "./Swiper";
import Categorie from "./catogry";
import BestSelling from "./bestselling";
import ExploreProducts from "./explore";
import Arrival from "./arrival";




function Hero() {
    return (
        <>
            <div className="w-[90%] mx-auto   " >
                {/* Dashboard  of Hero page */}
                <div className="flex justify-between" >
                    {/* left-section */}
                    <div className="border-r-[1px] px-4 border-slate-400 w-[227px] " >
                        <ul className="pt-10 space-y-4 text-sm cursor-pointer "  >
                            <li className="flex items-center justify-between " >Woman’s Fashion <MdOutlineKeyboardArrowRight className="text-xl" /> </li>
                            <li className="flex items-center justify-between " >Men’s Fashion <MdOutlineKeyboardArrowRight className="text-xl" /> </li>
                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li> Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>
                        </ul>
                    </div>
                    {/* right section  */}
                    <div className="pt-10" >
                        <Image className="w-[892px] h-[320px] "
                            src="/images/frame1.png" alt="Mobile" width={400} height={200} />
                    </div>
                </div>

                {/* Sales-page */}
                <div>

                    <Sliting />
                </div>

                {/* Catogry page  */}
                <Categorie />
                {/* Best selling page */}
                <BestSelling />

                {/* Banner */}
                <div>
                    <Image className="h-[500px] mx-auto w-[80%] mt-0 "
                        src="/images/musicpic.png" width={300} height={300} alt="Music" />
                </div>
                {/* Explore products */}

                <ExploreProducts />

                {/* New Arrival */}
                <Arrival />
            </div>
        </>
    )
}

export default Hero
