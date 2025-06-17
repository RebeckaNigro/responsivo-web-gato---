
import React, { useState } from "react";
import Logo from "../../assets/logo_preta.png";
import { IoSearchSharp, IoMenu, IoClose } from "react-icons/io5";

const Menu = [
    { id: 1, name: "Quem somos", link: "#sobre" },
    { id: 2, name: "Desafios", link: "#desafios" },
    { id: 3, name: "Nossos Produtos", link: "#produtos" },
    { id: 4, name: "Nosso Blog", link: "#blog" },
    { id: 5, name: "Contato", link: "#contato" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (link) => {
        const element = document.querySelector(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <div className="shadow-md bg-transparent backdrop-blur-md dark:text-dark duration-200 relative z-40">
            {/* upper Navbar */}
            <div className="bg-gray-300/40 py-3">
                <div className="container flex justify-between items-center">

                    {/* Logo */}
                    <a
                        href="#"
                        className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
                    >
                        <img src={Logo} alt="Logo" className="w-35 h-auto" />
                    </a>

                    {/* Menu Desktop */}
                    <ul className="sm:flex hidden items-center gap-4">
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <button
                                    onClick={() => handleLinkClick(data.link)}
                                    className="inline-block px-4 hover:text-violet-500 text-black cursor-pointer"
                                >
                                    {data.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/*Search + Login Desktop */}
                    <div className="hidden sm:flex items-center gap-4">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-violet-500"
                            />
                            <IoSearchSharp className="text-gray-500 group-hover:text-black absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        <button
                            onClick={() => alert("Login realizado com Sucesso!")}
                            className="bg-gradient-to-r from-orange-50 to-gray-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span>Login</span>
                        </button>
                    </div>

                    {/* MENU (Mobile) */}
                    <div className="sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden bg-white bg-opacity-80 backdrop-blur-md py-2">
                    <ul className="flex flex-col gap-2 items-start px-4">
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <button
                                    onClick={() => handleLinkClick(data.link)}
                                    className="block text-black hover:text-violet-500 cursor-pointer"
                                >
                                    {data.name}
                                </button>
                            </li>
                        ))}

                        {/*Search + Login Mobile */}
                        <div className="mt-2 w-full">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-full rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-violet-500"
                            />
                            <button
                                onClick={() => alert("Login realizado com Sucesso!")}
                                className="mt-2 w-full bg-gradient-to-r from-orange-50 to-gray-400 text-white py-1 px-4 rounded-full"
                            >
                                Login
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
