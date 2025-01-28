import React from "react";
import webDesgin from "../assets/images/webDesign.png";
import code from "../assets/images/coding.png";
import socialMedia from "../assets/images/socialMedia.png";
import bookkeeping from "../assets/images/bookkeeping.png";
import gameDev from "../assets/images/gamedevelopmenticon.svg";
import Ai from "../assets/images/ai.png";
const Servicesfield = () => {
  const services = [
    {
      title: "UX/UI Designing Services",
      description:
        "Create designs that grab attention and guide users seamlessly. Great designs improve engagement and keep visitors connected.",
      icon: webDesgin,
    },
    {
      title: "Website Development Services",
      description:
        "High-performing, professional websites built to work on every device. Digital web solutions ensure fast speeds, better engagement, and lasting impressions.",
      skills: ["React", "Node.js"],
      icon: code,
    },
    {
      title: "Digital Marketing Services",
      description:
        "Drive business growth with effective digital learning solutions. Reach the right audience through creative campaigns and targeted strategies.",
      skills: ["SEO", "PPC"],
      icon: socialMedia,
    },
    {
      title: "Bookkeeping Services",
      description:
        "Simplify financial management with expert support. Track finances, organize payments, and stay on top of your accounts with ease.",
      skills: ["QuickBooks", "Xero"],
      icon: bookkeeping, // Add the corresponding icon here
    },
    {
      title: "Game Development Services",
      description:
        "We offer top-notch game development services tailored to your vision. From concept to launch, our team creates engaging, high-performance games for all platforms. Let us bring your ideas to life with stunning visuals and immersive gameplay.",
      skills: ["Unity", "Unreal Engine"],
      icon: gameDev, // Add the corresponding icon here
    },
    {
      title: "AI & ML Service",
      description:
        "We offer cutting-edge AI and machine learning solutions designed to revolutionize your business. From concept to deployment, our team develops intelligent systems that enhance efficiency, automate processes, and provide actionable insights. Let us bring your ideas to life with innovative algorithms and transformative technologies.",
      skills: ["Python", "TensorFlow"],
      icon: Ai, // Add the corresponding icon here
    },
  ];

  function ServiceCard({ title, description, skills, icon }) {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-6">
          <div className="w-[70px] h-[70px] bg-[#f2f4f3] rounded-full relative">
            <img
              src={icon}
              alt=""
              className="absolute w-6 z-10 left-[20px] top-[20px]"
            />
            <span className="bg-yellow h-4 w-4 rounded-full absolute left-[35px] top-[40px]" />
          </div>
        </div>
        <h1 className="text-xl font-semibold font-syne text-center mb-[15px]">
          {title}
        </h1>
        <p className="text-black/30 text-base font-syne text-center mb-[20px]">
          {description}
        </p>
       
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default Servicesfield;
