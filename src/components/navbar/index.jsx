import Northnine from '../../assets/images/no9.png'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className="w-[100%] mx-auto flex justify-evenly items-center h-[80px] fixed bg-[#121820] z-50">
                <img src={Northnine} alt="" className='w-[186px] h-[50px]'/>
                <div className='flex items-center gap-4'>
                    <div className="relative group">
                        <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Enterprise
                        <span className="absolute left-[105px] transform -translate-x-1/2 w-2 h-2 border-[#F57C00] border-[2px] rounded-full"></span>
                        </button>
                         <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block ease-in-out">
                            <Link to="/home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home </Link>
                            <Link  to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</Link>
                            <Link to="/team" className="px-4 py-2 text-gray-700 hover:bg-gray-100">
          Teaaqqsm
        </Link>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team Members</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Careers</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Prices</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQs</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Events</a>
                        </div>
                    </div>
                    <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Case Studies</button>
                    <div className="relative group">
                        <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Services
                        <span className="absolute left-[90px] transform -translate-x-1/2 w-2 h-2 border-[#F57C00] border-[2px] rounded-full"></span>
                        </button>
                            <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Service 1 </a>
                                <a  href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">  Service 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Service 3</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Service 4</a>
                            </div>
                    </div>
                <div className="relative group">
                    <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Solutions
                    <span className="absolute left-[97px] transform -translate-x-1/2 w-2 h-2 border-[#F57C00] border-[2px] rounded-full"></span>
                    </button>
                    <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Solution black </a>
                        <a  href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">  Solution 2</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Solution 3</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Solution 4</a>
                    </div>
                </div>
            
                <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Blog</button>
                <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Contact Us</button>
                <div className="relative group">
                    <button className="px-4 py-2 text-white font-semibold font-syne hover:text-[#F57C00] ease-in-out duration-300"> Other
                    <span className="absolute left-[70px] transform -translate-x-1/2 w-2 h-2 border-[#F57C00] border-[2px] rounded-full"></span>
                    </button>
                    <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Coming Soon</a>
                        <a  href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">  404</a>
                    </div>
                </div>
                <svg className='ml-4 w-7 h-7 hover:text-[#F57C00] ease-in-out duration-300 text-white ' fill='currentColor' viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg ">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"></path>
                </svg>
            </div>
        </div>
        </>
    )
}
export default Navbar