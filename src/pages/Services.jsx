import { useState } from "react";
import Navbar from "../components/navbar";

function Services() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Discovery & R&D",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
            title: "UX/UI Design",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
            title: "Development",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
            title: "QA",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
            title: "Launch",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
            title: "Maintenance & Support",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
    ];


    return (
        <>
            <Navbar />
            <div className="pt-24 w-full container mx-auto">
                <div className="flex ">
                    {/* Left Sidebar */}
                    <div className="w-1/3">
                        <ul className="relative space-y-8  border-gray-300 pl-6">
                            {steps.map((step, index) => (
                                <li
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className="cursor-pointer relative"
                                >
                                    {index < steps.length - 1 && (
                                        <span
                                            className={`absolute left-[10px] top-[28px] h-full w-[2px] ${activeStep > index
                                                ? "bg-gray-300"
                                                : "bg-gray-300"
                                                }`}
                                        ></span>
                                    )}

                                    <div className="flex items-center space-x-4">
                                        <span
                                            className={`w-6 h-6 rounded-full flex items-center justify-center border-4 ${activeStep === index
                                                ? "bg-yellow border-yellow"
                                                : "bg-white border-gray-300"
                                                }`}
                                        >
                                            {activeStep === index && (
                                                <span className="w-3 h-3 bg-white rounded-full"></span>
                                            )}
                                        </span>
                                        <span
                                            className={`font-medium ${activeStep === index
                                                ? "text-black"
                                                : "text-gray-400"
                                                }`}
                                        >
                                            {step.title}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Content */}
                    <div className=" px-8">
                        <div className="text-center">
                            <div className="mb-4">
                                <img
                                    src="/icon-placeholder.png"
                                    alt="Icon"
                                    className="w-16 h-16 "
                                />
                            </div>
                            <p className="text-gray-400 w-2/3">{steps[activeStep].content}</p>
                            <button className=" mt-4 flex text-center justify-center">
                                <span>See More</span>
                                <span className="h-10 w-10 bg-yellow text-white text-2xl  rounded-full">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
