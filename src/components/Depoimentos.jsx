
import React from 'react';

const Depoimentos = () => {
    const depoimentos = [
        {
            nome: "Maria Silva",
            cargo: "CEO da TechStart",
            foto: "/api/placeholder/80/80",
            texto: "A Startup FIEMS foi fundamental para o crescimento da nossa empresa. O suporte e mentoria recebidos nos ajudaram a estruturar nosso negócio de forma sólida."
        },
        {
            nome: "João Santos",
            cargo: "Founder da InnovaCorp",
            foto: "/api/placeholder/80/80",
            texto: "Através da rede de contatos da FIEMS, conseguimos conectar nossa startup com grandes indústrias e fechar parcerias estratégicas importantes."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        NOSSOS CLIENTES SATISFEITOS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {depoimentos.map((depoimento, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-6">
                                <img 
                                    src={depoimento.foto} 
                                    alt={depoimento.nome}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-800">{depoimento.nome}</h4>
                                    <p className="text-gray-600 text-sm">{depoimento.cargo}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic leading-relaxed">
                                "{depoimento.texto}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Depoimentos;
