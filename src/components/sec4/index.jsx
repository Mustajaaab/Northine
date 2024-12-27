import { useEffect, useState } from "react";

function Sec4() {
    const [isVisible, setIsVisible] = useState(false);
    const [skillPercentages, setSkillPercentages] = useState(
        new Array(7).fill(0)
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    setSkillPercentages([
                        85, 
                        90, 
                        50,
                        70,
                        50, 
                        65, 
                        80,
                    ]);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.querySelector("#sec4");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <div id="sec4" className="lg:container w-[95%] mx-auto">
            <div className=" flex items-center gap-2 mt-[120px]">
                <div className='w-2 h-2 bg-yellow rounded-full'> </div>
                <p className="font-syne text-base font-medium">Our Skill</p>
            </div>
            <div className=" lg:flex justify-between mt-7 items-end">
                <h1 className="font-syne font-semibold lg:text-[42px] text-[32px] lg:leading-[58px] leading-[45px]">
                    Business <span className="text-yellow">Success</span> With <br />
                    Technology
                </h1>
                <p className="text-[#121820]/40 font-syne text-[18px] leading-[25.5px] lg:w-[44%] lg:mt-0 mt-7">
                Achieve success with digital solution tech. Our digital web solutions improve your online presence. At NorthNine we offer digital learning solutions to boost skills and growth. As a leading digital solutions company, we provide custom solutions to meet your needs. Partner with digital solutions pvt ltd for reliable results.
                </p>
            </div>
            <div className="pt-[89px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { title: "Data Science & Ai", index: 0 },
                        { title: "Web Development", index: 1 },
                        { title: "UI / UX Design", index: 2 },
                        { title: " Bookkeeping", index: 3 },
                        { title: "Digital Marketing ", index: 4 },
                        { title: "Graphic Designing", index: 5 },
                    ].map((skill, idx) => (
                        <div key={idx} className="">
                            <h4 className="font-syne     font-bold text-lg">{skill.title}</h4>
                            <div className="flex mt-[30px]">
                                <div className="flex items-center w-[90%] gap-[1px]">
                                    <div
                                        className={`h-[2px] bg-yellow`}
                                        style={{
                                            width: `${skillPercentages[skill.index]}%`,
                                            transition: "width 3s ease-in-out",
                                        }}
                                    ></div>
                                    <div className="w-3 h-3 bg-yellow rounded-full"></div>
                                    <div
                                        className={`h-[2px] bg-[#121820]/40`}
                                        style={{
                                            width: `${100 - skillPercentages[skill.index]}%`,
                                            transition: "width 3s ease-in-out",
                                        }}
                                    ></div>
                                </div>
                                <div className="flex justify-end w-[20%]">
                                    <p className="font-sans text-[#121820]/40 text-[13px]">
                                        {skillPercentages[skill.index]}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center lg:justify-end my-14">
                        <div className="flex items-center gap-[14px] group">
                            <button className="font-syne font-semibold text-base group-hover:text-yellow ease-in-out duration-300 group-hover:scale-110">
                                More
                            </button>
                            <button className="bg-yellow text-base text-white w-[35px] h-[35px] rounded-full group-hover:bg-black ease-in-out duration-300 group-hover:scale-110">
                                🡺
                            </button>
                        </div>
                </div>
            </div>
            <div className="container flex mx-auto mt-[52px] pb-3 gap-1">
                <div className="w-[2%] h-[2px] bg-yellow"></div>
                <div className="w-[96%] h-[2px] bg-[#121820]/10"></div>
                <div className="w-[2%] h-[2px] bg-yellow"></div>
            </div>
        </div>
    );
}

export default Sec4;
