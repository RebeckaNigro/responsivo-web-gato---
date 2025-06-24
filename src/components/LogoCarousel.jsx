
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const LogoCarousel = () => {
    // Logos dos patrocinadores (você pode substituir pelos logos reais)
    const sponsors = [
        { id: 1, name: "FIEMS", logo: "/logo.png" },
        { id: 2, name: "SEBRAE", logo: "/logo.png" },
        { id: 3, name: "SENAI", logo: "/logo.png" },
        { id: 4, name: "FIESP", logo: "/logo.png" },
        { id: 5, name: "CNI", logo: "/logo.png" },
        { id: 6, name: "APEX", logo: "/logo.png" },
        { id: 7, name: "FINEP", logo: "/logo.png" },
        { id: 8, name: "BNDES", logo: "/logo.png" },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        NOSSOS PARCEIROS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    className="sponsors-carousel"
                >
                    {sponsors.map((sponsor) => (
                        <SwiperSlide key={sponsor.id}>
                            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LogoCarousel;
