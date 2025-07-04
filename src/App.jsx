
import React from "react";
import Navbar from "@/components/Navbar/Navbar.jsx";
import CardView from './components/CardView';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Desafios from './components/Desafios';
import Depoimentos from './components/Depoimentos';
import Blog from './components/Blog';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import LogoCarousel from './components/LogoCarousel';

const App = () => {
    return (
        <div className="relative min-h-screen">
            <Navbar />
           
            {/* Seção do vídeo hero */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/video/edicaoboapart1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

            </section>

            {/* Carrossel de Logos dos Patrocinadores */}
            <LogoCarousel />
      
            {/* Seções principais */}
            <section className="relative z-10">
                <CardView />
                <Servicos />
                <Sobre />
                <Desafios />
                <Depoimentos />
                <Blog />
                <Localizacao />
                <Footer />
            </section>
        </div>
    );
};

export default App;
