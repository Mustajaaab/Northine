import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css"
import Photo1 from "../../assets/images/New folder/365estatehub.png";
import Photo2 from "../../assets/images/New folder/growerck.png";
import Photo3 from "../../assets/images/New folder/plan.png";
import Photo4 from "../../assets/images/New folder/Hackino.png";
import Photo5 from "../../assets/images/New folder/KMA-logo.svg";
import Photo6 from "../../assets/images/New folder/readinggraphics.webp";

const ProjectSlider = () => {
    const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

    const sliderSettings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full py-12 overflow-hidden">
            <Slider {...sliderSettings}>
                {photos.map((photo, index) => (
                    <div key={index} >
                        <img
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            className="w-[80%] h-auto "
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default ProjectSlider