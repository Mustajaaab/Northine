import Pseudo from '../../assets/images/pseudo.png'
import Shades from '../../assets/images/white-shades.png'
import Cloud from '../../assets/images/cloud.png'
import Save from '../../assets/images/save.png'
import Pana from '../../assets/images/pana.png'
import Flag from '../../assets/images/flag.png'
import Shades2 from '../../assets/images/white-shades2.png'
function Sec3() {
    return(
        <div className=" bg-[#121820]/5">
            <div className="w-[69%] mx-auto">

                <div className='flex justify-end w-[92%]'>
                    <img src={Shades} alt="" className='w-[203px] h-[140px]' />
                </div>
                <div className=' flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow rounded-full'> </div>
                    <p className="font-syne font-medium text-base ">Discover Our Company</p>
                </div>
                <h1 className='font-syne text-[42px] font-semibold mt-7'>How We <span className='text-yellow'>Collaborate</span> With You</h1>
                <div className='mt-[90px] flex justify-between'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <img src={Pana} alt="" className='w-5 h-5'/>
                            <h3 className='font-syne font-semibold text-lg'>Thinking Big</h3>
                        </div>
                        <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne mt-7'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna <br />
                        aliqua.</p>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <img src={Flag} alt="" className='w-5 h-5'/>
                            <h3 className='font-syne font-semibold text-lg'>Starting Small</h3>
                        </div>
                        <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne mt-7'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna <br />
                        aliqua.</p>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <img src={Save} alt="" className='w-5 h-5'/>
                            <h3 className='font-syne font-semibold text-lg'>Creating Fast</h3>
                        </div>
                        <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne mt-7'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna <br />
                        aliqua.</p>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <img src={Cloud} alt="" className='w-5 h-5'/>
                            <h3 className='font-syne font-semibold text-lg'>Innovating Scale</h3>
                        </div>
                        <p className='text-[#121820]/40 leading-[25.5px] text-[15px] font-syne mt-7'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna <br />
                        aliqua.</p>
                    </div>
                </div>
                <div className='justify-between flex pt-[107px]'>
                    <div className='flex gap-[14px] items-center group'>
                        <button className='font-syne font-semibold text-base group-hover:text-yellow ease-out duration-300 group-hover:scale-110 '>Learn More</button>
                        <button className='w-[35px] h-[35px] rounded-full text-white bg-yellow group-hover:bg-black ease-out duration-300 group-hover:scale-110'>🡺</button>
                    </div>
                    <button className='font-sans text-base py-5 px-14 border-[2px] border-yellow hover:bg-yellow rounded-full hover:text-white ease-out duration-300 hover:scale-110'>How We Work</button>
                </div>
                <div className='flex justify-end w-[40%]'>
                    <img src={Shades2} alt="" className='w-[203px] h-[140px]'/>
                </div>
            </div>
        </div>
    )
}
export default Sec3