
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

const App = () => {
    return (
        <div className="relative min-h-screen">
            <Navbar />

            <section className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/video/edicaoboapart1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </section>
            
            <section className="relative z-10 pt-[100vh]">
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
