import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Northnine from '../../assets/images/no9.png';

function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-yellow lg:border-b border-yellow' : 'text-white';
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full mx-auto items-center h-[110px] lg:h-[80px] fixed bg-[#121820] z-50">
            <div className="container mx-auto flex items-center justify-between mt-4">
                <img src={Northnine} alt="Northnine Logo" className="lg:w-[186px] lg:h-[50px] md:w-[200px] md:h-[60px] w-[286px] h-[80px] ml-5" />

                {/* Hamburger Icon for Small Screens */}
                <div className="lg:hidden">
                    <svg
                        onClick={toggleMenu}
                        className="w-20 h-20 md:w-14 md:h-14 text-white cursor-pointer mr-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6h16M4 12h16m-7 6h7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Navigation Links */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } lg:flex lg:items-center lg:gap-8 text-center absolute lg:static top-[80px] right-0 bg-[#121820] w-full lg:w-auto`}
                >
                    <Link
                        to="/home"
                        className={`${getActiveClass('/home')} block font-syne lg:text-base text-3xl font-semibold hover:text-yellow py-5 lg:py-0`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`${getActiveClass('/about')} block font-syne lg:text-base text-3xl font-semibold hover:text-yellow py-5 lg:py-0`}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/team"
                        className={`${getActiveClass('/team')} block font-syne lg:text-base text-3xl font-semibold hover:text-yellow py-5 lg:py-0`}
                    >
                        Team
                    </Link>
                    <Link
                        to="/services"
                        className={`${getActiveClass('/services')} block font-syne lg:text-base text-3xl font-semibold hover:text-yellow py-5 lg:py-0`}
                    >
                        Services
                    </Link>
                    <Link
                        to="/case-studies"
                        className={`${getActiveClass('/case-studies')} block font-syne lg:text-base text-3xl font-semibold hover:text-yellow py-5 lg:py-0`}
                    >
                        Case Studies
                    </Link>
                    <Link
                        to="/contact-us"
                        className={`${getActiveClass('/contact-us')} block font-syne lg:text-base text-3xl font-semibold hover:text-yellow py-5 lg:py-0`}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Search Icon */}
                <div className="hidden lg:block">
                    <svg
                        className="ml-4 w-7 h-7 text-white hover:text-yellow ease-in-out duration-300 cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 21 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
