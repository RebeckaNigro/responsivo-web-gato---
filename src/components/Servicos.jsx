
import React from 'react';
import { Users, Building2, Lightbulb } from 'lucide-react';

const Servicos = () => {
    const servicos = [
        {
            icon: <Users className="w-12 h-12 text-primary" />,
            titulo: "Mentorias e Assessorias",
            descricao: "Orientação especializada para desenvolvimento de startups e projetos inovadores"
        },
        {
            icon: <Building2 className="w-12 h-12 text-primary" />,
            titulo: "Conexão com o Mercado",
            descricao: "Facilitamos a conexão entre startups e empresas do ecossistema industrial"
        },
        {
            icon: <Lightbulb className="w-12 h-12 text-primary" />,
            titulo: "Desenvolvimento de Projetos",
            descricao: "Apoio no desenvolvimento de projetos inovadores e soluções tecnológicas"
        }
    ];

    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        NOSSOS SERVIÇOS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicos.map((servico, index) => (
                        <div key={index} className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-center mb-6">
                                {servico.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {servico.titulo}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {servico.descricao}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicos;
