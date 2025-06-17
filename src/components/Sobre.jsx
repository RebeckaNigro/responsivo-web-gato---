
import React from 'react';

const Sobre = () => {
    return (
        <section id="sobre" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            SOBRE A STARTUP FIEMS
                        </h2>
                        <div className="w-24 h-1 bg-primary mb-8"></div>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A Startup FIEMS é um hub de inovação dedicado a fomentar o ecossistema 
                            empreendedor no estado. Nossa missão é conectar ideias inovadoras com 
                            oportunidades de mercado, oferecendo suporte completo para o desenvolvimento 
                            de startups e projetos tecnológicos.
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Através de mentorias especializadas, assessorias estratégicas e conexões 
                            com o mercado, auxiliamos empreendedores a transformar suas visões em 
                            negócios sustentáveis e de impacto.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Fazemos parte do Sistema FIEMS, aproveitando toda a infraestrutura e 
                            network industrial para potencializar o crescimento das startups em 
                            nosso ecossistema.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <img 
                                src="/api/placeholder/400/300" 
                                alt="Startup FIEMS" 
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className="absolute top-8 left-8 w-full h-full">
                            <img 
                                src="/api/placeholder/400/300" 
                                alt="Inovação" 
                                className="rounded-lg shadow-lg w-full opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
