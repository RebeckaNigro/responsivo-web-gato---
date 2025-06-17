
import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            titulo: "O Futuro das Startups Industriais",
            resumo: "Como a tecnologia está transformando o setor industrial e criando novas oportunidades.",
            imagem: "/api/placeholder/300/200",
            data: "15 Nov 2024"
        },
        {
            titulo: "Inovação e Sustentabilidade",
            resumo: "A importância da sustentabilidade no desenvolvimento de novas tecnologias.",
            imagem: "/api/placeholder/300/200",
            data: "10 Nov 2024"
        },
        {
            titulo: "Conectando Startups ao Mercado",
            resumo: "Estratégias para conectar startups com grandes indústrias e investidores.",
            imagem: "/api/placeholder/300/200",
            data: "05 Nov 2024"
        }
    ];

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            NOSSO BLOG
                        </h2>
                        <div className="w-24 h-1 bg-primary"></div>
                    </div>
                    <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300">
                        VEJA MAIS
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src={post.imagem} 
                                alt={post.titulo}
                                className="w-full h-48 object-cover"
                            />
                            
                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {post.data}
                                </div>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {post.titulo}
                                </h3>
                                
                                <p className="text-gray-600 mb-4">
                                    {post.resumo}
                                </p>
                                
                                <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
                                    Ler mais →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
