import Photo1 from '../../assets/images/1.png'
import Photo2 from '../../assets/images/2.png'
import Photo3 from '../../assets/images/3.png'
import Photo4 from '../../assets/images/4.png'
import Photo5 from '../../assets/images/5.png'
import Photo6 from '../../assets/images/6.png'
import Shades from '../../assets/images/white-shades.png'
import code from '../../assets/images/coding.png'
import desgin from '../../assets/images/desgin.png'
import bookkeeping from '../../assets/images/bookkeeping.png'
import maintenace from '../../assets/images/maintenance.png'
import socialMedia from '../../assets/images/socialMedia.png'
import streamlined from '../../assets/images/streamlined.png'
import ai from '../../assets/images/ai.png'
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

    return (
        <>
            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto py-20">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-[150px] h-[40px] mx-auto ease-in-out duration-300 hover:scale-110"
                    />
                ))}
            </div>
            <div className='container flex mx-auto pb-3 gap-1'>
                <div className='w-[2%] h-[2px] bg-[#fdcb22]'></div>
                <div className='w-[96%] h-[2px] bg-[#121820]/10'></div>
                <div className='w-[2%] h-[2px] bg-[#fdcb22]'></div>
            </div>
            <div className='lg:w-[55%] w-[75%] mx-auto flex justify-end'>
                <img src={Shades} alt="" className='lg:w-[203px] w-[183px] h-[120px] lg:h-[140px]' />
            </div>
            <div className='lg:container w-[95%] mx-auto'>
                <h1 className='font-syne font-semibold text-3xl lg:text-[42px] leading-[58px]'>How We Can <span className='text-[#fdcb22]'>Help You</span></h1>

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
    )
}
export default Sec2