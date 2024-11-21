import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react"; // For controlling Swiper externally
import Dot from '../../assets/images/dot.png'
import Stars from '../../assets/images/stars.png'
import Comma from '../../assets/images/commas.png'
import Client1 from '../../assets/images/client1.jpg'
import Client2 from '../../assets/images/client2.jpg'
import Client3 from '../../assets/images/client3.jpg'
import Client4 from '../../assets/images/client4.jpg'

const Slider2 = () => {
  // Create a reference for the Swiper instance
  const swiperRef = useRef(null);

  const slides = [
    {
      img: Comma,
      img2: Stars,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      client: "Tamzyn French",
      work: "Agency",
      icon: Client1 ,
    },
    {
      img: Comma,
      img2: Stars,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      client: "Margaret Williams",
      work: "Agency",
      icon: Client2 ,
    },
    {
      img: Comma,
      img2: Stars,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      client: "Tarryyn Gillies",
      work: "Agency",
      icon: Client3 ,
    },
    {
      img: Comma,
      img2: Stars,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      client: "Tamzyn French",
      work: "Agency",
      icon: Client4 ,
    },
  ];

  return (
    
    <div className="py-8 bg-[#121820]/5 pt-[120px]">
        <div className="w-[69%] mx-auto">
            <div className='flex justify-between'>
                <div>
                <div className="flex items-center gap-2">
                    <img src={Dot} alt="" className="w-2 h-2"/>
                    <p className="font-syne font-medium text-base leading-[25px]">Testimonial</p>
                </div>
                <h1 className='font-syne font-semibold text-[42px] mt-8'>What Our <span className="text-[#F57C00]">Clients</span> Say</h1>
                </div>
                <div className='flex gap-[30px] mt-14'>
                    <button className='font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110' onClick={() => swiperRef.current?.slidePrev()}>🡸    Prev</button>
                    <button className='font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110' onClick={() => swiperRef.current?.slideNext()}>Next 🡺</button>
                </div>
            </div>
        </div>
     

      {/* Swiper slider */}
      <Swiper
  slidesPerView={3} // Number of slides visible at a time
  spaceBetween={20} // Space between slides
  navigation={false} // Disable built-in navigation
  pagination={{ clickable: true, el: null }}
  modules={[Navigation, Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)} // Control swiper externally
  slidesOffsetBefore={290} // Add gap before the first slide
  slidesOffsetAfter={290} 
  speed={1000} // Add gap after the last slide
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesOffsetBefore: 290,
      slidesOffsetAfter: 290,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetBefore: 290,
      slidesOffsetAfter: 290,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 80,
      slidesOffsetBefore: 290,
      slidesOffsetAfter: 290,
    },
  }}
  className="mySwiper mt-10 w-full"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index} >
      <div className=" overflow-hidden">
        <div className="flex gap-5 items-center">
            <img src={slide.img} alt='' className="w-[25px] h-[21px]"/>
            <img src={slide.img2} alt='' className="w-[110px] h-[25px]"/>
        </div>
        <div>
          <h3 className="font-normal text-[15px] text-[#121820]/40 font-syne leading-[25px] w-[361px] mt-7">
            {slide.text}
          </h3>
          <div className="flex mt-8 gap-5 mb-[120px]">
            <img src={slide.icon} alt="" className="w-[55px] h-[55px] rounded-full grayscale hover:grayscale-0 duration-300 ease-in-out"/>
            <div>
                <p className="text-base mb-2 font-syne font-semibold">
                    {slide.client}
                </p>
                <p className="text-[15px] font-normal font-syne text-[#121820]/40">
                    {slide.work}
                </p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
};

export default Slider2;
