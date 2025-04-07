import Image from "next/image"
// icsons
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";


function Arrival() {
    return (
        <>

            <div className="h-fit mb-24 flex flex-col  gap-14 " >
                {/*header  */}
                <div className="flex flex-col gap-3" >
                    <div className='flex gap-3 text-buttoncolor ' >
                        <div className="w-[15px] h-[27px] bg-buttoncolor rounded-sm " ></div>
                        <p> Featured </p>
                    </div>
                    <div className="flex justify-between " >
                        <div className="text-2xl font-bold"> New Arrival </div>
                    </div>
                </div>
                {/* Image section */}
                <div className="grid grid-cols-2 gap-7 " >
                    <Image className=" h-[600px] w-full   "
                        src="/images/arrival-1.png" width={200} height={200} alt="Arrival products" />

                    <div className="grid grid-cols-1 gap-3" >
                        <Image className=" w-full "
                            src="/images/arival-2.png" width={200} height={200} alt="Arrival products" />
                        <div className=" grid grid-cols-2 gap-3 " >
                            <Image className=" w-full h-[284px] "
                                src="/images/arival-3.png" width={200} height={180} alt="Arrival products" />
                            <Image className=" w-full h-[284px] "
                                src="/images/arival-4.png" width={200} height={180} alt="Arrival products" />
                        </div>

                    </div>
                </div>
                {/* Customer support  */}

                <div className="flex gap-20 mt-7 w-[943px]  border-black mx-auto ">
                    <div className=" h-[161px] w-[250] flex flex-col justify-center items-center gap-2 " >
                        <div className="bg-slate-500 w-[80px] h-[80px] rounded-full flex justify-center items-center " >
                            <div className="bg-black text-2xl flex items-center justify-center text-white w-[40px] h-[40px] rounded-full " >
                            <TbTruckDelivery />
                            </div>
                        </div>
                        <p className="font-semibold text-center" > FREE AND FAST DELIVERY <span className="font-normal text-sm mt-1 " > <br/>  Free delivery for all orders over $140 </span> </p>
                    </div>

                    <div className=" h-[161px] w-[250] flex flex-col justify-center items-center gap-2 " >
                        <div className="bg-slate-500 w-[80px] h-[80px] rounded-full flex justify-center items-center " >
                            <div className="bg-black text-2xl flex items-center justify-center text-white w-[40px] h-[40px] rounded-full " >
                            <RiCustomerServiceFill   />
                            </div>
                        </div>
                        <p className="font-semibold  text-center " > 24/7 CUSTOMER SERVICE <span className="font-normal text-sm mt-1 "  > <br/> Friendly 24/7 customer support </span> </p>
                    </div>

                    <div className=" h-[161px] w-[250] flex flex-col justify-center items-center gap-2 " >
                        <div className="bg-slate-500 w-[80px] h-[80px] rounded-full flex justify-center items-center " >
                            <div className="bg-black text-2xl flex items-center justify-center text-white w-[40px] h-[40px] rounded-full " >
                            <VscWorkspaceTrusted />
                            </div>
                        </div>
                        <p className="font-semibold text-center " > MONEY BACK GUARANTEE <span className="font-normal text-sm mt-1 "  > <br/>  We reurn money within 30 days </span> </p>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Arrival
