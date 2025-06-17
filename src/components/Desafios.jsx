
import React from 'react';

const Desafios = () => {
    const desafios = [
        {
            titulo: "Desafio de Inovação Industrial",
            imagem: "/api/placeholder/300/200",
            logo: "/api/placeholder/100/50",
            descricao: "Desenvolvimento de soluções para modernização industrial"
        },
        {
            titulo: "Tech Challenge Sustentabilidade",
            imagem: "/api/placeholder/300/200",
            logo: "/api/placeholder/100/50",
            descricao: "Criação de tecnologias sustentáveis para o futuro"
        },
        {
            titulo: "Startup Weekend FIEMS",
            imagem: "/api/placeholder/300/200",
            logo: "/api/placeholder/100/50",
            descricao: "Evento de criação de startups em 54 horas"
        }
    ];

    return (
        <section id="desafios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        DESAFIOS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {desafios.map((desafio, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img 
                                    src={desafio.imagem} 
                                    alt={desafio.titulo}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white p-2 rounded">
                                    <img 
                                        src={desafio.logo} 
                                        alt="Logo"
                                        className="h-8"
                                    />
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {desafio.titulo}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {desafio.descricao}
                                </p>
                                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
                                    SAIBA MAIS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Desafios;
