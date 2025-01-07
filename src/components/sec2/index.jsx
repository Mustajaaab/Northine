import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Photo1 from "../../assets/images/New folder/365estatehub.png";
import Photo2 from "../../assets/images/New folder/growerck.png";
import Photo3 from "../../assets/images/New folder/plan.png";
import Photo4 from "../../assets/images/New folder/Hackino.png";
import Photo5 from "../../assets/images/New folder/KMA-logo.svg";
import Photo6 from "../../assets/images/New folder/readinggraphics.webp";
import Shades from "../../assets/images/white-shades.png";
import code from "../../assets/images/coding.png";
import desgin from "../../assets/images/desgin.png";
import bookkeeping from "../../assets/images/bookkeeping.png";
import maintenace from "../../assets/images/maintenance.png";
import socialMedia from "../../assets/images/socialMedia.png";
import streamlined from "../../assets/images/streamlined.png";
import ai from "../../assets/images/ai.png";

function Sec2() {
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

  const services = [
    {
      category: "IT Services",
      items: [
        {
          icon: maintenace,
          title: "End-to-End Support",
          number: "01",
          description:
            "From design to execution, receive full support in UI/UX designing, digital marketing, website development, and bookkeeping.",
        },
        {
          icon: socialMedia,
          title: "Digital Learning Solutions",
          number: "02",
          description:
            "Equip your team with digital learning solutions for efficient skill-building and better internal processes.",
        },
        {
          icon: streamlined,
          title: "Streamlined Processes",
          number: "03",
          description:
            "Simplify your financial operations with smart bookkeeping tools, ensuring accuracy and saving time.",
        },
        {
          icon: ai,
          title: "AI & IoT Services",
          number: "04",
          description:
            "Optimize your business with the latest in artificial intelligence and IoT solutions to enhance your digital presence.",
        },
      ],
    },
    {
      category: "IT Solutions",
      items: [
        {
          icon: code,
          title: "Web Development",
          number: "01",
          description:
            "Deliver responsive, sleek platforms built for speed and functionality. Explore innovative possibilities with digital web solutions tailored for growth.",
        },
        {
          icon: desgin,
          title: "UI/UX Designing",
          number: "02",
          description:
            "Craft interfaces that connect users to brands seamlessly. Bold designs ensure intuitive user experiences.",
        },
        {
          icon: socialMedia,
          title: "Digital Marketing",
          number: "03",
          description:
            "Boost visibility with tailored strategies. Drive measurable outcomes using innovative strategies by a trusted digital solutions company.",
        },
        {
          icon: bookkeeping,
          title: "Bookkeeping Services",
          number: "04",
          description:
            "Simplify financial management with accurate record-keeping and reporting. Trusted by businesses for efficient bookkeeping services.",
        },
      ],
    },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    rtl: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
  };

  return (
    <>
      {/* Slider Section */}
      <div className="w-full py-12 overflow-hidden">
        <Slider {...sliderSettings}>
          {photos.map((photo, index) => (
            <div key={index}  >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-[80%] h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Divider Section */}
      <div className="container flex mx-auto pb-3 gap-1">
        <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
        <div className="w-[96%] h-[2px] bg-[#121820]/10"></div>
        <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
      </div>

      {/* Image Section */}
      <div className="lg:w-[55%] w-[75%] mx-auto flex justify-end">
        <img
          src={Shades}
          alt=""
          className="lg:w-[203px] w-[183px] h-[120px] lg:h-[140px]"
        />
      </div>

      {/* Services Section */}
      <div className="lg:container w-[95%] mx-auto">
        <h1 className="font-syne font-semibold text-3xl lg:text-[42px] leading-[58px]">
          How We Can <span className="text-[#fdcb22]">Help You</span>
        </h1>

        <div className="lg:flex lg:items-center gap-2 mt-14 block mb-12">
          {services.map((service, index) => (
            <div key={index} className="lg:w-[50%]">
              <p className="font-syne font-semibold text-[22px] leading-8 w-[50%]">
                {service.category}
              </p>
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div className="flex gap-1 w-full mt-5 lg:mt-[60px] h-5">
                    <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
                    <div className="w-[96%] h-[2px] bg-gray-300"></div>
                  </div>
                  <div className="lg:flex gap-[121px] mt-6 lg:mt-[30px] relative">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[45px] h-[45px] ml-[30px] z-10 mb-4 lg:mb-0"
                    />
                    <div>
                      <div className="flex gap-3">
                        <div className="text-[#fdcb22] font-semibold text-lg font-syne">
                          {item.number}
                        </div>
                        <h2 className="font-semibold font-syne text-lg">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-[#121820]/40 font-syne text-[15px] leading-[25.5px] mt-[30px] h-20">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sec2;
