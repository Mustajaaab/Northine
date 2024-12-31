import { useState, useEffect } from "react";
import office from "../../assets/images/office.jpg";
import officeStuf from "../../assets/images/officeStuf.jpg";
import code from "../../assets/images/code.jpg";

function Sec1() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [office, code, officeStuf];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div
        className="relative bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgrounds[backgroundIndex]})`,
        }}
      >

                <div className="container mx-auto flex justify-between items-center max-w-[1170px] 2xl:max-w-[1370px]">
                    <div className="lg:pt-64 pt-32 pb-[171px] animate-fadeInSlideDown">
                        <h3 className="text-white font-syne text-lg text-center lg:text-left">
                            <span className="text-[#fdcb22]">Northnine</span> Pvt Ltd
                        </h3>
                        <h1 className="text-white text-6xl font-semibold leading-[84px] font-syne mt-12 animate-fadeInSlideDown text-center lg:text-left">
                            Your Partner in Smart <br />
                            Digital Solutions{" "}
                            <span className="font-satisfy text-[#fdcb22]">Tech</span>
                        </h1>
                        <div className="lg:flex mt-14 text-center lg:text-left items-center">
                            <p className="order-1 lg:order-2 mb-10 lg:mb-0 font-normal text-[15px] leading-[25.5px] pl-0 lg:pl-16 text-white">
                                Create user-friendly websites, attract more customers, <br />
                                and keep your finances on track with expert-driven services.
                            </p>
                            <button className="order-2 lg:order-1 text-white text-base font-normal py-5 px-14 border-[2px] border-[#fdcb22] rounded-full hover:bg-[#fdcb22] ease-out duration-300 hover:scale-110">
                                Let&apos;s Talk
                            </button>
                        </div>
                    </div>
                    <div className="animate-fadeInSlideDown hidden lg:block">
                        {/* Web Development Section */}
                        <div className="relative group">
                            <div className="absolute bottom-[60px] left-[20%] transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <h3 className="text-xl font-bold text-gray-900 font-serif">Web Development:</h3>
                                <div className="flex items-center mt-2">
                                    <span className="block w-[20%] h-[2px] bg-[#fdcb22] rounded-sm mr-[2px]"></span>
                                    <span className="block w-full h-[2px] bg-gray-300"></span>
                                </div>
                                <p className="text-gray-600 mt-4">
                                    Building robust, scalable, and responsive websites tailored to your business needs.
                                </p>
                            </div>
                            <div className="flex group items-center gap-4 mt-[58px]">
                                <div className="relative">
                                    <button className="w-[50px] h-[50px] bg-white/10 group-hover:bg-[#fdcb22] rounded-full text-white text-[32px] font-extralight grid place-items-center font-syne ease-out duration-300 group-hover:scale-110 relative z-10">
                                        +
                                    </button>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-80 group-hover:animate-pulseAnimate"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-60 group-hover:animate-pulseAnimate delay-[0.5s]"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-40 group-hover:animate-pulseAnimate delay-[1s]"></span>
                                </div>
                                <p className="font-syne font-semibold text-base text-white cursor-pointer group-hover:text-[#fdcb22] ease-out duration-300">
                                    Developers
                                </p>
                            </div>
                        </div>

                        {/* Digital Marketing Section */}
                        <div className="relative group">
                            <div className="absolute bottom-[60px] left-[80%] transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <h3 className="text-xl font-bold text-gray-900 font-serif">Digital Marketing:</h3>
                                <div className="flex items-center mt-2">
                                    <span className="block w-[20%] h-[2px] bg-[#fdcb22] rounded-sm mr-[2px]"></span>
                                    <span className="block w-full h-[2px] bg-gray-300"></span>
                                </div>
                                <p className="text-gray-600 mt-4">
                                    Driving growth with targeted campaigns, lead generation, and social media strategies.
                                </p>
                            </div>
                            <div className="flex group items-center gap-4 mt-10 ml-[250px]">
                                <div className="relative">
                                    <button className="w-[50px] h-[50px] bg-white/10 group-hover:bg-[#fdcb22] rounded-full text-white text-[32px] font-extralight grid place-items-center font-syne ease-out duration-300 group-hover:scale-110 relative z-10">
                                        +
                                    </button>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-80 group-hover:animate-pulseAnimate"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-60 group-hover:animate-pulseAnimate delay-[0.5s]"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:animate-pulseAnimate delay-[1s]"></span>
                                </div>
                                <p className="font-syne font-semibold text-base text-white cursor-pointer group-hover:text-[#fdcb22] ease-out duration-300">
                                    Marketers
                                </p>
                            </div>
                        </div>

                        {/* UI/UX Designing Section */}
                        <div className="relative group">
                            <div className="absolute bottom-[60px] left-[20%] transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <h3 className="text-xl font-bold text-gray-900 font-serif">UI/UX Designing:</h3>
                                <div className="flex items-center mt-2">
                                    <span className="block w-[20%] h-[2px] bg-[#fdcb22] rounded-sm mr-[2px]"></span>
                                    <span className="block w-full h-[2px] bg-gray-300"></span>
                                </div>
                                <p className="text-gray-600 mt-4">
                                    Crafting intuitive, visually stunning designs to enhance user experiences.
                                </p>
                            </div>
                            <div className="flex group items-center gap-4 mt-16 ml-[8px]">
                                <div className="relative">
                                    <button className="w-[50px] h-[50px] bg-white/10 group-hover:bg-[#fdcb22] rounded-full text-white text-[32px] font-extralight grid place-items-center font-syne ease-out duration-300 group-hover:scale-110 relative z-10">
                                        +
                                    </button>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-80 group-hover:animate-pulseAnimate"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-60 group-hover:animate-pulseAnimate delay-[0.5s]"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:animate-pulseAnimate delay-[1s]"></span>
                                </div>
                                <p className="font-syne font-semibold text-base text-white cursor-pointer group-hover:text-[#fdcb22] ease-out duration-300">
                                    Designers
                                </p>
                            </div>
                        </div>

                        {/* Bookkeeping Services Section */}
                        <div className="relative group">
                            <div className="absolute bottom-[60px] left-[80%] transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <h3 className="text-xl font-bold text-gray-900 font-serif">Bookkeeping Services:</h3>
                                <div className="flex items-center mt-2">
                                    <span className="block w-[20%] h-[2px] bg-[#fdcb22] rounded-sm mr-[2px]"></span>
                                    <span className="block w-full h-[2px] bg-gray-300"></span>
                                </div>
                                <p className="text-gray-600 mt-4">
                                    Simplifying finances with accurate reports and seamless expense tracking.
                                </p>
                            </div>
                            <div className="flex group items-center gap-4 mt-14 ml-[255px]">
                                <div className="relative">
                                    <button className="w-[50px] h-[50px] bg-white/10 group-hover:bg-[#fdcb22] rounded-full text-white text-[32px] font-extralight grid place-items-center font-syne ease-out duration-300 group-hover:scale-110 relative z-10">
                                        +
                                    </button>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:opacity-80 group-hover:animate-pulseAnimate"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:animate-pulseAnimate delay-[0.5s]"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full group-hover:animate-pulseAnimate delay-[1s]"></span>
                                </div>
                                <p className="font-syne font-semibold text-base text-white cursor-pointer group-hover:text-[#fdcb22] ease-out duration-300">
                                    Book Keepers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Sec1;
