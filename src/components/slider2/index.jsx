import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react"; // For controlling Swiper externally
import rating from '../../assets/images/rating.png'
import Stars from '../../assets/images/stars.png'
import Comma from '../../assets/images/commas.png'
import Client1 from '../../assets/images/client1.jpg'
import jamiClient from '../../assets/images/jamiClient.jpg'
import Client2 from '../../assets/images/client2.jpg'
import Client3 from '../../assets/images/client3.jpg'
import Client4 from '../../assets/images/client4.jpg'
import SeeMoreText from "../seemore/seemore"
const Slider2 = () => {
  // Create a reference for the Swiper instance
  const swiperRef = useRef(null);

  const slides = [
    {
      img: Comma,
      img2: Stars,
      text: "Irfan is absolutely one of the best designers I know. Without a doubt. It has been an honor to work with some-one of such high integrity, kindness and so committed to our mutual success. He not only designs, He does research, spends time in understanding and implementing with great attention to every detail. Additionally, Irfan puts his heart and soul into his work. He gives you everything he’s got when he gets into a project. Just hire him and you’ll agree!",
      client: "Kaies H. | Associate, Executive Director",
      work: "Sustainable Marketplace MVP Product. May 2023",
      icon: Client1 ,
    },
    {
      img: Comma,
      img2: Stars,
      text: "Jami is highly responsive and enthusiastic about her work. Willing to contribute ideas and is also open to feedback. Great experience working with her!",
      client: "Angela lam",
      work: "ReadinGraphics",
      icon: jamiClient ,
    },
    {
      img: Comma,
      img2: Stars,
      text: "I had the pleasure of working with Kashif, and I couldn't be happier with the results. From start to finish, he demonstrated exceptional professionalism, expertise, and attention to detail. Kashif was communicative, always available to address my questions, and delivered high-quality work that exceeded my expectations. The project was completed ahead of schedule, and his creative insights added tremendous value. I highly recommend Kashif to anyone looking for a skilled, reliable, and dedicated pro. I look forward to working together on future projects!",
      client: "Tarryyn Gillies",
      work: "Agency",
      icon: Client3 ,
    },
    {
      img: Comma,
      img2: Stars,
      text: "Another amazing experience with Shazmeen. Great work as usual! Very knowledgeable, easy to work with, and always ready to get work feedback on how to improve. I'll never hesitate to hire and work with her.",
      client: "Tamzyn French",
      work: "Agency",
      icon: Client4 ,
    },
  ];

  return (
    <div className="py-8 bg-[#121820]/5 pt-[120px]">
      <div className="lg:container w-[95%] mx-auto">
        <div className="lg:flex lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow rounded-full" ></span>
              <p className="font-syne font-medium text-base leading-[25px]">Testimonial</p>
            </div>
            <h1 className="font-syne font-semibold text-[42px] mt-8">
              What Our <span className="text-yellow">Clients</span> Say
            </h1>
          </div>
          <div className="flex gap-[30px] mt-14 justify-center lg:justify-start">
            <button
              className="font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              🡸 Prev
            </button>
            <button
              className="font-syne text-base font-semibold hover:text-[#121820]/50 ease-in-out duration-300 hover:scale-110"
              onClick={() => swiperRef.current?.slideNext()}
            >
              Next 🡺
            </button>
          </div>
        </div>
      </div>

      {/* Swiper slider */}
      <Swiper
  slidesPerView={1} // Default slides visible at a time for smallest screens
  spaceBetween={10} // Default space between slides for smallest screens
  navigation={false} // Disable built-in navigation
  pagination={{ clickable: true, el: null }}
  modules={[Navigation, Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)} // Control swiper externally
  speed={1000} // Animation speed
  breakpoints={{
    320: {
      slidesPerView: 1, // 1.5 slides visible on small screens
      spaceBetween: 25, // Smaller space between slides
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 10,
    },
    640: {
      slidesPerView: 1.5, // 1.5 slides visible on small screens
      spaceBetween: 15, // Smaller space between slides
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 10,
    },
    768: {
      slidesPerView: 2, // 2 slides visible on medium screens
      spaceBetween: 20,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
    },
    1024: {
      slidesPerView: 3, // 3 slides visible on large screens
      spaceBetween: 30,
      slidesOffsetBefore: 40,
      slidesOffsetAfter: 40,
    },
    1280: {
      slidesPerView: 4, // 4 slides visible on extra-large screens
      spaceBetween: 40,
      slidesOffsetBefore: 290,
      slidesOffsetAfter: 290,
    },
  }}
  className="mySwiper mt-10 w-full"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="overflow-hidden">
        <div className="flex  items-center">
          <img src={slide.img} alt="" className="h-6" />
          <img src={rating} alt="" className="h-32" />
        </div>
        <div>
          <div className="">
            <SeeMoreText
              text={slide.text}
              maxLength={150}
              className="font-normal text-[15px] text-[#121820]/40 font-syne leading-[25px] w-full md:w-[361px]"
            />
          </div>
          <div className="flex mt-8 gap-5 mb-[120px]">
            <img
              src={slide.icon}
              alt=""
              className="w-[55px] h-[55px] rounded-full grayscale hover:grayscale-0 duration-300 ease-in-out"
            />
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
