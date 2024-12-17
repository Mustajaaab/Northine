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
                        65, 
                        90, 
                        50,
                        95,
                        60, 
                        90, 
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
        <div id="sec4">
            <div className="w-[69%] mx-auto flex items-center gap-2 mt-[120px]">
                <div className='w-2 h-2 bg-yellow rounded-full'> </div>
                <p className="font-syne text-base font-medium">Our Skill</p>
            </div>
            <div className="w-[69%] mx-auto flex justify-between mt-7 items-end">
                <h1 className="font-syne font-semibold text-[42px] leading-[58px]">
                    Business <span className="text-yellow">Success</span> With <br />
                    Technology
                </h1>
                <p className="text-[#121820]/40 font-syne text-[15px] leading-[25.5px]">
                Achieve success with digital solution tech. Our digital <br />web solutions improve your online presence. At NorthNine <br />we offer digital learning solutions to boost skills and growth. <br />As a leading digital solutions company, we provide custom solutions <br />to meet your needs. Partner with digital solutions pvt ltd <br />for reliable results.
                </p>
            </div>
            <div className="w-[69%] mx-auto pt-[89px]">
                <div className="flex justify-between">
                    {[
                        { title: "Digital Marketing", index: 0 },
                        { title: "Web Development", index: 1 },
                        { title: "UI / UX Design", index: 2 },
                        { title: " Bookkeeping", index: 3 },
                    ].map((skill, idx) => (
                        <div key={idx} className="w-[20%]">
                            <h4 className="font-syne font-semibold text-base">{skill.title}</h4>
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
                
                <div className="flex justify-end my-14">
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
            <div className="w-[69%] flex mx-auto mt-[152px] pb-3 gap-1">
                <div className="w-[2%] h-[2px] bg-yellow"></div>
                <div className="w-[96%] h-[2px] bg-[#121820]/10"></div>
                <div className="w-[2%] h-[2px] bg-yellow"></div>
            </div>
        </div>
    );
}

export default Sec4;
