import Navbar from "../components/navbar";
import dot from '../assets/images/dot.png'
import orange2 from '../assets/images/orange2.png'
import BGDot from '../assets/images/dotmap.png'
import play from '../assets/images/play.png'
import Shades from '../assets/images/white-shades.png'
import Scope from '../assets/images/scope.png'
import tickk from '../assets/images/tickk.png'
import client1 from '../assets/images/client1.jpg'
import Photo1 from '../assets/images/1.png'
import Photo2 from '../assets/images/2.png'
import Photo3 from '../assets/images/3.png'
import Photo4 from '../assets/images/4.png'
import Photo5 from '../assets/images/5.png'
import Photo6 from '../assets/images/6.png'
import Oldman from '../assets/images/oldman.png'
import save from '../assets/images/save.png'
import bell from '../assets/images/bell.png'
import tic from '../assets/images/tic.png'
import spark from '../assets/images/spark.png'
import setting from '../assets/images/setting.png'
import Footer from '../components/Footer'


function About() {
    return (
        <>
            <Navbar />
            <div
                className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] h-[500px]"
                style={{ backgroundImage: `url(${BGDot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="w-[70%] mx-auto flex justify-between items-center">
                    <div >
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-syne font-medium">Home</p>
                            <div className="bg-yellow h-2 w-2 rounded-full"></div>
                            <p className="text-lg font-syne font-[100]">About Us</p>
                        </div>
                        <h1 className="text-5xl font-syne mt-10 font-semibold">ENTERPRISE</h1>
                    </div>
                    <div>
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="272" height="187" viewBox="0 0 272 187" fill="none">
                            <path d="M266.994 37.102V75.53C269.828 75.443 271.998 77.897 271.998 80.863C271.998 84.173 269.304 86.866 265.994 86.866C264.156 86.866 262.528 86.018 261.426 84.713L228.272 103.847C228.515 104.499 228.666 105.195 228.666 106.2C228.666 109.24 225.973 112.22 222.662 112.22C219.351 112.22 216.658 109.24 216.658 106.2C216.658 105.177 216.813 104.463 217.68 103.798L183.931 84.673C182.829 86.001 181.187 86.866 179.33 86.866C177.473 86.866 175.831 86.001 174.729 84.673L141.593 103.797C141.848 104.462 142.3 105.177 142.3 106.2C142.3 108.898 139.833 111.352 136.999 111.831V150.006C139.833 150.485 142.3 153.3 142.3 156.6C142.3 156.636 141.853 157.326 141.614 158.63L174.731 177.084C175.833 175.757 177.474 174.894 179.33 174.894C182.641 174.894 185.335 177.585 185.335 180.895C185.335 184.205 182.641 186.896 179.33 186.896C176.2 186.896 173.326 184.205 173.326 180.895C173.326 180.16 173.478 179.463 173.721 178.812L140.611 159.703C139.509 161.038 137.862 162.8 135.999 162.8C134.136 162.8 132.49 161.039 131.388 159.704L98.277 178.812C98.52 179.464 98.671 180.16 98.671 180.895C98.671 184.205 95.978 186.896 92.667 186.896C89.356 186.896 86.663 184.205 86.663 180.895C86.663 180.16 86.814 179.464 87.57 178.813L53.946 159.704C52.844 161.039 51.198 162.8 49.335 162.8C46.25 162.8 43.331 159.217 43.331 156.6C43.331 153.3 45.501 150.486 48.334 150.006V111.831C45.501 111.351 43.331 108.898 43.331 106.2C43.331 105.195 43.482 104.499 43.725 103.847L10.571 84.714C9.469 86.018 7.842 86.866 6.4 86.866C2.693 86.866 0 84.173 0 80.865C0 77.897 2.169 75.443 5.3 75.53V36.756C2.169 36.276 0 33.823 0 30.855C0 27.546 2.693 24.853 6.4 24.853C7.877 24.853 9.531 25.733 10.633 27.081L43.725 8.72C43.482 7.331 43.331 6.635 43.331 5.9C43.331 2.591 46.25 0 49.335 0C52.646 0 55.339 2.591 55.339 5.9C55.339 6.635 55.188 7.331 54.945 8.72L88.37 27.081C89.139 25.733 90.794 24.853 92.667 24.853C94.54 24.853 96.195 25.733 97.297 27.081L130.389 8.72C130.146 7.331 129.994 6.635 129.994 5.9C129.994 2.591 132.688 0 135.999 0C139.309 0 142.3 2.591 142.3 5.9C142.3 6.635 141.852 7.331 141.609 8.72L174.895 27.193C175.994 26.68 177.567 25.2 179.33 25.2C181.94 25.2 182.667 26.68 183.766 27.192L217.52 8.72C216.809 7.331 216.658 6.635 216.658 5.9C216.658 2.591 219.351 0 222.662 0C225.973 0 228.666 2.591 228.666 5.9C228.666 6.635 228.515 7.331 228.272 8.72L261.558 27.192C262.657 26.68 264.23 25.2 265.994 25.2C269.304 25.2 271.998 27.892 271.998 31.202C271.998 34.168 269.828 36.623 266.994 37.102ZM179.33 184.897C181.538 184.897 183.333 183.103 183.333 180.895C183.333 178.689 181.538 176.894 179.33 176.894C177.123 176.894 175.328 178.689 175.328 180.895C175.328 183.103 177.123 184.897 179.33 184.897ZM265.994 84.866C268.201 84.866 269.997 83.07 269.997 80.863C269.997 78.657 268.201 76.863 265.994 76.863C263.787 76.863 261.991 78.657 261.991 80.863C261.991 83.07 263.787 84.866 265.994 84.866ZM222.662 110.22C224.869 110.22 226.665 108.138 226.665 106.2C226.665 103.723 224.869 102.19 222.662 102.19C220.455 102.19 218.659 103.723 218.659 106.2C218.659 108.138 220.455 110.22 222.662 110.22ZM179.33 84.866C181.538 84.866 183.333 83.071 183.333 80.865C183.333 78.657 181.538 76.864 179.33 76.864C177.123 76.864 175.327 78.657 175.327 80.865C175.327 83.071 177.123 84.866 179.33 84.866ZM140.1 106.2C140.1 103.723 138.206 102.19 135.999 102.19C133.791 102.19 131.996 103.723 131.996 106.2C131.996 108.138 133.791 110.22 135.999 110.22C138.206 110.22 140.1 108.138 140.1 106.2ZM135.999 160.7C138.206 160.7 140.1 158.114 140.1 156.6C140.1 153.7 138.206 152.4 135.999 152.4C133.791 152.4 131.996 153.7 131.996 156.6C131.996 158.114 133.791 160.7 135.999 160.7ZM92.667 184.897C94.874 184.897 96.67 183.103 96.67 180.895C96.67 178.689 94.874 176.894 92.667 176.894C90.46 176.894 88.664 178.689 88.664 180.895C88.664 183.103 90.46 184.897 92.667 184.897ZM54.95 158.63L88.66 177.085C89.168 175.758 90.81 174.894 92.667 174.894C94.524 174.894 96.166 175.758 97.268 177.085L130.384 158.63C130.145 157.326 129.994 156.636 129.994 156.6C129.994 153.3 132.164 150.486 134.998 150.006V111.831C132.164 111.351 129.994 108.898 129.994 106.2C129.994 105.195 130.146 104.499 130.389 103.847L97.235 84.714C96.132 86.018 94.505 86.866 92.667 86.866C90.811 86.866 89.169 86.001 88.67 84.675L54.93 103.799C55.184 104.463 55.339 105.177 55.339 106.2C55.339 108.898 53.169 111.352 50.336 111.831V150.006C53.169 150.485 55.339 153.3 55.339 156.6C55.339 156.636 55.189 157.326 54.95 158.63ZM96.67 80.865C96.67 78.657 94.874 76.864 92.667 76.864C90.46 76.864 88.664 78.657 88.664 80.865C88.664 83.071 90.46 84.866 92.667 84.866C94.874 84.866 96.67 83.071 96.67 80.865ZM45.332 156.6C45.332 158.114 47.128 160.7 49.335 160.7C51.542 160.7 53.338 158.114 53.338 156.6C53.338 153.7 51.542 152.4 49.335 152.4C47.128 152.4 45.332 153.7 45.332 156.6ZM49.335 110.22C51.542 110.22 53.338 108.138 53.338 106.2C53.338 103.723 51.542 102.19 49.335 102.19C47.128 102.19 45.332 103.723 45.332 106.2C45.332 108.138 47.128 110.22 49.335 110.22ZM2.1 80.865C2.1 83.071 3.796 84.866 6.4 84.866C8.211 84.866 10.6 83.071 10.6 80.865C10.6 78.657 8.211 76.864 6.4 76.864C3.796 76.864 2.1 78.657 2.1 80.865ZM6.4 26.854C3.796 26.854 2.1 28.649 2.1 30.855C2.1 33.062 3.796 34.858 6.4 34.858C8.211 34.858 10.6 33.062 10.6 30.855C10.6 28.649 8.211 26.854 6.4 26.854ZM49.335 1.898C47.128 1.898 45.332 3.693 45.332 5.9C45.332 8.106 47.128 10 49.335 10C51.542 10 53.338 8.106 53.338 5.9C53.338 3.693 51.542 1.898 49.335 1.898ZM87.43 28.817L53.936 9.709C52.834 11.037 51.192 12 49.335 12C47.478 12 45.837 11.037 44.734 9.709L11.627 28.817C11.86 29.456 12.8 30.136 12.8 30.855C12.8 33.823 9.838 36.277 7.4 36.756V75.53C9.838 75.443 12.8 77.897 12.8 80.865C12.8 81.618 11.853 82.332 11.598 83.87L44.734 102.121C45.837 100.793 47.478 100.19 49.335 100.19C51.174 100.19 52.801 100.776 53.903 102.081L87.57 83.38C86.814 82.296 86.663 81.6 86.663 80.865C86.663 77.897 88.833 75.443 91.666 75.53V36.756C88.833 36.276 86.663 33.823 86.663 30.855C86.663 30.136 86.811 29.456 87.43 28.817ZM92.667 26.854C90.46 26.854 88.664 28.649 88.664 30.855C88.664 33.062 90.46 34.858 92.667 34.858C94.874 34.858 96.67 33.062 96.67 30.855C96.67 28.649 94.874 26.854 92.667 26.854ZM135.999 1.898C133.791 1.898 131.996 3.693 131.996 5.9C131.996 8.106 133.791 10 135.999 10C138.206 10 140.1 8.106 140.1 5.9C140.1 3.693 138.206 1.898 135.999 1.898ZM173.798 28.869L140.6 9.709C139.497 11.037 137.856 12 135.999 12C134.142 12 132.5 11.037 131.398 9.709L98.29 28.817C98.523 29.456 98.671 30.136 98.671 30.855C98.671 33.823 96.501 36.277 93.667 36.756V75.53C96.501 75.443 98.671 77.897 98.671 80.865C98.671 81.618 98.516 82.332 98.261 83.87L131.398 102.121C132.5 100.793 134.142 100.19 135.999 100.19C137.836 100.19 139.463 100.776 140.566 102.08L173.72 83.36C173.477 82.295 173.326 81.599 173.326 80.865C173.326 77.897 175.496 75.443 178.329 75.53V37.102C175.496 36.622 173.326 34.168 173.326 31.202C173.326 30.375 173.494 29.587 173.798 28.869ZM179.33 27.2C177.123 27.2 175.328 29.85 175.328 31.202C175.328 33.408 177.123 35.202 179.33 35.202C181.538 35.202 183.333 33.408 183.333 31.202C183.333 29.85 181.538 27.2 179.33 27.2ZM222.662 1.898C220.455 1.898 218.659 3.693 218.659 5.9C218.659 8.106 220.455 10 222.662 10C224.869 10 226.665 8.106 226.665 5.9C226.665 3.693 224.869 1.898 222.662 1.898ZM260.462 28.869L227.263 9.709C226.161 11.037 224.519 12 222.662 12C220.805 12 219.163 11.037 218.61 9.709L184.863 28.869C185.166 29.587 185.335 30.375 185.335 31.202C185.335 34.168 183.165 36.623 180.331 37.102V75.53C183.164 75.443 185.334 77.897 185.334 80.865C185.334 81.599 185.183 82.295 184.94 83.36L218.95 102.08C219.197 100.776 220.824 100.19 222.662 100.19C224.519 100.19 226.161 100.793 227.263 102.121L260.399 83.86C260.145 82.331 259.989 81.617 259.989 80.863C259.989 77.897 262.159 75.443 264.993 75.53V37.102C262.159 36.622 259.989 34.168 259.989 31.202C259.989 30.375 260.158 29.587 260.462 28.869ZM265.994 27.2C263.787 27.2 261.991 29.85 261.991 31.202C261.991 33.408 263.787 35.202 265.994 35.202C268.201 35.202 269.997 33.408 269.997 31.202C269.997 29.85 268.201 27.2 265.994 27.2Z" fill="url(#paint0_linear_663_106)" />
                            <defs>
                                <linearGradient id="paint0_linear_663_106" x1="0" y1="187" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="yellow" />
                                    <stop offset="0.75" stop-color="yellow" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="yellow" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-slate-50">
                <div className="w-[67%] mx-auto flex justify-between my-20">
                    <h2 className="font-syne text-2xl font-semibold">Lorem ipsum dolor sit amet, <span className="text-yellow">consectetur adipisicing elit.</span> <br />Esse id nemo qui veritatis dicta inventore itaquequo </h2>
                    <div className="flex items-center gap-6">
                        <button className="px-10 py-3 border-[2px] border-yellow rounded-full font-syne font-medium hover:border-[4px] duration-200">Talk To an Expert</button>
                        <button className="flex items-center gap-5 group">
                            <div className="border-[2px] border-yellow p-[13px] rounded-full flex justify-center items-center group-hover:border-[4px] duration-200 ">
                                <img src={play} alt="" className="w-[20px] h-[20px] " />
                            </div>
                            <p className="font-syne font-medium group-hover:text-yellow">Watch Video</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#f3f4f2]">
                <div className=" flex justify-center items-end gap-[100px] w-[92%]">
                    <img src={Shades} alt="" className="w-[200px]" />
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-yellow" ></div>
                        <p className="font-syne">Firm Overview</p>
                    </div>
                </div>
                <div className="flex pb-20">
                    <div className="w-[50%] flex justify-end pr-[100px]">
                        <img src={Scope} alt="" className="w-[650px]" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-syne font-semibold leading-[70px] mt-[60px]">We Specialize in <br />
                            <span className="text-yellow">Transforming Your Idea</span> or <br /> Business in The Current <br />
                            Digital Era.</h1>
                        <p className="text-black/30 font-syne mt-[60px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem <br />
                            illum sapiente mollitia delectus. Harum libero molestiae eos unde necessitatibus, <br />
                            quasi, explicabo deserunt ex nemo facilis maxime. Nam, fuga rem!</p>
                        <div className="mt-[50px] flex items-end gap-[150px]">
                            <div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10" />
                                    <p className="text-lg font-syne">Quis suspendisse ultrices gravida.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10" />
                                    <p className="text-lg font-syne">Consectetur adipiscing elit.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10" />
                                    <p className="text-lg font-syne">Quis suspendisse ultrices gravida.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={tickk} alt="" className="w-10 h-10" />
                                    <p className="text-lg font-syne">Consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <img src={client1} alt="" className="w-20 rounded-full" />
                                <div>
                                    <p className="text-[#f67c01] font-satisfy text-[30px]">Jane Meldrum</p>
                                    <p className="text-black/30 font-syne ">CEO & Co-Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-[40%]">
                <img src={Shades} alt="" className="w-[200px]" />
            </div>
            <div className="mx-auto w-[69%] flex justify-between items-center">
                <div>
                    <h1 className="text-[64px] font-syne font-semibold">8<span className="text-[#f67c01] ">+</span></h1>
                    <p className="font-syne text-lg ">Years Experience</p>
                    <h2 className="text-[44px] font-syne font-semibold mt-[60px]">We Run All Kinds of IT <br />Services That Vow Your <br />Success</h2>
                </div>
                <div>
                    <h2 className="text-[26px] font-syne font-semibold">Accelerate <span className="text-[#f67c01] ">Innovation</span> with world class tech <br />
                        teams We&apos;ll match you to an entire <span className="text-[#f67c01] ">Remote <br /> Technology</span></h2>


                    <div>
                        <div className="flex items-center gap-8 mt-[40px]">
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">16+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">3+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-[40px]">
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">360+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-base font-semibold font-syne"><span className="text-[#f67c01] mr-2">520+</span>Software Development</p>
                                <div className="flex gap-1 w-full mt-10">
                                    <div className="w-[10%] h-[2px] bg-[#F57C00]"></div>
                                    <div className="w-[90%] h-[2px] bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[120px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className='flex justify-center items-center gap-[88px] py-[92px]'>
                <img src={Photo1} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110' />
                <img src={Photo2} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110' />
                <img src={Photo3} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110' />
                <img src={Photo4} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110' />
                <img src={Photo5} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110' />
                <img src={Photo6} alt="" className='w-[150px] h-[40px] ease-in-out duration-300 hover:scale-110' />
            </div>
            <div className="bg-[#f3f4f2]">
                <div className="flex justify-end w-[85%]">
                    <img src={Shades} alt="" className="w-[200px]" />
                </div>
                <div className="flex w-[69%] mx-auto justify-between items-center pb-[90px]">
                    <div className="w-[50%]">
                        <img src={Oldman} alt="" className="w-full" />
                    </div>
                    <div>
                        <div className="flex gap-2 items-center mt-[50px]">
                            <img src={dot} alt="" className="w-3 h-3" />
                            <p className="font-syne text-lg">IT Enterprise</p>
                        </div>
                        <h1 className="text-5xl font-syne font-semibold mt-[50px]">Our Mission</h1>
                        <p className="mt-[50px] font-syne text-black/30">Many desktop publishing packages and web page editors now use Lorem Ipsum as <br />
                            their default model text, and a search for lorem ipsum will uncover many web sites <br />
                            still in their infancy. Various versions have evolved over the years, sometimes by <br />
                            accident, sometimes on purpose. There are many variations of passages majority.</p>
                        <div className="flex gap-5 items-center mt-[50px]">
                            <img src={dot} alt="" className="w-3 h-3" />
                            <p className="font-syne text-lg">Accelerate innovation.</p>
                        </div>
                        <div className="flex gap-5 items-center mt-[20px]">
                            <img src={dot} alt="" className="w-3 h-3" />
                            <p className="font-syne text-lg">With world class tech teams.</p>
                        </div>
                        <div className="flex gap-5 items-center mt-[20px]">
                            <img src={dot} alt="" className="w-3 h-3" />
                            <p className="font-syne text-lg">Our all service offerings to enhance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[69%] mx-auto mt-[100px]">
                <div className="flex gap-5 items-center">
                    <img src={dot} alt="" className="w-3 h-3" />
                    <p className="font-syne text-lg">Our all service offerings to enhance.</p>
                </div>
                <h1 className="font-syne font-semibold text-5xl mt-10">Why Work With Us</h1>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[120px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className="flex items-center w-[69%] mx-auto justify-between mt-[70px]">
                <div className="flex items-end gap-[200px]">
                    <img src={save} alt="" className="w-[40px] h-[48px]" />
                    <h2 className="text-2xl font-syne font-semibold">Top Expertise</h2>
                </div>
                <p className="font-syne text-black/30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum <br />
                    iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br />
                    feugiat nulla facilisis at vero eros et accumsan.</p>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[70px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className="flex items-center w-[69%] mx-auto justify-between mt-[70px]">
                <div className="flex items-end gap-[200px]">
                    <img src={tic} alt="" className="w-[43px] h-[43px]" />
                    <h2 className="text-2xl font-syne font-semibold">Quality Management</h2>
                </div>
                <p className="font-syne text-black/30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum <br />
                    iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br />
                    feugiat nulla facilisis at vero eros et accumsan.</p>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[70px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className="flex items-center w-[69%] mx-auto justify-between mt-[70px]">
                <div className="flex items-end gap-[200px]">
                    <img src={bell} alt="" className="w-[48px] h-[48px]" />
                    <h2 className="text-2xl font-syne font-semibold">Utmost Flexibility</h2>
                </div>
                <p className="font-syne text-black/30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum <br />
                    iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br />
                    feugiat nulla facilisis at vero eros et accumsan.</p>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[70px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className="flex items-center w-[69%] mx-auto justify-between mt-[70px]">
                <div className="flex items-end gap-[200px]">
                    <img src={setting} alt="" className="w-[48px] h-[48px]" />
                    <h2 className="text-2xl font-syne font-semibold">Agility</h2>
                </div>
                <p className="font-syne text-black/30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum <br />
                    iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br />
                    feugiat nulla facilisis at vero eros et accumsan.</p>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[70px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className="flex items-center w-[69%] mx-auto justify-between mt-[70px]">
                <div className="flex items-end gap-[200px]">
                    <img src={spark} alt="" className="w-[40px] h-[48px]" />
                    <h2 className="text-2xl font-syne font-semibold">Innovation</h2>
                </div>
                <p className="font-syne text-black/30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum <br />
                    iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br />
                    feugiat nulla facilisis at vero eros et accumsan.</p>
            </div>
            <div className='w-[69%] flex mx-auto pb-3 gap-1 mt-[70px] mb-[120px]'>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#F57C00]'></div>
            </div>
            <div className="bg-[#f3f4f2] pb-[120px] ">
                <div className="w-[75%] flex justify-end">
                    <img src={Shades} alt="" className="w-[220px]" />
                </div>
                <div className="w-[69%] mx-auto">
                    <div className="flex gap-2 items-center">
                        <img src={dot} alt="" className="w-2 h-2" />
                        <p className="font-syne font-semibold">For Enterprise</p>
                    </div>
                    <h1 className="text-[42px] font-syne font-semibold mt-[30px]">We Live by <span className="text-[#F57C00]">Powerful</span> Values</h1>
                    <div className="flex justify-between mt-[120px]">
                        <div>
                            <div className="w-[70px] h-[70px] bg-[#e6e8e7] flex justify-center items-center rounded-full">
                                <img src={tic} alt="" className="w-[45px] h-[45px]" />
                            </div>
                            <h3 className="font-syne font-semibold text-xl mt-9">We Are </h3>
                            <p className="font-syne text-black/30 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.</p>
                        </div>
                        <div>
                            <div className="w-[70px] h-[70px] bg-[#e6e8e7] flex justify-center items-center rounded-full">
                                <img src={tic} alt="" className="w-[45px] h-[45px]" />
                            </div>
                            <h3 className="font-syne font-semibold text-xl mt-9">We Are </h3>
                            <p className="font-syne text-black/30 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.</p>
                        </div>
                        <div>
                            <div className="w-[70px] h-[70px] bg-[#e6e8e7] flex justify-center items-center rounded-full">
                                <img src={tic} alt="" className="w-[45px] h-[45px]" />
                            </div>
                            <h3 className="font-syne font-semibold text-xl mt-9">We Are </h3>
                            <p className="font-syne text-black/30 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[70px]">
                        <div>
                            <div className="w-[70px] h-[70px] bg-[#e6e8e7] flex justify-center items-center rounded-full">
                                <img src={tic} alt="" className="w-[45px] h-[45px]" />
                            </div>
                            <h3 className="font-syne font-semibold text-xl mt-9">We Are </h3>
                            <p className="font-syne text-black/30 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.</p>
                        </div>
                        <div>
                            <div className="w-[70px] h-[70px] bg-[#e6e8e7] flex justify-center items-center rounded-full">
                                <img src={tic} alt="" className="w-[45px] h-[45px]" />
                            </div>
                            <h3 className="font-syne font-semibold text-xl mt-9">We Are </h3>
                            <p className="font-syne text-black/30 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.</p>
                        </div>
                        <div>
                            <div className="w-[70px] h-[70px] bg-[#e6e8e7] flex justify-center items-center rounded-full">
                                <img src={tic} alt="" className="w-[45px] h-[45px]" />
                            </div>
                            <h3 className="font-syne font-semibold text-xl mt-9">We Are </h3>
                            <p className="font-syne text-black/30 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default About;



