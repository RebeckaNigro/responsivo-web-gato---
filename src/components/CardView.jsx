import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../pages/cardview.css';

import slide_image_1 from "../assets/planostartup1.png";
import slide_image_2 from "../assets/planostartup2.png";
import slide_image_3 from "../assets/planostartup3.png";
import slide_image_4 from "../assets/planostartup4.png";
import slide_image_5 from "../assets/planostartup5.png";

// Componente para o seu novo card
const CustomCard = () => {
    return (
        <div className="custom-card-content">
            <h2>Seu Novo Card</h2>
            <p>Este é o conteúdo do card que aparece ao navegar para a direita.</p>
            <button>Saiba Mais</button>
        </div>
    );
};

function CardView() {
    const initialSlideIndex = 3; // PAGOS
    const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
    const swiperRef = useRef(null);

    const categories = ["SERVIÇOS", "FREE", "PAGOS", "OUTROS"];

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);  // Loop-aware navigation
        }
    };

    // Vai para o slide inicial após o Swiper estar pronto
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(initialSlideIndex);
        }
    }, []);

    return (
        <div className="container">
            <h1 className="heading">Nossos planos</h1>

            {/* Mini Card */}
            <div className="mini-card">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className={`mini-card-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true} // Se você quer que continue a "rodar"
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => { swiperRef.current = swiper }}
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}
export default CardView;