import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {
    gsap.registerPlugin(ScrollTrigger);
    const parent = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const video1 = useRef(null);
    const video2 = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "top 100%",
                scrub: 2,
            },
        });

        tl.to(
            image1.current,
            {
                x: "80%",
                duration: 2,
                ease: (0.37, 0, 0.63, 1),
            },
            0
        );

        tl.to(
            image2.current,
            {
                x: "-75%",
                duration: 2,
                ease: (0.37, 0, 0.63, 1),
            },
            0
        );

        tl.to(
            video1.current,
            {
                x: "-40%",
                duration: 2,
                ease: (0.37, 0, 0.63, 1),
            },
            0
        );

        tl.to(
            video2.current,
            {
                x: "30%",
                duration: 2,
                ease: (0.37, 0, 0.63, 1),
            },
            0
        );
    }, []);

    return (
        <div
            ref={parent}
            className="h-full w-full text-black pb-40 overflow-hidden"
        >
            <div className="relative">
                <img
                    className="w-[27%] mx-auto mt-32"
                    src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
                />
                <img
                    ref={image1}
                    className="w-[15%] absolute top-10 right-[27%]"
                    src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
                />
                <video
                    ref={video1} muted autoPlay loop
                    className="w-[27%] absolute top-[40%] left-[17%] z-10"
                    src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
                ></video>
                <img
                    ref={image2}
                    className="w-[25%] absolute -bottom-40 left-[15%]"
                    src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
                />
                <video
                    ref={video2} muted autoPlay loop
                    className="w-[50%] aspect-video absolute -bottom-[40%] right-0"
                    src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
                ></video>
            </div>

            <div data-scroll data-scroll-speed=".2">
                <div className="flex items-center gap-1 py-15 justify-center mt-28">
                    <img className="w-3" src="/assets/blackStar.svg" />
                    <h2 className="text-xs">In the media</h2>
                </div>
                <div className="text-[10vw] text-center leading-none tracking-tight">
                    <h1 className="overflow-hidden">
                        <motion.span
                            className="inline-block"
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: "0", opacity: 1 }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                            viewport={{ once: true }}
                        >
                            Spread
                        </motion.span>
                    </h1>
                    <h1 className="overflow-hidden">
                        <motion.span
                            className="inline-block"
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: "0", opacity: 1 }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                            viewport={{ once: true }}
                        >
                            the News
                        </motion.span>
                    </h1>
                </div>

                <p className="text-xl text-center mt-10">
                    Find out more about our work on these <br /> leading design and
                    technology platforms.
                </p>
                <h2 className="mt-8 underline text-center">Browse all news</h2>
            </div>
        </div>
    );
}

export default Images;
