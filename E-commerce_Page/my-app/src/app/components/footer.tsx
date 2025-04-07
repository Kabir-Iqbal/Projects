import { MdOutlineArrowRight } from "react-icons/md";
import Image from "next/image";


function Footer() {
    return (
        <>
            <div className="bg-black flex flex-col text-white h-[440px]" >
                <div className=" h-full flex items-center " >

                    <div className="flex w-[80%] mx-auto  gap-7  " >
                        <div className="w-[30%] mx-2 " >
                            <p>
                                Exclusive <span className="text-sm text-slate-300" > <br /> Subscribe <br /> Get 10% off your first order</span>
                            </p>
                            <div className="flex gap-1 mt-1 bg-black border-[1px]  rounded-sm text-white " >
                                <input className="bg-black px-1  py-2" type="email" placeholder="Enter your Gmail" name=" gmail" id="email" />
                                <MdOutlineArrowRight className="text-4xl  " />
                            </div>
                        </div>
                        <div className="w-[20%] " >
                            <p>Support  <span className="text-sm mt-1 text-slate-300" > <br /> 111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh. <br /> exclusive@gmail.com <br /> +88015-88888-9999</span>
                            </p>
                        </div>
                        <div className="w-[20%] " >
                            <p>Account <span className="text-sm mt-1 text-slate-300 " > <br /> My Account <br /> Login / Register  <br /> Cart <br /> Wishlist <br /> Shop</span>
                            </p>
                        </div>
                        <div className="w-[20%] flex  " >
                            <p>Quick Link  <span className="text-sm mt-1 text-slate-300 " > <br /> Privacy Policy  <br /> Terms Of Use  <br /> FAQ  <br /> Contact </span>

                            </p>
                        </div>
                        <div className="w-[20%] grid grid-cols-1 " >
                            <p>Download App</p> <span className="text-[10px] mt-1 text-slate-300" > <br /> Save $3 with App New User Only</span>
                            <div className="grid grid-cols-2" >
                                <Image src="/images/Qcode.png" alt="QR Code" width={76} height={76} />
                                <div className="flex flex-col gap-2" >
                                <Image src="/images/google.png" alt="Google app" width={110} height={40} />
                                <Image src="/images/AppStore.png" alt="Appstore" width={110} height={40} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <p className="text-center text-sm text-slate-300 py-2 " > @Copyright Rimel 2022. All right reserved </p>
            </div>
        </>
    )
}

export default Footer
