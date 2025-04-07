import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";

function Header() {
    return (
        <div>
            {/* Banner */}
            <header className="flex flex-col  gap-6  text-white  ">
                <div className=" flex justify-between px-8 h-[48px] items-center  bg-black " >
                    <div className="flex-1 text-center text-sm font-normal " >
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <button className="ml-3 text-[16px] font-semibold" >ShopNow </button>
                    </div>
                    <div className="flex" >
                        <p> English  </p>
                        < RiArrowDropDownLine className=" ml-1 text-2xl" />
                    </div>
                </div>
                {/* Navbar */}
                <nav className="text-slate-800 flex justify-between  w-[90%] mx-auto " >
                    <h2 className="text-2xl font-bold" >Exclusive </h2>

                    <div className="flex gap-5" >
                        <Link href="/" > Home</Link>
                        <Link href="" > Contact </Link>
                        <Link href="" >About</Link>
                        <Link href="" >Sign Up</Link>
                    </div>

                    <div className="flex gap-4 items-center" >
                        <p className="flex border-[1px] py-1 px-2 " > <input type="text" placeholder="What are you looking for?" />
                            <CiSearch className="text-xl" />
                        </p>
                        <CiHeart className="text-2xl" />
                        <GrCart className="text-2xl" />
                    </div>
                </nav>
            </header>
            <div className=" w-[1440px] h-[1px] mt-3 bg-gray-400  " ></div>
        </div>
    )
}

export default Header
