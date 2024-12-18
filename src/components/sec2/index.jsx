import Photo1 from '../../assets/images/1.png'
import Photo2 from '../../assets/images/2.png'
import Photo3 from '../../assets/images/3.png'
import Photo4 from '../../assets/images/4.png'
import Photo5 from '../../assets/images/5.png'
import Photo6 from '../../assets/images/6.png'
import Shades from '../../assets/images/white-shades.png'
import Cloud from '../../assets/images/cloud.png';
import Bell from '../../assets/images/bell.png'
import Setting from '../../assets/images/setting.png'
import File from '../../assets/images/file.png'
import Spark from '../../assets/images/spark.png'
import Save from '../../assets/images/save.png'
import { CiCloud,CiBellOn,CiSettings,CiFolderOn } from "react-icons/ci";

function Sec2() {
    const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];
    return (
        <>
            <div className="container pl-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto py-20">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110"
                    />
                ))}
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1'>
                <div className='w-[2%] h-[2px] bg-[#fdcb22]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#fdcb22]'></div>
            </div>
            <div className='w-[55%] mx-auto flex justify-end'>
                <img src={Shades} alt="" className='w-[203px] h-[140px]' />
            </div>
            <div className='w-[70%] mx-auto'>
                <h1 className='font-syne font-semibold text-[42px] leading-[58px]'>How We Can <span className='text-[#fdcb22]'>Help You</span></h1>

                <div className='flex items-center gap-2 mt-14'>
                    <div className='w-[50%]'>
                        <p className='font-syne font-semibold text-[22px] leading-8 w-[50%] '>IT Services</p>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>
                        <div className='flex gap-[121px] mt-[30px] relative '>
                            <CiCloud className='w-[45px] h-[45px] ml-[30px] z-10' />
                            <span className='w-5 h-5  bg-yellow rounded-full absolute top-6 left-14 '></span>
                            <div>
                                <div className='flex gap-3'>
                                    <div className='text-[#fdcb22] font-semibold text-lg font-syne'>01</div>
                                    <h2 className='font-semibold font-syne text-lg'>End-to-End Support</h2>
                                </div>
                                <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>From design to execution, receive full support in UI/UX designing, <br /> digital marketing, website development, and bookkeeping.	</p>
                            </div>
                        </div>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>
                        <div className='flex gap-[121px] mt-[30px]'>
                        <div className=' flex relative'>
                            <CiBellOn className='w-[45px] h-[45px] ml-[31px] z-10'  />
                            <span className='w-5 h-5  bg-yellow rounded-full absolute top-6 left-14 '></span>
                        </div>
                        <div>
                            <div className='flex gap-3'>
                                <div className='text-[#fdcb22] font-semibold text-lg font-syne'>02</div>
                                <h2 className='font-semibold font-syne text-lg'>Digital Learning Solutions</h2>
                            </div>
                            <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Equip your team with digital learning solutions for efficient <br /> skill-building and better internal processes.</p>
                        </div>
                        </div>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>

                        <div className='flex gap-[121px] relative '>
                        <CiFolderOn className='w-[45px] h-[45px] ml-[31px] mt-7 z-10' />
                        <span className='w-5 h-5  bg-yellow rounded-full absolute top-12 left-16 '></span>
                        <div>
                            <div className='flex gap-3 mt-[30px]'>
                                <div className='text-[#fdcb22] font-semibold text-lg font-syne'>03</div>
                                <h2 className='font-semibold font-syne text-lg'>Streamlined Processes</h2>
                            </div>
                            <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Simplify your financial operations with smart bookkeeping <br /> tools, ensuring accuracy and saving time.
                            </p>
                        </div>
                        </div>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div> 
                        <div className='flex gap-[121px] mt-[30px]'>
                        <img src={File} alt="" className='w-[45px] h-[45px] ml-[31px]' />
                        <div>
                            <div className='flex gap-3'>
                                <div className='text-[#fdcb22] font-semibold text-lg font-syne'>04</div>
                                <h2 className='font-semibold font-syne text-lg'>AI & IoT Services</h2>
                            </div>
                            <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Optimize your business with the latest in artificial intelligence <br />and IoT solutions to enhance your digital presence.
                            </p>
                        </div>
                        </div>
                    </div>
                
                    <div>
                        <p className='font-syne font-semibold text-[22px] leading-8'>IT Solutions</p>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>
                        <div className='flex gap-[121px] mt-[30px] relative'>
                            <CiSettings className='w-[45px] h-[45px] ml-[31px] z-10' />
                            <span className='w-5 h-5  bg-yellow rounded-full absolute top-6 left-14 '></span>
                            <div>
                                <div className='flex gap-3'>
                                    <div className='text-[#fdcb22] font-semibold text-lg font-syne'>01</div>
                                    <h2 className='font-semibold font-syne text-lg'>Web Development</h2>
                                </div>
                                <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Deliver responsive, sleek platforms built for speed and functionality. <br />Explore innovative possibilities with digital web solutions tailored <br /> for growth.</p>
                            </div>
                        </div>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>
                        <div className='flex gap-[121px] mt-[30px]'>
                        <img src={Spark} alt="" className='w-[45px] h-[45px] ml-[31px]' />
                        <div>
                            <div className='flex gap-3'>
                                <div className='text-[#fdcb22] font-semibold text-lg font-syne'>02</div>
                                <h2 className='font-semibold font-syne text-lg'>UI/UX Designing</h2>
                            </div>
                            <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Craft interfaces that connect users to brands seamlessly. <br />Bold designs by a digital solution tech company ensure intuitive <br />user experiences.</p>
                        </div>
                        </div>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>
                        <div className='flex gap-[121px] mt-[30px]'>
                            <img src={Save} alt="" className='w-[45px] h-[45px] ml-[31px]' />
                            <div>
                                <div className='flex gap-3'>
                                    <div className='text-[#fdcb22] font-semibold text-lg font-syne'>03</div>
                                    <h2 className='font-semibold font-syne text-lg'>Digital Marketing</h2>
                                </div>
                                <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Boost visibility with tailored strategies. Drive measurable outcomes <br />using innovative custom strategies by a trusted digital solutions <br />company.</p>
                            </div>
                        </div>
                        <div className="flex gap-1 w-full mt-[60px] h-5">
                            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                            <div className="w-[96%] h-[2px] bg-gray-300"></div>
                        </div>
                        <div className='flex gap-[121px] mt-[30px]'>
                        <img src={Save} alt="" className='w-[45px] h-[45px] ml-[31px]' />
                        <div>
                            <div className='flex gap-3'>
                                <div className='text-[#fdcb22] font-semibold text-lg font-syne'>04</div>
                                <h2 className='font-semibold font-syne text-lg'>Bookkeeping Services</h2>
                            </div>
                            <p className='text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20'>Simplify financial management with accurate record-keeping <br />and reporting. Trusted by businesses, digital solutions pvt ltd services <br /> ensure efficiency.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-[69%] flex mx-auto mt-[90px] pb-3 gap-1'>
                <div className='w-[2%] h-[2px] bg-[#fdcb22]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#fdcb22]'></div>
            </div>
            <div className='w-[10%] mx-auto flex justify-end'>
                <img src={Shades} alt="" className='w-[203px] h-[140px]' />
            </div>

        </>
    )
}
export default Sec2