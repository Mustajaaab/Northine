import { useState } from "react";
import Girl from "../../assets/images/Girl.jpg";
import Shades from "../../assets/images/white-shades.png";
import Gamla from "../../assets/images/gamla.jpg";
import baadmay from "../../assets/images/baadmay.png";
import baadmayLogo from "../../assets/images/baadmayLogo.png";
import baadmayScreen from "../../assets/images/baadmayScreen.png";
import Docs from "../../assets/images/docs.jpg.png";
import FeedBackVideo from "../../assets/kccTetimonial.mp4";

function Sec5() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationClass, setAnimationClass] = useState("slide-in");

    const slides = [
        {
            id: 1,
            mainImg: '',
            mainVideo: FeedBackVideo,
            mainTitle: "Seamless Collaboration & Outstanding Expertise",
            mainAuthor: "Kaitlyn Cook ",
            mainDesc:
                "Working with Jami and the NorthNine team was a seamless and rewarding experience.",
            sideImg1: Gamla,
            sideTitle1: "A Multifaceted Partnership",
            sideDesc1:
                "Working with KCC has been an enriching experience, spanning multiple domains to support their vision for growth and innovation.",
            sideImg2: Docs,
            sideTitle2: "Holistic Solutions for Business Success",
            sideDesc2:
                "From creating dynamic strategies to executing impactful deliverables, this partnership embodies a holistic approach to solving business challenges.",
        },
        {
            id: 2,
            mainImg: baadmay,
            mainTitle: "A Robust Platform for Developers",
            mainAuthor: "John Doe",
            mainDesc:
                "NorthNine designed the BaadMay payment solution, from idea to UX/UI, to make shopping easier for customers.",
            sideImg1: baadmayScreen,
            sideTitle1: "Developer-Friendly Features",
            sideDesc1:
                "BaadMay allows users to buy now and pay later in three easy installments, simplifying the shopping experience while staying on budget.",
            sideImg2: baadmayLogo,
            sideTitle2: "Streamlined Workflows",
            sideDesc2:
                "With NorthNine's design expertise, BaadMay provides a flexible and user-friendly payment plan",
        },
    ];

    const handleNext = () => {
        setAnimationClass("slide-out");
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setAnimationClass("slide-in");
        }, 800);
    };

    const handlePrev = () => {
        setAnimationClass("slide-out");
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setAnimationClass("slide-in");
        }, 800);
    };

    const currentContent = slides[currentSlide];

    return (
        <div className="lg:container w-[95%] mx-auto overflow-hidden lg:mt-0 mt-24">
            <div className="lg:flex hidden justify-end w-[78%]">
                <img src={Shades} alt="" className="w-[203px] h-[140px]" />
            </div>
            <div className="lg:flex lg:justify-between items-center 3">
                <div>
                    <p className="flex gap-2 items-center">
                        <span className="w-3 h-3 bg-yellow rounded-full" ></span>
                        <a className="font-syne font-medium text-base">Our Project News</a>
                    </p>
                    <h1 className="font-syne font-semibold mt-6 text-[42px]">
                        Latest Projects
                    </h1>
                </div>
                <div className="flex gap-[30px] mt-6 lg:mt-0 justify-center lg:justify-start">
                    <button
                        onClick={handlePrev}
                        className="font-syne text-base font-semibold hover:text-yellow ease-in-out duration-300 hover:scale-110"
                    >
                        🡸 Prev
                    </button>
                    <button
                        onClick={handleNext}
                        className="font-syne text-base font-semibold hover:text-yellow ease-in-out duration-300 hover:scale-110"
                    >
                        Next 🡺
                    </button>
                </div>
            </div>
            <div className={`mt-[90px] flex gap-[30px] mb-[120px] justify-center ${animationClass}`}>
                <div className="hidden lg:block ">
                    {currentContent.mainImg ? (
                        <img
                            src={currentContent.mainImg}
                            alt=""
                            className="w-[645px] h-[400px] rounded-xl grayscale hover:grayscale-0 ease-in-out duration-500"
                        />
                    ) : (
                        <video
                            src={currentContent.mainVideo}
                            controls
                            autoPlay
                            loop
                            muted
                            className="w-[645px] h-[400px] rounded-xl shadow-lg"
                        ></video>
                    )}
                    <div className="flex w-[645px] mt-5 lg:justify-between">
                        <div>
                            <h1 className="font-syne font-semibold text-[22px] leading-[30px]">
                                {currentContent.mainTitle}
                            </h1>
                            <p className="font-syne font-semibold text-base leading-[22px] mt-5">
                                By:{" "}
                                <span className="text-yellow">
                                    {currentContent.mainAuthor}
                                </span>
                            </p>
                        </div>
                        <p className="font-syne text-[#121820]/40 leading-6 text-[15px] font-normal w-[43%]">
                            {currentContent.mainDesc}
                        </p>
                    </div>
                </div>

                <div className="lg:block w-[315px] hidden">
                    <h1 className="font-syne font-semibold text-[22px] leading-[30px]">
                        {currentContent.sideTitle1}
                    </h1>
                    <p className="font-syne text-[#121820]/40 leading-6 text-[15px] font-normal mt-[20px]">
                        {currentContent.sideDesc1}
                    </p>
                    <img
                        src={currentContent.sideImg1}
                        alt=""
                        className="w-[315px] h-[315px] object-cover rounded-xl mt-[30px] grayscale hover:grayscale-0 ease-in-out duration-500"
                    />
                </div>

                <div className="w-[315px] lg:hidden xl:block">
                    <img
                        src={currentContent.sideImg2}
                        alt=""
                        className="w-[315px] h-[315px] object-cover rounded-xl grayscale hover:grayscale-0 ease-in-out duration-500"
                    />
                    <h1 className="font-syne font-semibold text-[22px] leading-[30px] mt-[30px] lg:text-left text-center">
                        {currentContent.sideTitle2}
                    </h1>
                    <p className="font-syne text-[#121820]/40 leading-6 text-[15px] font-normal mt-[20px] lg:text-left text-center">
                        {currentContent.sideDesc2}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sec5;
