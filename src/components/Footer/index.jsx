import Orange from '../../assets/images/orange.png'
import Attach from '../../assets/images/attach.png'
import No9 from '../../assets/images/no9.png'
import Googleplay from '../../assets/images/googleplay.png'
import Appstore from '../../assets/images/appstore.png'
import BGDot from '../../assets/images/dotmap.png'

function Footer() {
    return(
        <div className='bg-gradient-to-b from-gradientStart to-gradientEnd '>
            <div className='flex justify-end w-[88%]'>
                <img src={Orange} alt="" className='w-[220px] h-[140px]'/>
            </div>
            <div className='w-[69%] mx-auto'>
                <div>
                    <h1 className='text-white font-syne font-semibold text-[42px]'>Contact <span className='text-[#F57C00]'>Us</span></h1>
                    <div className='flex'>
                        <div className='w-[50%]'>
                            <div className='flex gap-3 items-center mt-24'>
                                <p className='text-white font-syne font-medium text-[15px]'>Name</p>
                                <p className='text-[#F57C00] font-syne font-medium text-[15px]'>Required</p>
                            </div>
                            <input type="text" className='text-base mt-5 w-full bg-[#181E26] h-[50px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-[#F57C00] focus:ring-[#F57C00] focus:ring-1'  />
                            <div className='flex gap-3 items-center mt-[30px]'>
                                <p className='text-white font-syne font-medium text-[15px]'>Email Adress</p>
                                <p className='text-[#F57C00] font-syne font-medium text-[15px]'>Required</p>
                            </div>
                            <input type="email" className='text-base mt-5 w-full bg-[#181E26] h-[50px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-[#F57C00] focus:ring-[#F57C00] focus:ring-1'  />
                            <div className='flex gap-3 items-center mt-[30px]'>
                                <p className='text-white font-syne font-medium text-[15px]'>Phone</p>
                                <p className='text-[#FFFFFF]/50 font-syne font-medium text-[15px]'>Required</p>
                             </div>
                            <input type="number" className='text-base mt-5 w-full bg-[#181E26] h-[50px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-[#F57C00] focus:ring-[#F57C00] focus:ring-1'  />
                            <button className='flex items-center gap-[14px] mt-14'>
                                <img src={Attach} alt="" className='w-[15px] h-[25px]'/>
                                <div>
                                    <p className='font-syne font-normal text-[15px] text-white'>Attach Your File</p>
                                    <p className='font-syne font-normal text-[13px] text-left text-white/50'>up to 20MB</p>
                                </div>
                            </button>
                        </div>
                        <div className='mt-24 ml-8 w-[50%]'>
                            <div>
                                <p className='text-white font-syne text-[15px font-medium]'>Message <span className='text-[#F57C00]'>Required</span></p>
                                <input type="text" className='text-base mt-5 w-full bg-[#181E26] h-[295px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-[#F57C00] focus:ring-[#F57C00] focus:ring-1'  />
                                <p className='font-syne font-normal text-[13px] text-white/50 pt-[30px]'>We will process your personal information in accordance with our Privacy Policy.</p>
                                <div className='flex items-center gap-3 mt-[10px]'>
                                    <input type="checkbox" 
                                    className=" h-5 w-5 bg-[#181E26] border-[#181E26] rounded focus:border[#181E26] focus:ring-1" />
                                    <label className="font-syne font-normal text-[13px] leading-[32px] text-white">I would like to be contacted with news and updates about your events and services</label>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <button className='mt-[60px] text-base font-normal text-center font-syne py-[25px] px-[580px] rounded-full bg-[#F57C00] ease-in-out duration-300 transition-transform hover:scale-105'>
                        Send Message Now
                    </button>
                    
                    <div className="relative">
                        {/* Background image */}
                            <div style={{ backgroundImage: `url(${BGDot})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 opacity-30"></div>
                         {/* Content */}
                        <div className="relative z-10">
                        <img src={No9} alt="" className='w-[140px] h-[40px] mt-32'/>
                        <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-white/50 font-normal font-syne leading-[25px] text-[15px] mt-[38px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing <br />
                            elit, sed diam nonummy nibh euismod tincidunt ut <br />
                            laoreet dolore magna aliquam erat volutpat.</p>
                            <div className='flex mt-[48px] gap-14'>
                                <div className='flex items-center gap-2'>
                                    <img src={Googleplay} alt="" className='w-8 h-8'/>
                                    <div>
                                        <p className='text-[#F57C00] font-syne font-normal text-[13px]'>Available on the</p>
                                        <p className='text-white font-syne font-semibold text-base'>Google Play</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={Appstore} alt="" className='w-8 h-8'/>
                                    <div>
                                        <p className='text-[#F57C00] font-syne font-normal text-[13px]'>Available on the</p>
                                        <p className='text-white font-syne font-semibold text-base'>Google Play</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-white font-semibold leading-[50px] text-4xl font-syne mt-[30px]'>Join The <span className='text-[#F57C00]'>Northnine</span> <br />
                            Experience</h1>
                            <p className='font-syne font-normal text-[15px] leading-[25px] text-white/50 mt-[30px]'>Lorem ipsum dolor sit amet, consectetuer <br />
                            adipiscing elit, sed diam nonummy.</p>
                        </div>
                        <div>
                            <button className='text-[#121820]/30 bg-white font-syne text-[15px] font-normal w-[302px] py-[25px] rounded-full hover:text-[#F57C00] ease-in-out duration-300 transition-transform hover:scale-105'>Your Email Address</button> <br />
                            <button className='mt-2 bg-[#F57C00] font-syne text-[15px] font-normal w-[302px] py-[25px] rounded-full hover:text-[#121820]/30 ease-in-out duration-300 transition-transform hover:scale-105'>Subscribe Now</button>
                        </div>
                    </div>
                    <div className='flex mt-[120px] pb-3 gap-1'>
                        <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                        <div className='w-[96%] h-[2px] bg-[#FFFFFF]/30'></div>
                        <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                    </div>
                    <div className='flex justify-between items-center mt-[50px]'>
                        <ul className='flex gap-7 items-center'>
                            <li className='font-syne text-[15px] font-normal text-white'>FaceBook</li>
                            <li className='font-syne text-[15px] font-normal text-white'>Instagram</li>
                            <li className='font-syne text-[15px] font-normal text-white'>Linkedin</li>
                            <li className='font-syne text-[15px] font-normal text-white'>Twitter</li>
                            <li className='font-syne text-[15px] font-normal text-white'>Youtube</li>
                        </ul>
                        <ul className='flex gap-7 items-center'>
                            <li className='font-syne text-[15px] font-normal text-white'>Terms and Conditions</li>
                            <li className='font-syne text-[15px] font-normal text-white'>Privacy Policy</li>
                            <li className='font-syne text-[15px] font-normal text-white'>Sitemap</li>
                        </ul>
                    </div>
                         </div>
                    </div>
                    <div className='flex items-center justify-between mt-[40px] pb-[30px]'>
                        <p className='text-white/10 font-syne font-normal text-[13px] '>©Northnine 2024.</p>
                        <p className='text-white/10 font-syne font-normal text-[13px] '>All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer