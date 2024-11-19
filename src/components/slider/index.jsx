import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Phones from '../../assets/images/phones.png';
import Motion from '../../assets/images/motion.png'
import { useRef } from "react"; // For controlling Swiper externally

const Slider = () => {
  // Create a reference for the Swiper instance
  const swiperRef = useRef(null);

  const slides = [
    {
      img: Motion,
      title: "Easy & Most Powerful Server Platform.",
      author: "Nguta Ithya",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: Phones,
      title: "Easy & Most Powerful Server Platform.",
      author: "Roy Bricks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: Phones,
      title: "Easy & Most Powerful Server Platform.",
      author: "Nguta Ithya",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: Phones,
      title: "Easy & Most Powerful Server Platform.",
      author: "Roy Bricks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    
    <div className="py-8">
        <div className="w-[69%] mx-auto">
            <div className='flex justify-between'>
                <h1 className='font-syne font-semibold text-[42px]'>Latest Projects</h1>
                <div className='flex gap-[30px]'>
                    <button className='font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110' onClick={() => swiperRef.current?.slidePrev()}>🡸    Prev</button>
                    <button className='font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110' onClick={() => swiperRef.current?.slideNext()}>Next 🡺</button>
                </div>
            </div>
        </div>
     

      {/* Swiper slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={false} // Disable built-in navigation since we use external buttons
        pagination={false}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach Swiper instance to the ref
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper mt-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="object-cover"
                style={{ width: "655px", height: "363px" }} // Set image size
              />
              <div className="p-4 flex items-center">
                <div>
                    <h3 className="font-semibold text-[22px] font-syne leading-[30px] w-[260px]" >{slide.title}</h3>
                    <p className="text-lg mb-2 font-syne">
                    by: <span className="text-[#F57C00]">{slide.author}</span>
                    </p>
                </div>
                <p className="text-[15px] font-normal font-syne text-[#121820]/40">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
};

export default Slider;
