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
                </button>

                {/* Navigation Links */}
                <nav
                    className={clsx(
                        'lg:flex lg:items-center lg:gap-8 text-center absolute space-x-4 lg:static top-16 right-0 w-full lg:w-auto bg-[#121820] lg:bg-transparent transition-transform duration-300',
                        isMenuOpen ? 'block' : 'hidden'
                    )}
                >
                    {['/home', '/about', '/team', '/services', '/contact-us'].map(
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

                    {!isHomePage && (
                        <div className="hidden xl:flex items-center gap-4">
                            <button type="button" className="text-white hover:text-yellow transition-colors">
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 21 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </nav>

                {/* Search Form */}

            </div>
        </div>
    );
}

export default Navbar;
