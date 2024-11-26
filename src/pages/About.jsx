import Navbar from "../components/navbar";
import dot from '../assets/images/dot.png'
import orange2 from '../assets/images/orange2.png'
import BGDot from '../assets/images/dotmap.png'
import play from '../assets/images/play.png'
import Shades from '../assets/images/white-shades.png'
import Scope from '../assets/images/scope.png'
import tickk from '../assets/images/tickk.png'
import client1 from '../assets/images/client1.jpg'

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
            <div>
                <h1 className="text-5xl font-syne font-semibold">8<span className="text-[#f67c01] ">+</span></h1>
                <p className="font-syne text-lg mt-3">Years Experience</p>
                <h2 className="text-4xl font-syne font-semibold">We Run All Kinds of IT <br />Services That Vow Your <br />Success</h2>
            </div>
        </>
    )
}

export default About;
