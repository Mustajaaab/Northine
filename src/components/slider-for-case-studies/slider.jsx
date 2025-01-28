import  { useState } from "react";
import Docs from "../../assets/images/docs.jpg.png";
import uxui from "../../assets/images/case1.jpeg";
import webDesign from "../../assets/images/website.png";
import GameDev from "../../assets/images/game.webp";
import Bookkeeping from "../../assets/images/bookkeeping1.jpeg";
import case2 from "../../assets/images/case3.png";
function Sliderrr() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationClass, setAnimationClass] = useState("slide-in");

    const slides = [
        {
            id: 1,
            mainImg: uxui,
            mainTitle: "UI Redesign and Case Study",
            mainDesc:
                "Payment Gateway Mobile App UI UX Case Study-Redesign",
            order1: "order-1",
            order2: "order-2"
        },
       
       
       
        {
            id: 4,
            mainImg: case2,
            mainTitle: "Digital Marketers worked with numerous companies ",
            mainDesc:
                "Digital Marketers worked with numerous companies ",
            order1: "order-2",
            order2: "order-1"
        },
        {
            id: 3,
            mainImg: Bookkeeping,
            mainTitle: "The majority have suffered alteration in some form.",
            mainDesc:
                "Android App For Shaving Products Delivery",
            order1: "order-1",
            order2: "order-2"
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
        <div className="lg:container w-[90%] mx-auto overflow-hidden">
            
           {
            slides.map(( items) => (
                <div className={` ${animationClass}`}>
                <div className="mt-[90px] lg:flex justify-between">
                    <img
                        src={items.mainImg}
                        alt=""
                     className={`lg:w-[645px] ${items.order1} lg:h-[400px] rounded-xl grayscale hover:grayscale-0 ease-in-out duration-500`}
                    /> 
                    <div className={` lg:w-[645px]  ${items.order2} order-1 lg:mt-[100px] mt-5 lg:pl-[50px]`}>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow"></div>
                            <h1 className="font-syne font-semibold text-[15px] lg:leading-[30px]">
                            {items.mainTitle}
                            </h1>
                        </div>
                        <p className="font-syne lg:text-[25px] text-2xl font-semibold w-[80%] mt-[20px]">
                        {items.mainDesc}
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
            ))
           }

            <div className="flex items-center lg:justify-between justify-evenly my-11">
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
