import Navbar from "../components/navbar";
import dot from '../assets/images/dot.png'
import orange2 from '../assets/images/orange2.png'
import BGDot from '../assets/images/dotmap.png'
import play from '../assets/images/play.png'
import Shades from '../assets/images/white-shades.png'
import Scope from '../assets/images/scope.png'
import tickk from '../assets/images/tickk.png'
import client1 from '../assets/images/client1.jpg'
import Photo1 from '../assets/images/1.png'
import Photo2 from '../assets/images/2.png'
import Photo3 from '../assets/images/3.png'
import Photo4 from '../assets/images/4.png'
import Photo5 from '../assets/images/5.png'
import Photo6 from '../assets/images/6.png'
import Oldman from '../assets/images/oldman.png'
import save from '../assets/images/save.png'
import bell from '../assets/images/bell.png'
import tic from '../assets/images/tic.png'
import spark from '../assets/images/spark.png'
import setting from '../assets/images/setting.png'

function About() {
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
                            <p className="text-lg font-syne font-[100]">About Us</p>
                        </div>
                        <h1 className="text-5xl font-syne mt-10 font-semibold">ENTERPRISE</h1>
                    </div>
                    <div>
                        <img src={orange2} alt="" className="w-[140px]"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-[67%] mx-auto flex justify-between my-20">
                <h2 className="font-syne text-2xl font-semibold">Lorem ipsum dolor sit amet, <span className="text-[#f67c01]">consectetur adipisicing elit.</span> <br />Esse id nemo qui veritatis dicta inventore itaquequo </h2>
                <div className="flex items-center gap-6">
                    <button className="px-10 py-3 border-[2px] border-[#f67c01] rounded-full font-syne font-medium">Talk To an Expert</button>
                    <button className="flex items-center gap-5">
                        <div className="border-[2px] border-[#f67c01] p-[13px] rounded-full flex justify-center items-center">
                        <img src={play} alt="" className="w-[20px] h-[20px] "/>
                        </div>
                        <p className="font-syne font-medium">Watch Video</p>
                        </button>
                </div>
                </div>
            </div>
            <div className="bg-[#f3f4f2]">
                <div className=" flex justify-center items-end gap-[100px] w-[92%]">
                    <img src={Shades} alt="" className="w-[200px]"/>
                    <div className="flex items-center gap-4">
                        <img src={dot} alt="" className="w-5 h-5"/>
                        <p className="font-syne">Firm Overview</p>
                    </div>
                </div>
                <div className="flex pb-20">
                    <div className="w-[50%] flex justify-end pr-[100px]">
                        <img src={Scope} alt="" className="w-[650px]"/>
                    </div>
                    <div>
                        <h1 className="text-5xl font-syne font-semibold leading-[70px] mt-[60px]">We Specialize in <br />
                        <span className="text-[#f67c01]">Transforming Your Idea</span> or <br /> Business in The Current <br />
                        Digital Era.</h1>
                        <p className="text-black/30 font-syne mt-[60px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem <br />
                        illum sapiente mollitia delectus. Harum libero molestiae eos unde necessitatibus, <br />
                         quasi, explicabo deserunt ex nemo facilis maxime. Nam, fuga rem!</p>
                         <div className="mt-[50px] flex items-end gap-[150px]">
                            <div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10"/>
                                    <p className="text-lg font-syne">Quis suspendisse ultrices gravida.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10"/>
                                    <p className="text-lg font-syne">Consectetur adipiscing elit.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10"/>
                                    <p className="text-lg font-syne">Quis suspendisse ultrices gravida.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10"/>
                                    <p className="text-lg font-syne">Consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <img src={client1} alt="" className="w-20 rounded-full" />
                                <div>
                                    <p className="text-[#f67c01] font-satisfy text-[30px]">Jane Meldrum</p>
                                    <p className="text-black/30 font-syne ">CEO & Co-Founder</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-[40%]">
                <img src={Shades} alt="" className="w-[200px]"/>
            </div>
            <div className="mx-auto w-[69%] flex justify-between items-center">
                <div>
                    <h1 className="text-[64px] font-syne font-semibold">8<span className="text-[#f67c01] ">+</span></h1>
                    <p className="font-syne text-lg ">Years Experience</p>
                    <h2 className="text-[44px] font-syne font-semibold mt-[60px]">We Run All Kinds of IT <br />Services That Vow Your <br />Success</h2>
                </div>
                <div>
                    <h2 className="text-[26px] font-syne font-semibold">Accelerate <span className="text-[#f67c01] ">Innovation</span> with world class tech <br />
                    teams We&apos;ll match you to an entire <span className="text-[#f67c01] ">Remote <br /> Technology</span></h2>

                    <div>
                        <div className="flex items-center gap-8 mt-[40px]">
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">16+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">3+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-[40px]">
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">360+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">520+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[120px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className='flex justify-center items-center gap-[88px] py-[92px]'>
                <img src={Photo1} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110'/>
                <img src={Photo2} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110'/>
                <img src={Photo3} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110'/>
                <img src={Photo4} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110'/>
                <img src={Photo5} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110'/>
                <img src={Photo6} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110'/>
            </div>
            <div className="bg-[#f3f4f2]">
                <div className="flex justify-end w-[85%]">
                    <img src={Shades} alt="" className="w-[200px]"/>
                </div>
                <div className="flex w-[69%] mx-auto justify-between items-center pb-[90px]">
                    <div className="w-[50%]">
                        <img src={Oldman} alt="" className="w-full"/>
                    </div>
                    <div>
                        <div className="flex gap-2 items-center mt-[50px]">
                            <img src={dot} alt="" className="w-3 h-3"/>
                            <p className="font-syne text-lg">IT Enterprise</p>
                        </div>
                        <h1 className="text-5xl font-syne font-semibold mt-[50px]">Our Mission</h1>
                        <p className="mt-[50px] font-syne text-black/30">Many desktop publishing packages and web page editors now use Lorem Ipsum as <br />
                        their default model text, and a search for lorem ipsum will uncover many web sites <br />
                        still in their infancy. Various versions have evolved over the years, sometimes by <br />
                        accident, sometimes on purpose. There are many variations of passages majority.</p>
                        <div className="flex gap-5 items-center mt-[50px]">
                            <img src={dot} alt="" className="w-3 h-3"/>
                            <p className="font-syne text-lg">Accelerate innovation.</p>
                        </div>
                        <div className="flex gap-5 items-center mt-[20px]">
                            <img src={dot} alt="" className="w-3 h-3"/>
                            <p className="font-syne text-lg">With world class tech teams.</p>
                        </div>
                        <div className="flex gap-5 items-center mt-[20px]">
                            <img src={dot} alt="" className="w-3 h-3"/>
                            <p className="font-syne text-lg">Our all service offerings to enhance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[69%] mx-auto mt-[100px]">
                <div className="flex gap-5 items-center">
                    <img src={dot} alt="" className="w-3 h-3"/>
                    <p className="font-syne text-lg">Our all service offerings to enhance.</p>
                </div>
                <h1 className="font-syne font-semibold text-5xl mt-10">Why Work With Us</h1>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[120px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div>
                <div>
                    <img src={save} alt="" />
                    <h2>Top Expertise</h2>
                </div>
                <p>Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum <br />
                iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br />
                feugiat nulla facilisis at vero eros et accumsan.</p>
            </div>
        </>
    )
}

export default About;
