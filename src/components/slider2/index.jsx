import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react"; 
import Dot from '../../assets/images/dot.png'
import Stars from '../../assets/images/stars.png'
import Comma from '../../assets/images/commas.png'
import Client1 from '../../assets/images/client1.jpg'
import Client2 from '../../assets/images/client2.jpg'
import Client3 from '../../assets/images/client3.jpg'
import Client4 from '../../assets/images/client4.jpg'
import SeeMoreText from "../seemore/seemore"
const Slider2 = () => {
 
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
      client: "Margaret Williams",
      work: "Agency",
      icon: Client2 ,
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
        <div className="container mx-auto">
            <div className='lg:flex lg:justify-between'>
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
  slidesPerView={3}
  spaceBetween={20} 
  navigation={false} 
  pagination={{ clickable: true, el: null }}
  modules={[Navigation, Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)} 
  slidesOffsetBefore={290} 
  slidesOffsetAfter={290} 
  speed={1000} 
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 30,
    },
    1536: {
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
          <div className="mt-7">
          <SeeMoreText text={slide.text} maxLength={150} className="font-normal text-[15px] text-[#121820]/40 font-syne leading-[25px] w-[361px]" />
          </div>
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
