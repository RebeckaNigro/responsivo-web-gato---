
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Localizacao = () => {
    return (
        <section id="contato" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Informações de Contato */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            LOCALIZAÇÃO E CONTATO
                        </h2>
                        <div className="w-24 h-1 bg-primary mb-8"></div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                                    <p className="text-gray-600">
                                        Av. Afonso Pena, 1206<br />
                                        Centro, Campo Grande - MS<br />
                                        CEP: 79002-070
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                                    <p className="text-gray-600">(67) 3389-3000</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                                    <p className="text-gray-600">startup@fiems.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Horário</h4>
                                    <p className="text-gray-600">
                                        Segunda a Sexta: 8h às 18h<br />
                                        Sábado: 8h às 12h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div>
                        <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                            <p className="text-gray-600">Mapa interativo será carregado aqui</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                        ENTRE EM CONTATO
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Localizacao;
