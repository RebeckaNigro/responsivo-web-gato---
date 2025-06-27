import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../Index.css';

const sponsors = [
    { id: 1, name: "SEMADESC", logo: "/logos/semadesc.png" },
    { id: 2, name: "STARTUP", logo: "/logos/startup.png" },
    { id: 3, name: "SESI", logo: "/logos/sesifiems.png" },
    { id: 4, name: "FUNDECT", logo: "/logos/fundect.png" },
    { id: 5, name: "SEMADESC", logo: "/logos/semadesc.png" },
    { id: 6, name: "STARTUP", logo: "/logos/startup.png" },
    { id: 7, name: "SESI", logo: "/logos/sesifiems.png" },
    { id: 8, name: "FUNDECT", logo: "/logos/fundect.png" },
    // adicione mais logos conforme necessário
];

const LogoCarousel = () => (
    <div className="sponsors-carousel-continuous py-8">
        <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={32}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={3000}
            grabCursor={false}
            allowTouchMove={false}
            centeredSlides={false}
            className="sponsors-carousel"
        >
            {sponsors.map((sponsor) => (
                <SwiperSlide key={sponsor.id}>
                    <div className="swiper-custom-slide-card">
                        <img src={sponsor.logo} alt={sponsor.name} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default LogoCarousel;