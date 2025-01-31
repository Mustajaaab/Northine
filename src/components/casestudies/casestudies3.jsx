import { useState, useEffect } from "react";
import Navbar from "../navbar/index";
import BGDot from "../../assets/images/dotmap.png";
import { Link } from "react-router-dom";
import tickk from "../../assets/images/tickk.png";
import Bookkeeping from "../../assets/images/bookkeeping1.jpeg";
import case2 from "../../assets/images/case3.png";
import uxui from "../../assets/images/case1.jpeg";
import MainFooter from "../Footer/mainFooter";
const slides = [
  {
    id: 1,
    mainImg: uxui,
    mainTitle: "The Solution",
    mainDesc:
      "We designed the Zoom Accounting web app with a focus on user experience and accessibility. Key features included:",
    mark: "Simple financial tracking",
    flag: "One-click report generation",
    cube: "Investment dashboard",
    search: "Real-time data synchronization",
    order1: "order-1",
    order2: "order-2",
    link: "/case-studies1",
  },

  {
    id: 4,
    mainImg: case2,
    mainTitle: "The Impact",
    mainDesc: "The launch of the Zoom Accounting web app led to:",
    mark: "Increased efficiency",
    flag: "FHigher user engagement",
    cube: "Improved financial clarity ",
    search: "Enhanced user satisfaction",
    order1: "order-2",
    order2: "order-1",
  },
];
const CasesStudie3 = () => {
  const [skillPercentages] = useState([88, 90, 87, 85]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        setSkillPercentages(
          entry.isIntersecting ? [88, 90, 87, 85] : new Array(9).fill(0)
        ),
      { threshold: 0.3 }
    );
    const section = document.querySelector("#sec4");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const projectInfo = [
    { title: "eCoshop Club", sub: "Client", skillp: "98" },
    { title: "App Development", sub: "Service", skillp: "93" },
    { title: "Retail, eCommerce", sub: "Industry", skillp: "97" },
  ];

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
                All CASESTUDIES
              </Link>
              <div className="bg-yellow h-2 w-2 rounded-full"></div>
            </div>
            <h1 className="lg:text-5xl text-3xl font-syne mt-10 font-semibold uppercase">
              Zoom Accounting – Simplifying Financial Management for Small
              Businesses
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
              {/* SVG Path Here */}
            </svg>
          </div>
        </div>
      </div>
      <div className="lg:container w-[90%] mx-auto pb-[0px]">
        <div className="grid grid-cols-3 gap-4 pt-[100px]">
          <div className="col-span-2 pe-20">
            <h2 className="font-syne lg:text-[25px] text-2xl font-semibold w-[80%] mt-[20px]">
              Challenge
            </h2>
            <p className="text-black/30 text-base font-syne mb-[20px] mt-[20px]">
              Managing finances can be overwhelming for small businesses and
              entrepreneurs. Zoom Accounting wanted to provide a solution that
              made financial management and investment tracking easier, but they
              faced key challenges
            </p>
            <h2 className="font-syne lg:text-[25px] text-2xl font-semibold w-[80%] mt-[50px]">
              Our Solution
            </h2>
            <p className="text-black/30 text-base font-syne mb-[20px] mt-[20px]">
              To tackle these challenges, we took a deep dive into user behavior
              and expectations. Our goal was to create an intuitive,
              mobile-first app that made ordering effortless. We focused on:
            </p>
            <div className="mt-[30px] grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 lg:mt-0 mt-1">
                <img src={tickk} alt="tick" className="w-10 h-9" />
                <p className="text-lg font-syne">A clean, modern interface </p>
              </div>
              <div className="flex items-center gap-2 lg:mt-0 mt-1">
                <img src={tickk} alt="tick" className="w-10 h-9" />
                <p className="text-lg font-syne">Intuitive navigation</p>
              </div>
              <div className="flex items-center gap-2 lg:mt-0 mt-1">
                <img src={tickk} alt="tick" className="w-10 h-9" />
                <p className="text-lg font-syne">
                  Automated financial reporting
                </p>
              </div>
              <div className="flex items-center gap-2 lg:mt-0 mt-1">
                <img src={tickk} alt="tick" className="w-10 h-9" />
                <p className="text-lg font-syne">
                  Seamless integration with banking and accounting tools{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 lg:mt-0 mt-1">
                <img src={tickk} alt="tick" className="w-10 h-9" />
                <p className="text-lg font-syne">Mobile-friendly design</p>
              </div>
              <div className="flex items-center gap-2 lg:mt-0 mt-1">
                <img src={tickk} alt="tick" className="w-10 h-9" />
                <p className="text-lg font-syne">
                  Robust data security measures
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="px-[20px] pb-[16px] w-[80%] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h1 className="text-xl font-semibold font-syne text mb-[15px]">
                Project Info
              </h1>
              <div className="grid grid-cols-1 gap-4 mb-[30px]">
                {projectInfo.map(({ title, sub, skillp }, idx) => (
                  <div key={idx} className="mb-[10px]">
                    <h4 className="font-syne text-black/30 font-bold">{sub}</h4>
                    <h4 className="font-syne font-bold">{title}</h4>
                    <div className="flex mt-[1px]">
                      <div className="flex items-center w-[90%]">
                        <div
                          className="h-[2px] bg-yellow"
                          style={{
                            width: `${skillp}%`,
                            transition: "width 3s ease-in-out",
                          }}
                        ></div>
                        <div className="w-3 h-3 bg-yellow rounded-full"></div>
                        <div
                          className="h-[2px] bg-[#121820]/40"
                          style={{
                            width: `${100 - skillp}%`,
                            transition: "width 3s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="font-syne text-black/30 font-bold">Stack</h4>
              <h4 className="font-syne font-bold">
                Android, Realm, Dagger 2, RxJava
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container w-[90%] flex mx-auto pb-3 gap-1 mt-[100px]">
        <div className="w-[2%] h-[2px] bg-yellow"></div>
        <div className="w-[96%] h-[2px] bg-[#121820]/10"></div>
        <div className="w-[2%] h-[2px] bg-yellow"></div>
      </div>
      <div className="lg:container w-[90%]  mx-auto pb-3 gap-1 mt-[100px]">
        {slides.map((items) => (
          <div className={` `}>
            <div className="mt-[90px] lg:flex justify-between">
              <img
                src={items.mainImg}
                alt=""
                className={`lg:w-[645px] ${items.order1} lg:h-[400px] rounded-xl   ease-in-out duration-500`}
              />
              <div
                className={` lg:w-[645px]  ${items.order2} order-1  mt-5 lg:pl-[50px]`}
              >
                <p className="font-syne lg:text-[25px] text-2xl font-semibold  mt-[20px]">
                  {items.mainTitle}
                </p>
                <p className="text-black/30 mt-7 mb-[40px]">{items.mainDesc}</p>
                <div className="flex my-[10px] gap-[10px]">
                  <svg
                      width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_663_86)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.999 20.9179C14.794 20.9179 14.591 20.8549 14.418 20.7329L7.999 16.1599L1.58 20.7329C1.275 20.9479 0.875 20.9779 0.541 20.8079C0.208 20.6369 0 20.2939 0 19.9219V3.96392C0 2.31492 1.345 0.971924 2.999 0.971924H12.999C14.654 0.971924 15.999 2.31492 15.999 3.96392V19.9219C15.999 20.2939 15.79 20.6369 15.457 20.8079C15.313 20.8819 15.155 20.9179 14.999 20.9179ZM7.999 13.9369C8.203 13.9369 8.407 13.9999 8.58 14.1229L13.999 17.9829V3.96392C13.999 3.41392 13.551 2.96692 12.999 2.96692H2.999C2.448 2.96692 1.999 3.41392 1.999 3.96392V17.9829L7.418 14.1229C7.592 13.9999 7.795 13.9369 7.999 13.9369Z"
                        fill="#121820"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_663_86">
                        <rect width="16" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>{items.mark}</p>
                </div>
                <div className="flex my-[10px] gap-[10px]">
                  <svg
                      width="16"
                    height="21"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_663_84)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.706 14.704C17.491 14.92 16.249 15.997 12.999 15.997C11.307 15.997 9.945 15.453 8.628 14.926C7.434 14.448 6.307 13.998 4.999 13.998C3.351 13.998 2.433 14.324 1.999 14.54V20.997C1.999 21.549 1.552 21.997 0.999 21.997C0.447 21.997 0 21.549 0 20.997V13.998V1.99795C0 1.73195 0.105 1.47795 0.292 1.28995C0.508 1.73995 1.75 0.199951 4.999 0.199951C6.692 0.199951 8.54 0.541951 9.371 1.68995C10.564 1.54595 11.692 1.99795 12.999 1.99795C15.444 1.99795 16.309 1.27295 16.318 1.26595C16.614 1.09995 17.47 0.937951 17.401 1.09995C17.757 1.26195 17.999 1.60495 17.999 1.99795V13.998C17.999 14.262 17.894 14.516 17.706 14.704ZM15.999 3.60395C15.279 3.82495 14.3 3.99695 12.999 3.99695C11.307 3.99695 9.945 3.45195 8.628 2.92595C7.434 2.44895 6.307 1.99795 4.999 1.99795C3.366 1.99795 2.438 2.31995 1.999 2.53495V12.391C2.72 12.169 3.698 11.997 4.999 11.997C6.692 11.997 8.54 12.542 9.371 13.68C10.564 13.547 11.692 13.998 12.999 13.998C14.632 13.998 15.56 13.674 15.999 13.457V3.60395Z"
                        fill="#121820"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_663_84">
                        <rect width="18" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>{items.flag}</p>
                </div>
                <div className="flex my-[10px] gap-[8px]">
                  <svg
                      width="16"
                    height="21"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_664_131)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.499 18.363L11.496 22.33C11.181 22.51 10.838 22.606 10.489 22.663C10.342 22.747 10.181 22.807 9.999 22.807C9.818 22.807 9.656 22.746 9.509 22.662C9.16 22.605 8.816 22.509 8.5 22.328L1.503 18.365C0.576 17.834 0.1 16.848 0 15.791V7.85898C0 7.39298 0.128 6.94998 0.331 6.54498C0.353 6.47298 0.364 6.39898 0.404 6.33098C0.466 6.22498 0.55 6.13898 0.641 6.65998C0.877 5.75998 1.154 5.48298 1.499 5.28498L8.503 1.31798C9.425 0.790982 10.574 0.789983 11.5 1.31998L18.496 5.28298C18.842 5.48198 19.119 5.75798 19.356 6.62998C19.448 6.13698 19.532 6.22398 19.595 6.33098C19.635 6.39898 19.646 6.47298 19.667 6.54398C19.871 6.94898 19.999 7.39298 19.999 7.85798V15.789V15.79C19.999 16.848 19.424 17.834 18.499 18.363ZM1.999 15.789C2 16.141 2.191 16.469 2.499 16.646L8.999 20.328V12.406L1.999 8.39198V15.789ZM10.503 3.38998C10.347 2.94898 10.172 2.90498 9.998 2.90498C9.826 2.90498 9.653 2.94898 9.5 3.36998L3.38 6.69698L9.999 10.689L16.96 6.69698L10.503 3.38998ZM17.999 8.39098L10.999 12.406V20.328L17.503 16.644C17.808 16.469 17.999 16.141 17.999 15.789V8.39098Z"
                        fill="#121820"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_664_131">
                        <rect width="20" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{items.cube}</p>
                </div>
                <div className="flex my-[10px] gap-[8px]">
                  <svg
                      width="16"
                    height="21"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_664_133)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.999 21.999H3C1.345 21.999 0 20.653 0 18.999V14.999C0 13.345 1.345 11.999 3 11.999H18.999C20.654 11.999 21.999 13.345 21.999 14.999V18.999C21.999 20.653 20.654 21.999 18.999 21.999ZM19.999 14.999C19.999 14.447 19.551 13.999 18.999 13.999H3C2.448 13.999 1.999 14.447 1.999 14.999V18.999C1.999 19.551 2.448 19.999 3 19.999H18.999C19.551 19.999 19.999 19.551 19.999 18.999V14.999ZM5.1 17.999C4.457 17.999 4.5 17.552 4.5 16.999C4.5 16.446 4.447 15.999 4.999 15.999H5.1C5.562 15.999 6.1 16.446 6.1 16.999C6.1 17.552 5.562 17.999 5.1 17.999ZM18.999 9.999H3C1.345 9.999 0 8.653 0 6.999V2.999C0 1.345 1.345 0 3 0H18.999C20.654 0 21.999 1.345 21.999 2.999V6.999C21.999 8.653 20.654 9.999 18.999 9.999ZM19.999 2.999C19.999 2.447 19.551 1.999 18.999 1.999H3C2.448 1.999 1.999 2.447 1.999 2.999V6.999C1.999 7.551 2.448 7.999 3 7.999H18.999C19.551 7.999 19.999 7.551 19.999 6.999V2.999ZM5.1 5.999C4.457 5.999 4.5 5.552 4.5 4.999C4.5 4.446 4.447 3.999 4.999 3.999H5.1C5.562 3.999 6.1 4.446 6.1 4.999C6.1 5.552 5.562 5.999 5.1 5.999Z"
                        fill="#121820"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_664_133">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>{items.search}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:container w-[90%] flex mx-auto pb-3 gap-1 mt-[100px]">
        <div className="w-[2%] h-[2px] bg-yellow"></div>
        <div className="w-[96%] h-[2px] bg-[#121820]/10"></div>
        <div className="w-[2%] h-[2px] bg-yellow"></div>
      </div>
      <div className="lg:container w-[90%]  mx-auto pb-3 gap-1 mt-[100px]">
        <div className="grid grid-cols-2 my-[90px]">
          <div>
            <h2 className="lg:text-4xl text-2xl font-syne mt-10 font-semibold mb-[20px]">
              Conclusion
            </h2>
            <p className="text-black/30">
              By focusing on user-friendly design and smart automation, we
              helped Zoom Accounting transform financial management for small
              businesses. The result? A powerful yet simple tool that removes
              complexity, improves efficiency, and empowers entrepreneurs to
              take control of their finances with confidence.
            </p>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default CasesStudie3;
