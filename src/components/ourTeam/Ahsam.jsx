import { useLocation, useNavigate } from "react-router-dom";
import BGDot from "../../assets/images/dotmap.png";
import Navbar from "../../components/navbar/index";
import "../../App.css";
import AhsamJobBar from "../SkillBar/AhsamJobBar";
import MainFooter from "../../components/Footer/mainFooter";
import linkedin from "../../assets/images/linkedin.png";
import medium from "../../assets/images/medium.png";
import behance from "../../assets/images/behance.png";
import dribble from "../../assets/images/dribble.png";

const Ahsam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, title, img } = location.state || {};

  return (
    <>
      <Navbar />
      <header
        className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] min-h-[500px] sm:min-h-auto"
        style={{
          backgroundImage: `url(${BGDot})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <button
              onClick={() => navigate("/team")}
              className="group flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition font-syne"
              aria-label="Go back to the team page"
            >
              <span className="bg-yellow text-white p-2 rounded-full transition-transform duration-300 transform group-hover:-translate-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              Go Back
            </button>

            <div className="flex items-center justify-center lg:justify-start gap-5 mt-4">
              <h1 className="text-2xl md:text-3xl font-bold font-syne">
                {name}
              </h1>
              <div className="bg-yellow h-3 w-3 rounded-full"></div>
            </div>
            <p className="mt-4 text-lg md:text-xl font-syne">{title}</p>
          </div>

          {/* Right Section */}
          <figure className="w-full lg:w-auto">
            <img
              src={img}
              alt={`Profile of ${name}`}
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full mx-auto lg:mx-0"
            />
          </figure>
        </div>
      </header>

      <main className="container mx-auto pt-20 flex flex-col-reverse lg:flex-row gap-8 p-6">
        {/* Biography Section */}
        <div className="">
          <h2 className="text-3xl font-bold mb-4 font-syne">Biography</h2>
          <p className="text-lg text-gray-600 mb-6 font-syne">
            Co-founder, senior UX/UI designer, and COO with over seven years of
            experience in delivering innovative and user-centered digital
            solutions. Passionate about designing intuitive interfaces that
            blend creativity with functionality. Dedicated to driving
            operational excellence and impactful results for the company.
          </p>

          <ul className="mil-timeline">
            <li>
              <h3 className="mil-mb-5 ml-7 font-syne font-semibold">
                uConnect Technologies
              </h3>
              <p className="mil-text-lg font-semibold font-syne">
                Sep 2019 - Apr 2020
              </p>
            </li>
            <li>
              <h3 className="mil-mb-5 ml-7 font-syne font-semibold">
                VentureDive
              </h3>
              <p className="mil-text-lg font-semibold font-syne">
                Sep 2020 - Dec 2020
              </p>
            </li>
            <li>
              <h3 className="mil-mb-5 ml-7 font-syne font-semibold">
                Techstack Digital
              </h3>
              <p className="mil-text-lg font-semibold font-syne">
                Jan 2021 - Aug 2021
              </p>
            </li>

            <li>
              <h3 className="mil-mb-5 ml-7 font-syne font-semibold">
                ReverbSoft Technologies
              </h3>
              <p className="mil-text-lg font-semibold  font-syne">
                Aug 2021 - Aug 2022
              </p>
            </li>
            <li>
              <h3 className="mil-mb-5 ml-7 font-syne font-semibold">
                Northnine
              </h3>
              <p className="mil-text-lg font-semibold  font-syne">
                Jan 2022 - Present
              </p>
            </li>
          </ul>

          <p className="mt-6 text-gray-700 font-syne">
            Ahsam Baig, the dynamic CFO of Northnine, is a visionary leader
            known for steering the company towards innovation and success...
          </p>

          <div className="flex gap-1 w-full mt-5 lg:mt-[60px] h-5">
            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
            <div className="w-[96%] h-[2px] bg-gray-300"></div>
            <div className="w-[2%] h-[2px] bg-[#fdcb22]"></div>
          </div>
          <AhsamJobBar />
        </div>

        {/* Testimonial Section */}
        <aside className="bg-white p-6 rounded-md">
          <blockquote className="text-xl italic font-light text-center mb-6 font-syne">
            <p>
              Northnine allowed me to grow and{" "}
              <span className="text-yellow font-bold">reach goals</span> that I
              never imagined.
            </p>
          </blockquote>
          <div className="container flex mx-auto mt-[52px] pb-3 gap-1">
            <div className="w-[2%] h-[2px] bg-yellow"></div>
            <div className="w-[96%] h-[2px] bg-[#121820]/10"></div>
            <div className="w-[2%] h-[2px] bg-yellow"></div>
          </div>
          <p className="text-center text-sm text-gray-500 font-syne">
            AhsamBaig@gmail.com
          </p>
          <div className="mt-7">
            <h3 className="font-semibold text-lg font-syne text-center">
              Socials
            </h3>
            <div className="flex space-x-4 mt-2 justify-center">
              <a
                href="https://www.linkedin.com/in/baig-ahsam-71447619b/" // Replace with actual LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <img src={linkedin} alt="LinkedIn" className="h-8" />
              </a>
              <a
                href="https://www.behance.net/ahsamhunzai?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <img src={behance} alt="behance" className="h-8" />
              </a>
              <a
                href="https://dribbble.com/hajibaig"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <img src={dribble} alt="dribble" className="h-8" />
              </a>
            </div>
          </div>
        </aside>
      </main>
      <MainFooter />
    </>
  );
};

export default Ahsam;
