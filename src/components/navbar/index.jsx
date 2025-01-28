import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Northnine from '../../assets/images/no9.png';

function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);

        const handleResize = () => {
            const isLarge = window.innerWidth >= 1024;
            setIsLargeScreen(isLarge);
            if (isLarge) document.body.classList.remove('overflow-hidden');
        };

        window.addEventListener('scroll', handleScroll);
        const debouncedResize = debounce(handleResize, 200);
        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', debouncedResize);
        };
    }, []);

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        if (!isLargeScreen) {
            document.body.classList.toggle('overflow-hidden', !isMenuOpen);
        }
    };

    const getActiveClass = (path) => {
        const currentPath = location.pathname === '/' ? '/home' : location.pathname;
        return currentPath === path ? 'text-yellow' : 'text-white';
    };

    return (
        <div
            className={clsx(
                'w-full mx-auto py-5 fixed z-50 transition-colors duration-300',
                isScrolled || !isHomePage ? 'bg-[#121820]' : 'bg-transparent'
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <img
                    src={Northnine}
                    alt="Northnine Logo"
                    className="w-[126px] h-[30px] lg:w-[186px] lg:h-[50px]"
                />

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    className="lg:hidden focus:outline-none"
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-7 h-7 text-white cursor-pointer hover:text-yellow transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-7 h-7 text-white cursor-pointer hover:text-yellow transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M4 6h16M4 12h16m-7 6h7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <nav
                    className={clsx(
                        'lg:flex lg:items-center lg:gap-8 text-center absolute space-x-4 lg:static top-16 right-0 w-full lg:w-auto bg-[#121820] lg:bg-transparent transition-transform duration-300',
                        isMenuOpen ? 'block' : 'hidden'
                    )}
                >
                    {['/home', '/about', '/team', '/services', '/case-studies', '/contact-us'].map(
                        (path) => (
                            <Link
                                key={path}
                                to={path}
                                className={clsx(
                                    'block relative font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 lg:py-0',
                                    getActiveClass(path)
                                )}
                            >
                                {path.split('/')[1].replace('-', ' ').toUpperCase()}
                                <span className="absolute -top-1 right-[-12px] w-2 h-2 border-2 border-yellow rounded-full"></span>
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
