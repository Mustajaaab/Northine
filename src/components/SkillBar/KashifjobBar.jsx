import { useEffect, useState } from "react";
import '../../App.css'
function KashifjobBar() {
    const [skillPercentages, setSkillPercentages] = useState(
        new Array(9).fill(0) 
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start animation when section is visible
                    setSkillPercentages([88, 90, 87, 85, 89, 80, 88, 91,96, 90]);
                } else {
                    // Reset percentages to 0 when out of view
                    setSkillPercentages(new Array(9).fill(0));
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
        <div id="sec4" className="lg:container w-[95%] mx-auto pb-20">
            <div className="pt-[89px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { title: "HTML", index: 0 },
                        { title: "CSS", index: 1 },
                        { title: "JavaScript", index: 2 },
                        { title: "React", index: 3 },
                        { title: "Node.js", index: 4 },
                        { title: "Next.js", index: 5 },
                        { title: "MySQL", index: 6 },
                        { title: "Git", index: 7 },
                        { title: "AWS", index: 8 },
                        { title: "Express", index: 9 },
                        { title: "Tailwind", index: 9 },

                    ].map((skill, idx) => (
                        <div key={idx} className="">
                            <h4 className="font-syne font-bold lg:text-md  xl:text-lg text-nowrap truncate">
                                {skill.title}
                            </h4>
                            <div className="flex mt-[30px]">
                                <div className="flex items-center w-[90%] gap-[1px]">
                                    <div
                                        className="h-[2px] bg-yellow"
                                        style={{
                                            width: `${skillPercentages[skill.index]}%`,
                                            transition: "width 3s ease-in-out",
                                        }}
                                    ></div>
                                    <div className="w-3 h-3 bg-yellow rounded-full"></div>
                                    <div
                                        className="h-[2px] bg-[#121820]/40"
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
            </div>
        </div>
    );
}

export default KashifjobBar;
