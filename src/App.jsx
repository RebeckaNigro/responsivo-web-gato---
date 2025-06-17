import React from "react";
import Navbar from "@/components/Navbar/Navbar.jsx";
import Logo from "@/assets/logo_preta.png";
import Logotype from "../public/logo.png";
import CardView from './components/CardView';
//import CardView from "@/components/CardView.jsx";
//import CardView from "@/components/CardView.jsx";

const App = () => {
    return (
        <div className="relative h-screen">
            <Navbar />

            <section className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start ">
                <video
                    className="abso lute top-0 left-0"
                    src="/video/edicaoboapart1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </section>
            <section className="py-210">
                <CardView />
            </section>
<div>

</div>
        </div>

    );
};

export default App;