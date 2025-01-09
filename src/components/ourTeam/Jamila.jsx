import { useLocation, useNavigate } from "react-router-dom";
import BGDot from '../../assets/images/dotmap.png';
import Navbar from "../../components/navbar/index";

const Jamila = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, title, img } = location.state || {};

    return (
        <>
            <Navbar />
            <div
                className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] h-[500px]"
                style={{
                    backgroundImage: `url(${BGDot})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="lg:container w-[90%] mx-auto flex justify-between items-center">
                    <div>
                        <button
                            onClick={() => navigate('/team')}
                            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition"
                        >
                            <span className="bg-yellow text-yellow-500 text-white p-2 rounded-full">
                                {/* Back Icon */}
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
                        <div className="flex items-center gap-5">
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <div className="bg-yellow h-3 w-3 rounded-full"></div>
                        </div>
                        <p className="mt-4 text-xl">{title}</p>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            src={img}
                            alt={name}
                            className="w-80 h-80 object-cover mt-4 rounded-b-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jamila;
