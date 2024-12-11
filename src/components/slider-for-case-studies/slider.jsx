import React, { useState } from "react";
import Docs from "../../assets/images/docs.jpg.png";

function Sliderrr() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationClass, setAnimationClass] = useState("slide-in");

    const slides = [
        {
            id: 1,
            mainImg: Docs,
            mainTitle: "The majority have suffered alteration in some form.",
            mainDesc:
                "Android App For Shaving Products Delivery",
        },
        {
            id: 2,
            mainImg: Docs,
            mainTitle: "The majority have suffered alteration in some form.",
            mainDesc:
                "Android App For Shaving Products Delivery",
        },
        {
            id: 3,
            mainImg: Docs,
            mainTitle: "The majority have suffered alteration in some form.",
            mainDesc:
                "Android App For Shaving Products Delivery",
        },
    ];

    const handleNext = () => {
        setAnimationClass("slide-out");
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setAnimationClass("slide-in");
        }, 800); // Match the duration of the slide-out animation
    };

    const handlePrev = () => {
        setAnimationClass("slide-out");
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setAnimationClass("slide-in");
        }, 800); // Match the duration of the slide-out animation
    };

    const currentContent = slides[currentSlide];

    return (
        <div className="w-[69%] mx-auto overflow-hidden">
            
            <div className={` ${animationClass}`}>
                    <div className="mt-[90px] flex gap-[30px]">
                        <img
                            src={currentContent.mainImg}
                            alt=""
                         className="w-[645px] h-[400px] rounded-xl grayscale hover:grayscale-0 ease-in-out duration-500"
                        />
                        <div className=" w-[645px] mt-[100px] pl-[50px]">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow"></div>
                                <h1 className="font-syne font-semibold text-[15px] leading-[30px]">
                                {currentContent.mainTitle}
                                </h1>
                            </div>
                            <p className="font-syne text-[25px] font-semibold w-[80%] mt-[20px]">
                            {currentContent.mainDesc}
                            </p>
                            <div className="flex items-center gap-3 group mt-[20px]">
                                <button className="font-syne border-[2px] text-[25px] border-yellow group-hover:border-[3px] duration-300 ease-in-out w-16 h-16 rounded-full flex items-center justify-center text-lg leading-none">
                                     +
                                </button>
                                <p className="font-syne group-hover:text-yellow duration-300 ease-in-out">See More</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[90px] flex gap-[30px]">
                        <div className=" w-[645px] mt-[100px] pl-[50px]">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow"></div>
                                <h1 className="font-syne font-semibold text-[15px] leading-[30px]">
                                {currentContent.mainTitle}
                                </h1>
                            </div>
                            <p className="font-syne text-[25px] font-semibold w-[80%] mt-[20px]">
                            {currentContent.mainDesc}
                            </p>
                            <div className="flex items-center gap-3 group mt-[20px]">
                                <button className="font-syne border-[2px] text-[25px] border-yellow group-hover:border-[3px] duration-300 ease-in-out w-16 h-16 rounded-full flex items-center justify-center text-lg leading-none">
                                     +
                                </button>
                                <p className="font-syne group-hover:text-yellow duration-300 ease-in-out">See More</p>
                            </div>
                        </div>
                        <img
                            src={currentContent.mainImg}
                            alt=""
                         className="w-[645px] h-[400px] rounded-xl grayscale hover:grayscale-0 ease-in-out duration-500"
                        />
                    </div>

                    <div className="mt-[90px] flex gap-[30px]">
                        <img
                            src={currentContent.mainImg}
                            alt=""
                         className="w-[645px] h-[400px] rounded-xl grayscale hover:grayscale-0 ease-in-out duration-500"
                        />
                        <div className=" w-[645px] mt-[100px] pl-[50px]">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow"></div>
                                <h1 className="font-syne font-semibold text-[15px] leading-[30px]">
                                {currentContent.mainTitle}
                                </h1>
                            </div>
                            <p className="font-syne text-[25px] font-semibold w-[80%] mt-[20px]">
                            {currentContent.mainDesc}
                            </p>
                            <div className="flex items-center gap-3 group mt-[20px]">
                                <button className="font-syne border-[2px] text-[25px] border-yellow group-hover:border-[3px] duration-300 ease-in-out w-16 h-16 rounded-full flex items-center justify-center text-lg leading-none">
                                     +
                                </button>
                                <p className="font-syne group-hover:text-yellow duration-300 ease-in-out">See More</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex items-center justify-between my-11">
                    <button
                        onClick={handlePrev}
                        className="font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110"
                    >
                        🡸 Prev
                    </button>
                    <button
                        onClick={handleNext}
                        className="font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110"
                    >
                        Next 🡺
                    </button>
                </div>
        </div>
    );
}

export default Sliderrr;
