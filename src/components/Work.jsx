import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

function Work() {

    return (
        <div className="w-[80%] mx-auto text-black over">
            <div className="flex items-center gap-1 mb-5 mt-32 md:hidden">
                <img className="w-3" src="/assets/blackStar.svg" />
                <h2 className="text-lg sm:xl ">Featured Projects</h2>
            </div>
            <h1 className="md:text-[20vw] text-[30vw] md:my-15 leading-none my-5 overflow-hidden">
                <motion.span
                    className="inline-block"
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    viewport={{ once: true }}
                >
                    Work
                </motion.span>
            </h1>
            <p className="mb-5 white text-xl md:text-[2vw] md:hidden block">
                Highlights of cases that we passionately built with forward-thinking
                clients and friends over the years.
            </p>
            <div>
                <div className="flex gap-10 md:mb-40 mb-10 w-full flex-col md:flex-row items-center">
                    <div className="md:w-[50%]">
                        <div className="relative cursor-pointer">
                            <motion.img whileHover={{ opacity: 0 }}
                                className="absolute z-10 md:block hidden"
                                src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
                            />
                            <video muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"></video>
                        </div>
                    </div>
                    <div className="md:pl-15 md:w-1/2">
                        <div className="items-center gap-1 mb-10 hidden md:flex">
                            <img className="w-3" src="/assets/blackStar.svg" />
                            <h2 className="text-xs">Featured Projects</h2>
                        </div>
                        <p className="text-[1rem] min-w-[200px] mb-60 white hidden md:block">
                            Highlights of cases that we passionately built with forward-thinking
                            clients and friends over the years.
                        </p>
                        <div className="md:w-[80%] w-full overflow-hidden">
                            <div data-scroll data-scroll-speed="0.1" className="relative cursor-pointer">

                                <motion.img whileHover={{ opacity: 0 }}
                                    className="absolute z-10 md:block hidden"
                                    src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                                />
                                <video muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-28 w-full md:flex-row flex-col overflow-hidden">
                    <div className="md:w-[30%] w-full md:mt-96">
                        <div className="relative cursor-pointer">

                            <motion.img whileHover={{ opacity: 0 }}
                                className="absolute z-10 md:block hidden"
                                src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                            />
                            <video muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"></video>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="0.1" className="md:w-1/2 w-full">
                        <div className="relative cursor-pointer">

                            <motion.img whileHover={{ opacity: 0 }}
                                className="absolute z-10 md:block hidden"
                                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                            />
                            <video muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="md:text-right text-2xl md:text-sm text-center md:mr-28 underline pb-40 pt-20">
                Browse all work
            </h2>
        </div>
    );
}

export default Work;
