import Shades from '../../assets/images/white-shades.png'
import Cloud from '../../assets/images/cloud.png'
import Save from '../../assets/images/save.png'
import Pana from '../../assets/images/pana.png'
import flag from '../../assets/images/flag.png'
import Shades2 from '../../assets/images/white-shades2.png'
import pen from '../../assets/images/pen.png'
import thinking from '../../assets/images/thinking.png'
import shuttle from '../../assets/images/shuttle.png'
import innovation from '../../assets/images/innovation.png'

function Sec3() {
    
    return(
        <div className=" bg-[#121820]/5">
            <div className="lg:container w-[92%] mx-auto">

                <div className='flex justify-end w-[92%]'>
                    <img src={Shades} alt="" className='lg:w-[203px] w-[180px] h-[120px] lg:h-[140px]' />
                </div>
                <div className=' flex items-center gap-2 mt-3 lg:mt-0'>
                    <div className='w-2 h-2 bg-yellow rounded-full'> </div>
                    <p className="font-syne font-medium text-base">Discover Our Company</p>
                </div>
                <h1 className='font-syne lg:text-[42px] text-[34px] font-semibold mt-7 leading-10 lg:leading-12 lg:text-left'>How We <span className='text-yellow'>Collaborate</span> With You</h1>

                <div className='mt-[90px] items-center sm:flex sm:justify-evenly'>
                        <div className='lg:flex lg:justify-evenly w-[50%]'>
                            <div className='mt-7 lg:mt-0'>
                                <div className='flex items-center gap-4'>
                                <img src={thinking} alt="" className='w-5 h-5'/>
                                <h3 className='font-syne font-semibold text-lg'>Thinking Big</h3>
                            </div>
                             <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne lg:mt-7 mt-4 w-[280px]'>Transform your bold ideas into powerful digital solutions that create meaningful impact and drive success.</p>
                            </div>
                            <div className='mt-7 lg:mt-0'>
                             <div className='flex items-center gap-4'>
                                <img src={shuttle} alt="" className='w-5 h-5'/>
                                <h3 className='font-syne font-semibold text-lg whitespace-nowrap'>Starting Small</h3>
                            </div>
                            <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne lg:mt-7 mt-4 w-[280px]'>Begin with UI/UX design, website development, and digital marketing to build a strong foundation for future growth</p>
                            </div>
                        </div>
                    <div className='lg:flex lg:justify-evenly w-[50%]'>
                    <div className='mt-7 lg:mt-0'>
                        <div className='flex items-center gap-4'>
                            <img src={pen} alt="" className='w-5 h-5'/>
                            <h3 className='font-syne font-semibold text-lg whitespace-nowrap'>Creating Fast</h3>
                        </div>
                        <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne lg:mt-7 mt-4 w-[280px]'>Implement effective bookkeeping, websites, and marketing strategies to get your business running smoothly.</p>
                    </div>

                    <div className='mt-7 lg:mt-0'>
                        <div className='flex items-center gap-4'>
                            <img src={innovation} alt="" className='w-5 h-5'/>
                            <h3 className='font-syne font-semibold text-lg whitespace-nowrap'>Innovating Scale</h3>
                        </div>
                        <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne lg:mt-7 mt-4 w-[280px]'>Scale your business with cloud computing, digital marketing, AI, and IoT for long-term success and growth.</p>
                    </div>
                    </div>
                </div>

                <div className='lg:justify-between lg:flex-row flex-col flex lg:pt-[107px] items-center gap-7 mx-auto lg:mx-0 lg:w-auto pt-12 pb-24 lg:pb-0'>
                    <div className='flex gap-[14px] items-center group ml-7 lg:ml-0'>
                        <button className='font-syne font-semibold text-base group-hover:text-yellow ease-out duration-300 group-hover:scale-110 '>Contact Now</button>
                        <button className='w-[35px] h-[35px] rounded-full text-white bg-yellow group-hover:bg-black ease-out duration-300 group-hover:scale-110'>🡺</button>
                    </div>
                    <button className='font-sans text-base py-5 px-14 border-[2px] border-yellow hover:bg-yellow rounded-full hover:text-white ease-out duration-300 hover:scale-110 mt-7 lg:mt-0'>How We Work</button>
                </div>

                <div className='lg:flex lg:justify-end lg:w-[40%] w-[95%] hidden'>
                    <img src={Shades2} alt="" className='lg:w-[203px] lg:h-[140px] h-[100px] '/>
                </div>
            </div>
        </div>
    )
}
export default Sec3