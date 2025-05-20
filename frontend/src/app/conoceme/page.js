"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import Footer from '@/components/Footer'

export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const emptyContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            if (videoRef.current && emptyContainerRef.current) {
                const emptyContainerRect = emptyContainerRef.current.getBoundingClientRect();
                const emptyContainerTop = emptyContainerRect.top;

                if (emptyContainerTop < window.innerHeight) {

                    const progress = Math.max(0, Math.min(1, 1 - (emptyContainerTop / window.innerHeight) * 0.8));
                    const translateX = (1 - progress) * 200;
                    const scale = 1 + progress * 0.1;
                    const opacity = Math.min(1, progress * 2);

                    videoRef.current.style.transform = `translateX(${translateX}vw) scale(${scale})`;
                    videoRef.current.style.opacity = `${opacity}`;
                    videoRef.current.style.zIndex = progress > 0.5 ? "10" : "0";
                    videoRef.current.style.visibility = progress > 0 ? "visible" : "hidden";
                } else {
                    videoRef.current.style.transform = "translateX(200vw) scale(1)";
                    videoRef.current.style.opacity = "0";
                    videoRef.current.style.zIndex = "0";
                    videoRef.current.style.visibility = "hidden";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative bg-black" ref={containerRef}>
            <div className="relative z-1 min-h-screen w-full px-6 py-12 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div className="md:col-span-2 space-y-6">
                        <motion.h1
                            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400"
                                animate={{
                                    textShadow: [
                                        "0 0 10px rgba(219, 39, 119, 0.5)",
                                        "0 0 20px rgba(219, 39, 119, 0.3)",
                                        "0 0 10px rgba(219, 39, 119, 0.5)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            >
                                VibraSync
                            </motion.span>
                        </motion.h1>
                        <motion.h3
                            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="relative">
                                Soy{" "}
                                <motion.span
                                    className="relative inline-block"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                                        Javier Carro
                                    </span>
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 1 }}
                                    />
                                </motion.span>
                                {" "}estudiante de DAW
                            </span>
                        </motion.h3>
                        <motion.p
                            className="text-gray-300 max-w-3xl sm:text-1xl md:text-2xl lg:text-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <span className="font-bold text-white">VibraSync</span> es mi proyecto de final de curso, se basa en un reproductor música web que representa una
                            <span className="font-bold text-white"> solución integral </span>
                            para escuchar música online, combinando la capacidad de acceder a tus bibliotecas personales con el descubrimiento de nueva música a través de un catálogo gestionado por la plataforma. Este proyecto demuestra mis
                            <span className="font-bold text-white"> habilidades en el desarrollo </span>
                            de aplicaciones web y mi comprensión de los desafíos y oportunidades en la creación de experiencias de usuario.{" "}
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <div className="md:col-span-1">
                            <div className="border border-gray-300 aspect-square flex items-center justify-center md:mt-30 lg:mt-20">
                                <Image
                                    src="/img/cifpaviles.png?height=400&width=400"
                                    alt="CIFP Avilés centro educativo"
                                    width={400}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div
                        className="md:col-span-3 p-8 flex items-center justify-center" ref={emptyContainerRef}>
                    </div>
                </div>
            </div>

            <div className="h-[100vh] relative">
                <div
                    ref={videoRef}
                    className="w-full h-screen fixed top-0 right-0 opacity-1 transition-all duration-500 ease-out"
                    style={{ transform: "translateX(200vw)", zIndex: 0, visibility: "hidden" }}
                >

                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-30">
                        <video className="w-full h-full object-cover" autoPlay loop playsInline controls>
                            <source src="/videos/video-conoceme.mp4" type="video/mp4" />
                            El navegador no puede cargar el video.
                        </video>

                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}