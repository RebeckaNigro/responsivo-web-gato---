import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Importa o CSS base do Swiper
import 'swiper/css';

// Importa o seu arquivo CSS customizado
// Certifique-se de que o caminho abaixo corresponde ao local real do seu arquivo CSS customizado
import '../Index.css'; // <--- VERIFIQUE E AJUSTE ESTE CAMINHO SE NECESSÁRIO

const LogoCarousel = () => {
    // Logos dos patrocinadores - duplicando para garantir loop contínuo
    const sponsors = [
        { id: 1, name: "FIEMS", logo: "./assets/planostartup1.png" },
        { id: 2, name: "SEBRAE", logo: "/logo.png" },
        { id: 3, name: "SENAI", logo: "/logo.png" },
        { id: 4, name: "FIESP", logo: "/logo.png" },
        { id: 5, name: "CNI", logo: "/logo.png" },
        { id: 6, name: "APEX", logo: "/logo.png" },
        { id: 7, name: "FINEP", logo: "/logo.png" },
        { id: 8, name: "BNDES", logo: "/logo.png" },
    ];

    // Dimensões desejadas para os cards
    const cardWidth = 200; // Largura do card em pixels
    const cardHeight = 100; // Altura do card em pixels
    const cardMargin = 15; // Margem desejada em cada lado do card em pixels

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
                    // spaceBetween é o espaço total ENTRE dois slides adjacentes.
                    // Se você quer 15px de margem em cada lado de CADA card,
                    // então o espaço total entre eles será 30px (15px de um + 15px do outro).
                    spaceBetween={cardMargin * 2}

                    // 'auto' faz com que o Swiper respeite a largura dos slides definida no CSS (`.swiper-custom-slide-card`)
                    slidesPerView={'auto'}

                    autoplay={{
                        delay: 0, // Inicia a rolagem imediatamente
                        disableOnInteraction: false, // Não para a rolagem se o usuário interagir
                        pauseOnMouseEnter: false, // Não pausa a rolagem ao passar o mouse (para um carrossel contínuo)
                        reverseDirection: false, // Rola da esquerda para a direita
                    }}
                    speed={3000} // Velocidade da animação em milissegundos (3 segundos para uma volta)
                    loop={true} // Habilita a rolagem infinita
                    allowTouchMove={false} // Desabilita o arrasto manual do carrossel em dispositivos touch/mouse
                    centeredSlides={false} // Não centraliza o slide ativo na visualização

                    // Configurações responsivas para diferentes tamanhos de tela
                    breakpoints={{
                        // Em telas muito pequenas (<= 320px de largura)
                        320: {
                            slidesPerView: 2, // Mostrar 2 cards por vez
                            spaceBetween: cardMargin * 2,
                        },
                        // Em telas pequenas (<= 640px de largura)
                        640: {
                            slidesPerView: 3, // Mostrar 3 cards por vez
                            spaceBetween: cardMargin * 2,
                        },
                        // Em telas médias (<= 768px de largura)
                        768: {
                            slidesPerView: 4, // Mostrar 4 cards por vez
                            spaceBetween: cardMargin * 2,
                        },
                        // Em telas maiores (>= 1024px de largura)
                        1024: {
                            slidesPerView: 'auto', // Voltar a respeitar a largura definida no CSS (200px por card)
                            spaceBetween: cardMargin * 2,
                        },
                    }}
                    // Classe CSS para estilização específica do contêiner do Swiper, se necessário
                    className="sponsors-carousel-continuous"
                >
                    {/* Renderizando os slides duas vezes para garantir o efeito de loop contínuo */}
                    {[...sponsors, ...sponsors].map((sponsor, index) => (
                        <SwiperSlide key={`${sponsor.id}-${index}`}>
                            {/* Aplica a classe CSS customizada que define a aparência e dimensões do card */}
                            {/* Remove todas as classes Tailwind de estilo de card aqui para evitar conflitos */}
                            <div className="swiper-custom-slide-card">
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    // Mantém as classes Tailwind para efeitos visuais da imagem (grayscale, transição)
                                    className="grayscale hover:grayscale-0 transition-all duration-300"
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