
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Startup FIEMS */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Startup FIEMS</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Hub de inovação dedicado a fomentar o ecossistema empreendedor, 
                            conectando ideias inovadoras com oportunidades de mercado.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            <Youtube className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links Úteis */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Links Úteis</h3>
                        <ul className="space-y-3">
                            <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
                            <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#desafios" className="text-gray-300 hover:text-white transition-colors">Desafios</a></li>
                            <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Serviços */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Serviços</h3>
                        <ul className="space-y-3">
                            <li><span className="text-gray-300">Mentorias</span></li>
                            <li><span className="text-gray-300">Assessorias</span></li>
                            <li><span className="text-gray-300">Conexão com Mercado</span></li>
                            <li><span className="text-gray-300">Desenvolvimento de Projetos</span></li>
                            <li><span className="text-gray-300">Eventos e Workshops</span></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contato</h3>
                        <div className="space-y-3 text-gray-300">
                            <p>Av. Afonso Pena, 1206<br />Centro, Campo Grande - MS</p>
                            <p>(67) 3389-3000</p>
                            <p>startup@fiems.com.br</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © 2024 Startup FIEMS. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Política de Privacidade</a>
                            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
