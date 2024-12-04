import Navbar from "../components/navbar";
import dot from '../assets/images/dot.png'
import orange2 from '../assets/images/orange2.png'
import BGDot from '../assets/images/dotmap.png'
import Client1 from '../assets/images/client1.jpg'
import Client2 from '../assets/images/client2.jpg'
import Client3 from '../assets/images/client3.jpg'
import X from '../assets/images/x.png'
import Instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/fb.png'
import linked from '../assets/images/li.png'
import Spark from '../assets/images/spark.png'
import setting from '../assets/images/setting.png'
import person from '../assets/images/person.png'
import marker from '../assets/images/marker.png'
import Orange from "../assets/images/orange.png";
import No9 from "../assets/images/no9.png";
import Googleplay from "../assets/images/googleplay.png";
import Appstore from "../assets/images/appstore.png";
import SAVE from '../assets/images/instaaa.png'

function Team(){


    return(
        <>
       <Navbar/>
            <div
                className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] h-[500px]"
                style={{ backgroundImage: `url(${BGDot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="w-[70%] mx-auto flex justify-between items-center">
                    <div >
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-syne font-medium">Home</p>
                            <img src={dot} alt="" className="w-3 h-3"/>
                            <p className="text-lg font-syne font-[100]">Team</p>
                        </div>
                        <h1 className="text-5xl font-syne mt-10 font-semibold">LEADERSHIP TEAM</h1>
                    </div>
                    <div>
                        <img src={orange2} alt="" className="w-[140px]"/>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-2xl font-semibold font-syne mt-[110px]">The leadership team plays a cruical role <br /> in 
            <span className="text-[#f57000]"> guiding and towards</span> success.</h1>

            <div className="flex justify-center gap-[40px] mt-[80px]">
                <div className="text-center">
                    <img src={Client1} alt="" className="w-[400px] h-[400px] rounded-full grayscale hover:grayscale-0 ease-out duration-300"/>
                    <h1 className="font-syne text-xl font-semibold mt-[24px]">Jane Meldrum</h1>
                    <p className="font-mono text-black/40 text-base font-semibold mt-[8px]">CEO ITSulu</p>
                    <div className="flex mt-1 justify-center gap-2">
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={X} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={linked} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <img src={Client2} alt="" className="w-[400px] h-[400px] rounded-full grayscale hover:grayscale-0 ease-out duration-300"/>
                    <h1 className="font-syne text-xl font-semibold mt-[24px]">Jane Meldrum</h1>
                    <p className="font-mono text-black/40 text-base font-semibold mt-[8px]">CEO ITSulu</p>
                    <div className="flex mt-1 justify-center gap-2">
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={X} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={linked} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <img src={Client3} alt="" className="w-[400px] h-[400px] rounded-full grayscale hover:grayscale-0 ease-out duration-300"/>
                    <h1 className="font-syne text-xl font-semibold mt-[24px]">Jane Meldrum</h1>
                    <p className="font-mono text-black/40 text-base font-semibold mt-[8px]">CEO ITSulu</p>
                    <div className="flex mt-1 justify-center gap-2">
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={X} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={linked} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-[40px] mt-[80px]">
                <div className="text-center">
                    <img src={Client1} alt="" className="w-[400px] h-[400px] rounded-full grayscale hover:grayscale-0 ease-out duration-300"/>
                    <h1 className="font-syne text-xl font-semibold mt-[24px]">Jane Meldrum</h1>
                    <p className="font-mono text-black/40 text-base font-semibold mt-[8px]">CEO ITSulu</p>
                    <div className="flex mt-1 justify-center gap-2">
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={X} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={linked} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <img src={Client2} alt="" className="w-[400px] h-[400px] rounded-full grayscale hover:grayscale-0 ease-out duration-300"/>
                    <h1 className="font-syne text-xl font-semibold mt-[24px]">Jane Meldrum</h1>
                    <p className="font-mono text-black/40 text-base font-semibold mt-[8px]">CEO ITSulu</p>
                    <div className="flex mt-1 justify-center gap-2">
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={X} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={linked} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <img src={Client3} alt="" className="w-[400px] h-[400px] rounded-full grayscale hover:grayscale-0 ease-out duration-300"/>
                    <h1 className="font-syne text-xl font-semibold mt-[24px]">Jane Meldrum</h1>
                    <p className="font-mono text-black/40 text-base font-semibold mt-[8px]">CEO ITSulu</p>
                    <div className="flex mt-1 justify-center gap-2">
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={X} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={linked} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                        <div className="flex h-[40px] w-[40px] bg-[#f2f4f3] justify-center items-center rounded-full">
                            <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[120px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>

            <div className="w-[69%] flex mx-auto mt-[120px] justify-between">
                <h1 className="text-4xl font-syne font-semibold ">Value that <span className="text-[#F57C00]">Leads Us</span></h1>
                <p className="text-lg text-black/40 font-syne">Powerful and easy-to-use solution. With our tools, you can <br />streamline your development process.</p>
            </div>

            <div className="flex justify-center gap-5 mt-28 mb-28">
                <div>
                    <img src={Spark} alt="" className="w-[40px] mx-auto h-[50px]"/>
                    <h1 className="text-lg font-semibold font-syne text-center mt-5"><span className="text-[#F57C00]">01.</span> Productivity</h1>
                    <p className="text-base text-black/40 font-syne text-center mt-6">Top of cutting-edge technology trends & <br />providing great customer experience for <br />businesses and branding.</p>
                </div>

                <div>
                    <img src={setting} alt="" className="w-[50px] mx-auto h-[50px]"/>
                    <h1 className="text-lg font-semibold font-syne text-center mt-5"><span className="text-[#F57C00]">02.</span> Transparency</h1>
                    <p className="text-base text-black/40 font-syne text-center mt-6">We offer a range of features that enable <br />you to create robust applications quickly <br />and efficiently.</p>
                </div>

                <div>
                    <img src={person} alt="" className="w-[60px] mx-auto"/>
                    <h1 className="text-lg font-semibold font-syne text-center mt-5"><span className="text-[#F57C00]">03.</span> Personality</h1>
                    <p className="text-base text-black/40 font-syne text-center mt-6">With our tools, you can streamline your <br />development process and achieve better <br />outcomes.</p>
                </div>

                <div>
                    <img src={marker} alt="" className="w-[60px] mx-auto h-[54px]"/>
                    <h1 className="text-lg font-semibold font-syne text-center mt-5"><span className="text-[#F57C00]">04.</span> Volition</h1>
                    <p className="text-base text-black/40 font-syne text-center mt-6">We offer a range of features that enable <br />you to create robust applications quickly <br />and efficiently.</p>
                </div>
            </div>

            <div className="bg-gradient-to-b from-gradientStart to-gradientEnd">
            <div className="flex justify-end w-[33%]">
                <img src={Orange} alt="" className="w-[220px] h-[140px]" />
            </div>
            <div>
                <div className="flex justify-center">
                <img src={SAVE} alt="" className="w-[50px]" />
                </div>
                <div className="text-center">
                    <p className="text-white font-syne font-semibold text-lg mt-9">Leadership Team</p>
                    <h1 className="text-white font-syne font-semibold text-[43px] mt-5">Let&apos;s <span className="text-[#F57000]">Open the World</span> of IT to You</h1>
                    <p className="text-white/30 font-syne font-medium mt-5">Recognizes exceptional websites with outstanding visual appeal and technical functionality.</p>
                    <button className='border-[2px] border-[#F57000] hover:border-[4px] mt-10 bg-transparent font-syne text-[18px] font-normal w-[302px] hover:py-[23px] py-[25px] rounded-full text-white ease-in-out duration-300 transition-transform'>Book an Appointment</button>
                </div>
            </div>
            <div className="w-[69%] mx-auto">
                <img src={No9} alt="" className='w-[140px] h-[40px] mt-32' />
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-white/50 font-normal font-syne leading-[25px] text-[15px] mt-[38px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing <br />
                            elit, sed diam nonummy nibh euismod tincidunt ut <br />
                            laoreet dolore magna aliquam erat volutpat.</p>
                        <div className='flex mt-[48px] gap-14'>
                            <div className='flex items-center gap-2'>
                                <img src={Googleplay} alt="" className='w-8 h-8' />
                                <div>
                                    <p className='text-[#F57C00] font-syne font-normal text-[13px]'>Available on the</p>
                                    <p className='text-white font-syne font-semibold text-base'>Google Play</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Appstore} alt="" className='w-8 h-8' />
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
                        <p className='font-syne font-normal text-[15px] leading-[25px] text-white/50 mt-[30px]'>Lorem ispum dolor sit amet, consectetuer <br />
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
                <div className='flex items-center justify-between mt-[80px] pb-[30px]'>
                    <p className='text-white/10 font-syne font-normal text-[13px] '>©Northnine 2024.</p>
                    <p className='text-white/10 font-syne font-normal text-[13px] '>All Right Reserved.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Team;