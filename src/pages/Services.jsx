import { useState } from "react";
import Navbar from "../components/navbar";
import BGDot from "../assets/images/dotmap.png";
import Servicesfield from "../components/Servicesfield";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Phones from "../assets/images/phones.png";
import Motion from "../assets/images/motion.png";
import { useRef } from "react";
import Shades from "../assets/images/white-shades.png";
import MainFooter from "../components/Footer/mainFooter";
import { Link } from "react-router-dom";
import uxui from "../assets/images/uxui.png";
import webDesign from "../assets/images/website.png";
import GameDev from "../assets/images/Rubix.png";
import Bookkeeping from "../assets/images/bookkeeping.jpeg";
import code from "../assets/images/coding.png";
import Kcc from "../assets/images/Kcc.png";

function Services() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const swiperRef = useRef(null);

  const steps = [
    // {
    //     title: "Data Security",
    //     heading: "Research and Discover New Insights",
    //     image: "../src/assets/images/dataProtection.png",
    //     content: "Protecting digital information from unauthorized access or corruption. Implementing measures encryption. Firewalls to safeguard sensitive data. Implementing security measures. Developing incident response plans.",
    // },
    {
      title: "UX/UI Design",
      heading: "UI/UX Designing Services",
      image: "../src/assets/images/webDesign.png",
      content:
        "Transform your ideas into engaging, user-friendly designs that deliver seamless experiences.",
    },
    {
      title: "Development",
      heading: "Website Development Services",
      image: "../assets/images/coding.png",
      content:
        "Build high-performing, responsive websites tailored to your business goals.",
    },
    {
      title: "Digital Marketing",
      heading: "Digital Marketing Services",
      image: "../src/assets/images/searchEngine.png",
      content:
        " Boost your brand visibility and drive traffic with cutting-edge strategies.",
    },
    {
      title: "Bookkeeping",
      heading: "Bookkeeping Services",
      image: "../src/assets/images/launch.png",
      content:
        "Stay organized and focused with accurate financial management and reporting.",
    },
    {
      title: "Artificial intelligence",
      heading: "AI & ML Service",
      image: "../src/assets/images/ai.png",
      content:
        "Unlock the power of Artificial Intelligence and Machine Learning with our cutting-edge solutions. We specialize in building intelligent models for data-driven insights, automation, and predictive analytics. From model development to deployment, our services cater to businesses seeking efficiency, innovation, and smarter decision-making.",
    },
    {
      title: "Game Development",
      heading: "AI & ML Service",
      image: "../src/assets/images/ai.png",
      content:
        "Unlock the power of Artificial Intelligence and Machine Learning with our cutting-edge solutions. We specialize in building intelligent models for data-driven insights, automation, and predictive analytics. From model development to deployment, our services cater to businesses seeking efficiency, innovation, and smarter decision-making.",
    },
  ];

  const slides = [
    {
      img: uxui,
      title: "UX/UI Design",
      author: "GOALS Plastic surgery | website Design ",
      description:
        "We designed a user-friendly interface for GOALS Plastic surgery, focusing on intuitive navigation and visually appealing design. The result is an engaging platform that delivers a seamless experience for their visitors while reflecting the brand's professionalism.",
    },
    {
      img: webDesign,
      title: " Web Development",
      author: "EcoEnergy",
      description:
        "For EcoEnergy, we created a sleek, responsive website that works perfectly on phones, tablets, and desktops. The site now loads in under two seconds, helping EcoEnergy see a boost in traffic and triple their customer inquiries.",
    },
    {
      img: Kcc,
      title: "Digital Marketing",
      author: "KCC Business Coach and Consultant",
      description:
        "We partnered with KCC Business Coach and Consultant to deliver project management, marketing strategy development, blog writing, copywriting, lead generation, and social media campaigns. The results were outstanding, driving significant engagement and growth. We're proud to continue working with her to achieve even greater success.",
    },
    {
      img: Bookkeeping,
      title: "Bookkeeping",
      author: "Kelly Rentals",
      description:
        "We’ve collaborated with Kelly Rentals, a leading table, chair, tent, and linen rental provider in the DFW metroplex. Our work included using Wave and Excel for budget forecasting and financial planning. This partnership showcases our expertise in streamlining operations and ensuring efficiency.",
    },
    {
      img: GameDev,
      title: "Rubiks Cube",
      author: "Subzero Commercial inc",
      description:
        "Ready to challenge your brain and test your speed? Dive into the most immersive and engaging cube puzzle game available on mobile. With real mechanical turning and lifelike physics, this game brings the iconic cube to life right in your hands! Whether you're a beginner or a seasoned solver, this game is designed to provide a fun, smooth, and interactive experience for",
    },
  ];

  const handleStepClick = (index) => {
    if (index !== activeStep) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] h-[500px]"
        style={{
          backgroundImage: `url(${BGDot})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:container w-[90%] mx-auto flex justify-between items-center">
          <div>
            <div className="flex items-center gap-5">
              <Link
                to="/home"
                className="text-lg font-syne font-medium hover:text-yellow transition-colors"
              >
                Home
              </Link>
              <div className="bg-yellow h-2 w-2 rounded-full"></div>
              <p className="text-lg font-syne font-[100]">Services</p>
            </div>
            <h1 className="lg:text-5xl text-3xl font-syne mt-10 font-semibold uppercase">
              Digital Services{" "}
            </h1>
          </div>
          <div className="hidden lg:block">
            <svg
              className="rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="272"
              height="187"
              viewBox="0 0 272 187"
              fill="none"
            >
              <path
                d="M266.994 37.102V75.53C269.828 75.443 271.998 77.897 271.998 80.863C271.998 84.173 269.304 86.866 265.994 86.866C264.156 86.866 262.528 86.018 261.426 84.713L228.272 103.847C228.515 104.499 228.666 105.195 228.666 106.2C228.666 109.24 225.973 112.22 222.662 112.22C219.351 112.22 216.658 109.24 216.658 106.2C216.658 105.177 216.813 104.463 217.68 103.798L183.931 84.673C182.829 86.001 181.187 86.866 179.33 86.866C177.473 86.866 175.831 86.001 174.729 84.673L141.593 103.797C141.848 104.462 142.3 105.177 142.3 106.2C142.3 108.898 139.833 111.352 136.999 111.831V150.006C139.833 150.485 142.3 153.3 142.3 156.6C142.3 156.636 141.853 157.326 141.614 158.63L174.731 177.084C175.833 175.757 177.474 174.894 179.33 174.894C182.641 174.894 185.335 177.585 185.335 180.895C185.335 184.205 182.641 186.896 179.33 186.896C176.2 186.896 173.326 184.205 173.326 180.895C173.326 180.16 173.478 179.463 173.721 178.812L140.611 159.703C139.509 161.038 137.862 162.8 135.999 162.8C134.136 162.8 132.49 161.039 131.388 159.704L98.277 178.812C98.52 179.464 98.671 180.16 98.671 180.895C98.671 184.205 95.978 186.896 92.667 186.896C89.356 186.896 86.663 184.205 86.663 180.895C86.663 180.16 86.814 179.464 87.57 178.813L53.946 159.704C52.844 161.039 51.198 162.8 49.335 162.8C46.25 162.8 43.331 159.217 43.331 156.6C43.331 153.3 45.501 150.486 48.334 150.006V111.831C45.501 111.351 43.331 108.898 43.331 106.2C43.331 105.195 43.482 104.499 43.725 103.847L10.571 84.714C9.469 86.018 7.842 86.866 6.4 86.866C2.693 86.866 0 84.173 0 80.865C0 77.897 2.169 75.443 5.3 75.53V36.756C2.169 36.276 0 33.823 0 30.855C0 27.546 2.693 24.853 6.4 24.853C7.877 24.853 9.531 25.733 10.633 27.081L43.725 8.72C43.482 7.331 43.331 6.635 43.331 5.9C43.331 2.591 46.25 0 49.335 0C52.646 0 55.339 2.591 55.339 5.9C55.339 6.635 55.188 7.331 54.945 8.72L88.37 27.081C89.139 25.733 90.794 24.853 92.667 24.853C94.54 24.853 96.195 25.733 97.297 27.081L130.389 8.72C130.146 7.331 129.994 6.635 129.994 5.9C129.994 2.591 132.688 0 135.999 0C139.309 0 142.3 2.591 142.3 5.9C142.3 6.635 141.852 7.331 141.609 8.72L174.895 27.193C175.994 26.68 177.567 25.2 179.33 25.2C181.94 25.2 182.667 26.68 183.766 27.192L217.52 8.72C216.809 7.331 216.658 6.635 216.658 5.9C216.658 2.591 219.351 0 222.662 0C225.973 0 228.666 2.591 228.666 5.9C228.666 6.635 228.515 7.331 228.272 8.72L261.558 27.192C262.657 26.68 264.23 25.2 265.994 25.2C269.304 25.2 271.998 27.892 271.998 31.202C271.998 34.168 269.828 36.623 266.994 37.102ZM179.33 184.897C181.538 184.897 183.333 183.103 183.333 180.895C183.333 178.689 181.538 176.894 179.33 176.894C177.123 176.894 175.328 178.689 175.328 180.895C175.328 183.103 177.123 184.897 179.33 184.897ZM265.994 84.866C268.201 84.866 269.997 83.07 269.997 80.863C269.997 78.657 268.201 76.863 265.994 76.863C263.787 76.863 261.991 78.657 261.991 80.863C261.991 83.07 263.787 84.866 265.994 84.866ZM222.662 110.22C224.869 110.22 226.665 108.138 226.665 106.2C226.665 103.723 224.869 102.19 222.662 102.19C220.455 102.19 218.659 103.723 218.659 106.2C218.659 108.138 220.455 110.22 222.662 110.22ZM179.33 84.866C181.538 84.866 183.333 83.071 183.333 80.865C183.333 78.657 181.538 76.864 179.33 76.864C177.123 76.864 175.327 78.657 175.327 80.865C175.327 83.071 177.123 84.866 179.33 84.866ZM140.1 106.2C140.1 103.723 138.206 102.19 135.999 102.19C133.791 102.19 131.996 103.723 131.996 106.2C131.996 108.138 133.791 110.22 135.999 110.22C138.206 110.22 140.1 108.138 140.1 106.2ZM135.999 160.7C138.206 160.7 140.1 158.114 140.1 156.6C140.1 153.7 138.206 152.4 135.999 152.4C133.791 152.4 131.996 153.7 131.996 156.6C131.996 158.114 133.791 160.7 135.999 160.7ZM92.667 184.897C94.874 184.897 96.67 183.103 96.67 180.895C96.67 178.689 94.874 176.894 92.667 176.894C90.46 176.894 88.664 178.689 88.664 180.895C88.664 183.103 90.46 184.897 92.667 184.897ZM54.95 158.63L88.66 177.085C89.168 175.758 90.81 174.894 92.667 174.894C94.524 174.894 96.166 175.758 97.268 177.085L130.384 158.63C130.145 157.326 129.994 156.636 129.994 156.6C129.994 153.3 132.164 150.486 134.998 150.006V111.831C132.164 111.351 129.994 108.898 129.994 106.2C129.994 105.195 130.146 104.499 130.389 103.847L97.235 84.714C96.132 86.018 94.505 86.866 92.667 86.866C90.811 86.866 89.169 86.001 88.67 84.675L54.93 103.799C55.184 104.463 55.339 105.177 55.339 106.2C55.339 108.898 53.169 111.352 50.336 111.831V150.006C53.169 150.485 55.339 153.3 55.339 156.6C55.339 156.636 55.189 157.326 54.95 158.63ZM96.67 80.865C96.67 78.657 94.874 76.864 92.667 76.864C90.46 76.864 88.664 78.657 88.664 80.865C88.664 83.071 90.46 84.866 92.667 84.866C94.874 84.866 96.67 83.071 96.67 80.865ZM45.332 156.6C45.332 158.114 47.128 160.7 49.335 160.7C51.542 160.7 53.338 158.114 53.338 156.6C53.338 153.7 51.542 152.4 49.335 152.4C47.128 152.4 45.332 153.7 45.332 156.6ZM49.335 110.22C51.542 110.22 53.338 108.138 53.338 106.2C53.338 103.723 51.542 102.19 49.335 102.19C47.128 102.19 45.332 103.723 45.332 106.2C45.332 108.138 47.128 110.22 49.335 110.22ZM2.1 80.865C2.1 83.071 3.796 84.866 6.4 84.866C8.211 84.866 10.6 83.071 10.6 80.865C10.6 78.657 8.211 76.864 6.4 76.864C3.796 76.864 2.1 78.657 2.1 80.865ZM6.4 26.854C3.796 26.854 2.1 28.649 2.1 30.855C2.1 33.062 3.796 34.858 6.4 34.858C8.211 34.858 10.6 33.062 10.6 30.855C10.6 28.649 8.211 26.854 6.4 26.854ZM49.335 1.898C47.128 1.898 45.332 3.693 45.332 5.9C45.332 8.106 47.128 10 49.335 10C51.542 10 53.338 8.106 53.338 5.9C53.338 3.693 51.542 1.898 49.335 1.898ZM87.43 28.817L53.936 9.709C52.834 11.037 51.192 12 49.335 12C47.478 12 45.837 11.037 44.734 9.709L11.627 28.817C11.86 29.456 12.8 30.136 12.8 30.855C12.8 33.823 9.838 36.277 7.4 36.756V75.53C9.838 75.443 12.8 77.897 12.8 80.865C12.8 81.618 11.853 82.332 11.598 83.87L44.734 102.121C45.837 100.793 47.478 100.19 49.335 100.19C51.174 100.19 52.801 100.776 53.903 102.081L87.57 83.38C86.814 82.296 86.663 81.6 86.663 80.865C86.663 77.897 88.833 75.443 91.666 75.53V36.756C88.833 36.276 86.663 33.823 86.663 30.855C86.663 30.136 86.811 29.456 87.43 28.817ZM92.667 26.854C90.46 26.854 88.664 28.649 88.664 30.855C88.664 33.062 90.46 34.858 92.667 34.858C94.874 34.858 96.67 33.062 96.67 30.855C96.67 28.649 94.874 26.854 92.667 26.854ZM135.999 1.898C133.791 1.898 131.996 3.693 131.996 5.9C131.996 8.106 133.791 10 135.999 10C138.206 10 140.1 8.106 140.1 5.9C140.1 3.693 138.206 1.898 135.999 1.898ZM173.798 28.869L140.6 9.709C139.497 11.037 137.856 12 135.999 12C134.142 12 132.5 11.037 131.398 9.709L98.29 28.817C98.523 29.456 98.671 30.136 98.671 30.855C98.671 33.823 96.501 36.277 93.667 36.756V75.53C96.501 75.443 98.671 77.897 98.671 80.865C98.671 81.618 98.516 82.332 98.261 83.87L131.398 102.121C132.5 100.793 134.142 100.19 135.999 100.19C137.836 100.19 139.463 100.776 140.566 102.08L173.72 83.36C173.477 82.295 173.326 81.599 173.326 80.865C173.326 77.897 175.496 75.443 178.329 75.53V37.102C175.496 36.622 173.326 34.168 173.326 31.202C173.326 30.375 173.494 29.587 173.798 28.869ZM179.33 27.2C177.123 27.2 175.328 29.85 175.328 31.202C175.328 33.408 177.123 35.202 179.33 35.202C181.538 35.202 183.333 33.408 183.333 31.202C183.333 29.85 181.538 27.2 179.33 27.2ZM222.662 1.898C220.455 1.898 218.659 3.693 218.659 5.9C218.659 8.106 220.455 10 222.662 10C224.869 10 226.665 8.106 226.665 5.9C226.665 3.693 224.869 1.898 222.662 1.898ZM260.462 28.869L227.263 9.709C226.161 11.037 224.519 12 222.662 12C220.805 12 219.163 11.037 218.61 9.709L184.863 28.869C185.166 29.587 185.335 30.375 185.335 31.202C185.335 34.168 183.165 36.623 180.331 37.102V75.53C183.164 75.443 185.334 77.897 185.334 80.865C185.334 81.599 185.183 82.295 184.94 83.36L218.95 102.08C219.197 100.776 220.824 100.19 222.662 100.19C224.519 100.19 226.161 100.793 227.263 102.121L260.399 83.86C260.145 82.331 259.989 81.617 259.989 80.863C259.989 77.897 262.159 75.443 264.993 75.53V37.102C262.159 36.622 259.989 34.168 259.989 31.202C259.989 30.375 260.158 29.587 260.462 28.869ZM265.994 27.2C263.787 27.2 261.991 29.85 261.991 31.202C261.991 33.408 263.787 35.202 265.994 35.202C268.201 35.202 269.997 33.408 269.997 31.202C269.997 29.85 268.201 27.2 265.994 27.2Z"
                fill="url(#paint0_linear_663_106)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_663_106"
                  x1="0"
                  y1="187"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="yellow" />
                  <stop offset="0.75" stopColor="yellow" stopOpacity="0.5" />
                  <stop offset="1" stopColor="yellow" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="lg:container w-[90%] mx-auto pb-[100px]">
        <div className="flex gap-2 items-center pt-[100px]">
          <div className="bg-yellow h-2 w-2 rounded-full"></div>
          <p className="font-normal font-syne">Our Services</p>
        </div>
        <h1 className="lg:text-5xl text-3xl font-syne font-semibold pt-[30px]">
          Digital Services and{" "}
          <span className="text-yellow">Solutions for </span>Every Business Need
        </h1>

        <div className="mt-[100px]">
          <Servicesfield />
        </div>
      </div>

      <div className="py-8 bg-[#f3f3f4]">
        <div className="lg:container w-[90%] mx-auto pt-16">
          <div className="lg:flex justify-between">
            <h1 className="font-syne font-semibold lg:text-5xl text-3xl">
              Latest Projects
            </h1>
            <div className="flex lg:gap-[30px] justify-evenly lg:justify-start mt-6 lg:mt-0 ">
              <button
                className="font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                🡸 Prev
              </button>
              <button
                className="font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110"
                onClick={() => swiperRef.current?.slideNext()}
              >
                Next 🡺
              </button>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={false}
          pagination={{ clickable: true, el: null }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          speed={1000}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesOffsetBefore: 30,
              slidesOffsetAfter: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetBefore: 30,
              slidesOffsetAfter: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesOffsetBefore: 70,
              slidesOffsetAfter: 70,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              slidesOffsetBefore: 190,
              slidesOffsetAfter: 190,
            },
          }}
          className="mySwiper mt-10 w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className=" overflow-hidden z-10">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="object-cover rounded-lg grayscale hover:grayscale-0 duration-300 w-[500px] h-[300px]" // Full-width images
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[22px] font-syne leading-[30px]">
                    {slide.title}
                  </h3>
                  <p className="text-lg mb-2 font-syne">
                    by: <span className="text-yellow">{slide.author}</span>
                  </p>
                  <p className="text-[15px] font-normal font-syne text-[#121820]/40">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:container w-[90%] mx-auto lg:justify-between grid justify-center lg:flex mt-[107px] mb-[50px]">
          <div className="flex lg:gap-[14px] justify-evenly lg:justify-start items-center group">
            <button className="font-syne font-semibold text-base group-hover:text-yellow ease-out duration-300 group-hover:scale-110 ">
              View All Cases
            </button>
            <button className="w-[35px] h-[35px] rounded-full text-white bg-yellow group-hover:bg-black ease-out duration-300 group-hover:scale-110">
              🡺
            </button>
          </div>
          <button className="font-sans text-base py-5 px-14 border-[2px] lg:mt-0 mt-4 border-yellow hover:bg-yellow rounded-full hover:text-white ease-out duration-300 hover:scale-110 ">
            Get Started
          </button>
        </div>
      </div>

      <div className="lg:container w-[90%] mx-auto">
        <div className="flex items-center gap-3 mt-24">
          <span className="w-2 h-2 bg-yellow rounded-full"></span>
          <p className="font-syne">All Devices</p>
        </div>
        <h1 className="lg:text-[44px] text-3xl font-syne font-semibold mt-14">
          <span className="text-yellow">End-to-End</span> Mobile Development
          Services
        </h1>
      </div>

      <div className="pt-24 lg:container w-[90%] mx-auto pb-24">
        <div className="lg:flex gap-x-40 2xl:ml-20">
          {/* Left Sidebar */}
          <div>
            <ul className="relative space-y-8 border-gray-300 lg:pl-6">
              {steps.map((step, index) => (
                <li
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className="cursor-pointer relative"
                >
                  {index < steps.length - 1 && (
                    <span
                      className={`absolute left-[10px] top-[34px] h-full w-[2px] bg-gray-300`}
                    ></span>
                  )}
                  <div className="flex items-center space-x-4">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-4 ${
                        activeStep === index
                          ? "bg-yellow border-yellow"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {activeStep === index && (
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      )}
                    </span>
                    <span
                      className={`font-medium font-syne text-2xl lg:text-3xl ${
                        activeStep === index ? "text-black" : "text-gray-400"
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
          <div>
            <div
              className={`lg:pt-10 pt-20 transition-transform duration-300 ${
                isAnimating
                  ? "translate-x-10 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div className="flex relative">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="h-14 lg:mb-4 mb-8 rounded-lg z-10"
                />
              </div>
              <h2 className="text-2xl font-bold lg:mb-4 mb-8">
                {steps[activeStep].heading}
              </h2>
              <p className="text-black/40 font-syne lg:text-lg lg:w-[630px]">
                {steps[activeStep].content}
              </p>
              <button className="lg:mt-4 mt-8 flex text-center gap-5 items-center justify-center">
                <span className="font-syne font-semibold text-lg">
                  See More
                </span>
                <span className="h-8 w-8 bg-yellow text-white text-xl rounded-full">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:container w-[90%] mx-auto gap-2 flex items-center mt-8">
        <span className="w-[2%] h-[2px] bg-yellow"></span>
        <span className="w-[96%] h-[2px] bg-[#e7e7e8]"></span>
        <span className="w-[2%] h-[2px] bg-yellow"></span>
      </div>
      <div className="container lg:flex justify-end mx-auto hidden">
        <img src={Shades} alt="" className="w-[220px]" />
      </div>
      <div className="lg:container w-[90%] mx-auto mb-20">
        <h1 className="lg:text-[44px] text-3xl font-semibold font-syne lg:mt-0 mt-16">
          Delivering <span className="text-yellow">Industry Specific</span>{" "}
          Mobile
          <br />
          App Solutions
        </h1>
        <div className="lg:flex justify-between mt-24">
          <div>
            <div className="bg-[#e7e7e8] w-20 h-20 flex justify-center items-center rounded-full">
              <svg
                fill="#000000"
                height={50}
                width={50}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.003 512.003"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <rect
                      x="200.178"
                      y="170.881"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="223.954"
                      y="170.881"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="247.729"
                      y="170.881"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="271.504"
                      y="170.881"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="295.279"
                      y="170.881"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="168.134"
                      y="448.947"
                      width="175.729"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="176.403"
                      y="472.722"
                      width="47.55"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="191.909"
                      y="496.498"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="288.043"
                      y="472.722"
                      width="47.55"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="303.549"
                      y="496.498"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="303.549"
                      y="401.397"
                      width="16.539"
                      height="15.506"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="303.549"
                      y="377.622"
                      width="16.539"
                      height="15.505"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="303.549"
                      y="353.847"
                      width="16.539"
                      height="15.505"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M375.295,313.529h-7.953c-11.592,0-21.322-7.608-23.859-18.252v-156.86c-0.184-20.633-14.233-48.482-41.499-84.548
			c-19.939-26.374-39.552-47.164-40.376-48.027L256.003,0l-5.606,5.921c-0.825,0.864-20.437,21.562-40.376,47.936
			c-27.266,36.066-41.315,63.927-41.499,84.56v156.86c-2.536,10.644-12.267,18.252-23.859,18.252h-7.953
			c-21.999,0-39.898,17.77-39.898,39.615v47.216h71.709v40.265h174.962V400.36h71.709v-47.216
			C415.193,331.301,397.294,313.529,375.295,313.529z M256.003,22.956c6.703,7.338,15.176,17.09,23.932,28.013H232.07
			C240.826,40.047,249.3,30.295,256.003,22.956z M168.522,384.855L168.522,384.855h-56.204v-31.711
			c0-13.293,10.942-24.109,24.392-24.109h7.953c8.935,0,17.191-2.913,23.859-7.82V384.855z M327.578,400.36v24.359h-64.34V320.661
			c18.482-3.413,32.529-19.638,32.529-39.093c0-21.926-17.838-39.763-39.764-39.763s-39.764,17.838-39.764,39.763
			c0,19.09,13.525,35.077,31.495,38.893v104.258h-63.306V400.36h0.25l-0.25-213.976h7.486v-15.506h-7.486v-16.556h143.151v16.556
			h-7.486v15.506h7.486l-0.25,213.976H327.578z M256.003,305.427c-13.156,0-23.859-10.703-23.859-23.859
			c0-13.156,10.703-23.859,23.859-23.859c13.156,0,23.859,10.703,23.859,23.859C279.861,294.724,269.159,305.427,256.003,305.427z
			 M184.17,138.417c0.249-18.57,17.176-46.672,35.925-71.943h71.814c18.749,25.27,35.676,53.372,35.925,71.943H184.17z
			 M399.688,384.855h-0.001h-56.203v-63.64c6.667,4.907,14.923,7.82,23.859,7.82h7.953c13.45,0,24.392,10.815,24.392,24.109V384.855
			z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h2 className="font-syne text-lg font-semibold mt-8">Startups</h2>
            <p className="font-syne text-base mt-4 font-medium text-black/35">
              Build a strong online presence with great designs,
              <br />
              websites, and marketing.
            </p>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="bg-[#e7e7e8] w-20 h-20 flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="45"
                viewBox="0 0 40 45"
                fill="none"
              >
                <g clipPath="url(#clip0_790_24)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.777 44.9231H5.222C2.342 44.9231 0 42.5911 0 39.7251V10.3121C0 10.1891 0.28 10.7101 0.71 9.95909C0.86 9.91909 0.109 9.88609 0.129 9.84909C0.153 9.80509 0.169 9.75609 0.2 9.71509L6.533 1.31209C6.721 1.61009 7.18 0.913086 7.332 0.913086H32.666C32.981 0.913086 33.277 1.61009 33.466 1.31209L39.799 9.71509C39.83 9.75609 39.846 9.80509 39.87 9.84909C39.89 9.88609 39.913 9.91909 39.928 9.95909C39.971 10.7101 39.999 10.1891 39.999 10.3121V39.7251C39.999 42.5911 37.657 44.9231 34.777 44.9231ZM32.166 2.90309H7.832L2.999 9.31709H37L32.166 2.90309ZM37.999 11.3071H1.999V39.7251C1.999 41.4941 3.445 42.9321 5.222 42.9321H34.777C36.554 42.9321 37.999 41.4941 37.999 39.7251V11.3071ZM19.999 28.1141C14.792 28.1141 10.555 23.8981 10.555 18.7151C10.555 18.1661 11.3 17.7201 11.555 17.7201C12.107 17.7201 12.555 18.1661 12.555 18.7151C12.555 22.8001 15.894 26.1241 19.999 26.1241C24.104 26.1241 27.444 22.8001 27.444 18.7151C27.444 18.1661 27.892 17.7201 28.444 17.7201C28.996 17.7201 29.444 18.1661 29.444 18.7151C29.444 23.8981 25.207 28.1141 19.999 28.1141Z"
                    fill="#121820"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_790_24">
                    <rect width="40" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="font-syne text-lg font-semibold mt-8">
              E-Commerce Stores
            </h2>
            <p className="font-syne text-base mt-4 font-medium text-black/35">
              Streamline online shopping with smooth navigation and <br />
              secure checkout options.
            </p>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="bg-[#e7e7e8] w-20 h-20 flex justify-center items-center rounded-full">
              <svg
                fill="#000000"
                width="40"
                height="45"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path d="M6 4 A 1.0001 1.0001 0 0 0 5 5L5 8.8574219C4.9598285 8.9910122 4.5208315 10.450159 4.0410156 12.087891C3.7903729 12.943397 3.5393498 13.811635 3.3496094 14.492188C3.2547394 14.832463 3.1753346 15.12478 3.1171875 15.353516C3.0881145 15.467884 3.0639299 15.56438 3.0449219 15.652344C3.0259144 15.740307 3 15.738159 3 16C3 17.028909 3.4048312 17.962549 4.0507812 18.673828 A 1.0001 1.0001 0 0 0 4 19L4 45 A 1.0001 1.0001 0 0 0 5 46L10.832031 46 A 1.0001 1.0001 0 0 0 11.158203 46L24.832031 46 A 1.0001 1.0001 0 0 0 25.158203 46L38.832031 46 A 1.0001 1.0001 0 0 0 39.158203 46L45 46 A 1.0001 1.0001 0 0 0 46 45L46 19 A 1.0001 1.0001 0 0 0 45.949219 18.673828C46.595169 17.962549 47 17.028909 47 16C47 15.738159 46.974088 15.740307 46.955078 15.652344C46.936068 15.564384 46.911893 15.467884 46.882812 15.353516C46.824669 15.12478 46.745261 14.832462 46.650391 14.492188C46.46065 13.811635 46.209627 12.943397 45.958984 12.087891C45.479169 10.450159 45.040171 8.9910122 45 8.8574219L45 5 A 1.0001 1.0001 0 0 0 44 4L6 4 z M 7 6L43 6L43 8L7 8L7 6 z M 6.7460938 10L43.253906 10C43.402984 10.497445 43.647985 11.30888 44.041016 12.650391C44.290373 13.501509 44.53935 14.364817 44.724609 15.029297C44.817239 15.361537 44.894087 15.644185 44.945312 15.845703C44.965494 15.925103 44.977251 15.979131 44.988281 16.027344C44.971365 17.12863 44.105831 18 43 18C41.883334 18 41 17.116666 41 16 A 1.0001 1.0001 0 0 0 39.001953 15.929688 A 1.0001 1.0001 0 0 0 39 16C39 17.116666 38.116666 18 37 18C35.883334 18 35 17.116666 35 16 A 1.0001 1.0001 0 0 0 34.773438 15.351562 A 1.0001 1.0001 0 0 0 34.707031 15.279297 A 1.0001 1.0001 0 0 0 34.466797 15.101562 A 1.0001 1.0001 0 0 0 34.464844 15.101562 A 1.0001 1.0001 0 0 0 34.375 15.058594 A 1.0001 1.0001 0 0 0 34.083984 14.990234 A 1.0001 1.0001 0 0 0 33.984375 14.986328 A 1.0001 1.0001 0 0 0 33.785156 15.009766 A 1.0001 1.0001 0 0 0 33.689453 15.035156 A 1.0001 1.0001 0 0 0 33.597656 15.070312 A 1.0001 1.0001 0 0 0 33.595703 15.072266 A 1.0001 1.0001 0 0 0 33.455078 15.148438 A 1.0001 1.0001 0 0 0 33.421875 15.169922 A 1.0001 1.0001 0 0 0 33.388672 15.197266 A 1.0001 1.0001 0 0 0 33.271484 15.300781 A 1.0001 1.0001 0 0 0 33.150391 15.458984 A 1.0001 1.0001 0 0 0 33.101562 15.544922 A 1.0001 1.0001 0 0 0 33.101562 15.546875 A 1.0001 1.0001 0 0 0 33.0625 15.636719 A 1.0001 1.0001 0 0 0 33.0625 15.638672 A 1.0001 1.0001 0 0 0 33.033203 15.732422 A 1.0001 1.0001 0 0 0 33.033203 15.734375 A 1.0001 1.0001 0 0 0 33.011719 15.830078 A 1.0001 1.0001 0 0 0 33.011719 15.832031 A 1.0001 1.0001 0 0 0 33.001953 15.929688 A 1.0001 1.0001 0 0 0 33.001953 15.931641 A 1.0001 1.0001 0 0 0 33 16C33 17.116666 32.116666 18 31 18C29.883334 18 29 17.116666 29 16 A 1.0001 1.0001 0 0 0 28.996094 15.900391 A 1.0001 1.0001 0 0 0 28.773438 15.353516 A 1.0001 1.0001 0 0 0 28.773438 15.351562 A 1.0001 1.0001 0 0 0 28.464844 15.101562 A 1.0001 1.0001 0 0 0 28.375 15.058594 A 1.0001 1.0001 0 0 0 28.083984 14.990234 A 1.0001 1.0001 0 0 0 27.884766 14.992188 A 1.0001 1.0001 0 0 0 27.785156 15.009766 A 1.0001 1.0001 0 0 0 27.597656 15.070312 A 1.0001 1.0001 0 0 0 27.595703 15.072266 A 1.0001 1.0001 0 0 0 27.455078 15.148438 A 1.0001 1.0001 0 0 0 27.388672 15.197266 A 1.0001 1.0001 0 0 0 27.271484 15.300781 A 1.0001 1.0001 0 0 0 27.101562 15.544922 A 1.0001 1.0001 0 0 0 27.101562 15.546875 A 1.0001 1.0001 0 0 0 27.0625 15.636719 A 1.0001 1.0001 0 0 0 27.0625 15.638672 A 1.0001 1.0001 0 0 0 27.033203 15.732422 A 1.0001 1.0001 0 0 0 27.033203 15.734375 A 1.0001 1.0001 0 0 0 27.011719 15.830078 A 1.0001 1.0001 0 0 0 27.011719 15.832031 A 1.0001 1.0001 0 0 0 27.001953 15.929688 A 1.0001 1.0001 0 0 0 27.001953 15.931641 A 1.0001 1.0001 0 0 0 27 16C27 17.116666 26.116666 18 25 18C23.883334 18 23 17.116666 23 16 A 1.0001 1.0001 0 0 0 22.996094 15.900391 A 1.0001 1.0001 0 0 0 22.773438 15.353516 A 1.0001 1.0001 0 0 0 22.773438 15.351562 A 1.0001 1.0001 0 0 0 22.464844 15.101562 A 1.0001 1.0001 0 0 0 22.375 15.058594 A 1.0001 1.0001 0 0 0 21.884766 14.992188 A 1.0001 1.0001 0 0 0 21.785156 15.009766 A 1.0001 1.0001 0 0 0 21.597656 15.070312 A 1.0001 1.0001 0 0 0 21.595703 15.072266 A 1.0001 1.0001 0 0 0 21.455078 15.148438 A 1.0001 1.0001 0 0 0 21.421875 15.169922 A 1.0001 1.0001 0 0 0 21.388672 15.197266 A 1.0001 1.0001 0 0 0 21.101562 15.544922 A 1.0001 1.0001 0 0 0 21.101562 15.546875 A 1.0001 1.0001 0 0 0 21.0625 15.636719 A 1.0001 1.0001 0 0 0 21.0625 15.638672 A 1.0001 1.0001 0 0 0 21.033203 15.732422 A 1.0001 1.0001 0 0 0 21.033203 15.734375 A 1.0001 1.0001 0 0 0 21.011719 15.830078 A 1.0001 1.0001 0 0 0 21.011719 15.832031 A 1.0001 1.0001 0 0 0 21.001953 15.929688 A 1.0001 1.0001 0 0 0 21.001953 15.931641 A 1.0001 1.0001 0 0 0 21 16C21 17.116666 20.116666 18 19 18C17.883334 18 17 17.116666 17 16 A 1.0001 1.0001 0 0 0 16.996094 15.900391 A 1.0001 1.0001 0 0 0 16.773438 15.353516 A 1.0001 1.0001 0 0 0 16.773438 15.351562 A 1.0001 1.0001 0 0 0 16.464844 15.101562 A 1.0001 1.0001 0 0 0 16.375 15.058594 A 1.0001 1.0001 0 0 0 15.884766 14.992188 A 1.0001 1.0001 0 0 0 15.785156 15.009766 A 1.0001 1.0001 0 0 0 15.597656 15.070312 A 1.0001 1.0001 0 0 0 15.595703 15.072266 A 1.0001 1.0001 0 0 0 15.455078 15.148438 A 1.0001 1.0001 0 0 0 15.421875 15.169922 A 1.0001 1.0001 0 0 0 15.388672 15.197266 A 1.0001 1.0001 0 0 0 15.101562 15.544922 A 1.0001 1.0001 0 0 0 15.101562 15.546875 A 1.0001 1.0001 0 0 0 15.0625 15.636719 A 1.0001 1.0001 0 0 0 15.0625 15.638672 A 1.0001 1.0001 0 0 0 15.033203 15.732422 A 1.0001 1.0001 0 0 0 15.033203 15.734375 A 1.0001 1.0001 0 0 0 15.011719 15.830078 A 1.0001 1.0001 0 0 0 15.011719 15.832031 A 1.0001 1.0001 0 0 0 15.001953 15.929688 A 1.0001 1.0001 0 0 0 15.001953 15.931641 A 1.0001 1.0001 0 0 0 15 16C15 17.116666 14.116666 18 13 18C11.883334 18 11 17.116666 11 16 A 1.0001 1.0001 0 0 0 10.996094 15.900391 A 1.0001 1.0001 0 0 0 10.773438 15.353516 A 1.0001 1.0001 0 0 0 10.773438 15.351562 A 1.0001 1.0001 0 0 0 10.464844 15.101562 A 1.0001 1.0001 0 0 0 10.375 15.058594 A 1.0001 1.0001 0 0 0 9.8847656 14.992188 A 1.0001 1.0001 0 0 0 9.7851562 15.009766 A 1.0001 1.0001 0 0 0 9.5976562 15.070312 A 1.0001 1.0001 0 0 0 9.5957031 15.072266 A 1.0001 1.0001 0 0 0 9.4550781 15.148438 A 1.0001 1.0001 0 0 0 9.421875 15.169922 A 1.0001 1.0001 0 0 0 9.3886719 15.197266 A 1.0001 1.0001 0 0 0 9.1015625 15.544922 A 1.0001 1.0001 0 0 0 9.1015625 15.546875 A 1.0001 1.0001 0 0 0 9.0625 15.636719 A 1.0001 1.0001 0 0 0 9.0625 15.638672 A 1.0001 1.0001 0 0 0 9.0332031 15.732422 A 1.0001 1.0001 0 0 0 9.0332031 15.734375 A 1.0001 1.0001 0 0 0 9.0117188 15.830078 A 1.0001 1.0001 0 0 0 9.0117188 15.832031 A 1.0001 1.0001 0 0 0 9.0019531 15.929688 A 1.0001 1.0001 0 0 0 9.0019531 15.931641 A 1.0001 1.0001 0 0 0 9 16C9 17.116666 8.1166661 18 7 18C5.8941692 18 5.0286341 17.12863 5.0117188 16.027344C5.0227438 15.979134 5.0345035 15.925102 5.0546875 15.845703C5.1059155 15.644185 5.1827609 15.361537 5.2753906 15.029297C5.4606502 14.364817 5.7096271 13.501509 5.9589844 12.650391C6.3520145 11.30888 6.5970162 10.497445 6.7460938 10 z M 10 18.611328C10.735155 19.453795 11.802849 20 13 20C14.197151 20 15.264845 19.453795 16 18.611328C16.735155 19.453795 17.802849 20 19 20C20.197151 20 21.264845 19.453795 22 18.611328C22.735155 19.453795 23.802849 20 25 20C26.197151 20 27.264845 19.453795 28 18.611328C28.735155 19.453795 29.802849 20 31 20C32.197151 20 33.264845 19.453795 34 18.611328C34.735155 19.453795 35.802849 20 37 20C38.197151 20 39.264845 19.453795 40 18.611328C40.735155 19.453795 41.802849 20 43 20C43.346999 20 43.678231 19.939834 44 19.855469L44 44L40 44L40 24 A 1.0001 1.0001 0 0 0 39 23L25.154297 23 A 1.0001 1.0001 0 0 0 24.984375 22.986328 A 1.0001 1.0001 0 0 0 24.839844 23L11 23 A 1.0001 1.0001 0 0 0 10 24L10 44L6 44L6 19.855469C6.3217694 19.939834 6.6530011 20 7 20C8.1971509 20 9.2648452 19.453795 10 18.611328 z M 12 25L24 25L24 44L12 44L12 25 z M 26 25L38 25L38 44L26 44L26 25 z M 21 33 A 1 1 0 0 0 20 34 A 1 1 0 0 0 21 35 A 1 1 0 0 0 22 34 A 1 1 0 0 0 21 33 z M 29 33 A 1 1 0 0 0 28 34 A 1 1 0 0 0 29 35 A 1 1 0 0 0 30 34 A 1 1 0 0 0 29 33 z" />
              </svg>
            </div>
            <h2 className="font-syne text-lg font-semibold mt-8">
              Small Businesses
            </h2>
            <p className="font-syne text-base mt-4 font-medium text-black/35">
              Get affordable solutions to grow and manage your .
              <br />
              business
            </p>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default Services;
