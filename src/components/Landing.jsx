import { motion } from "framer-motion";
import React from "react";

function Landing() {
    return (
        <div className="md:h-[300vh] h-[150vh] w-full relative overflow-hidden">
            <img data-scroll data-scroll-speed="-1"
                className="h-full object-cover object-top z-50 w-full"
                src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
            />
            <div className="h-full max-w-full md:ml-20 ml-5  absolute top-0 right-0 left-0">
                <div className="md:mt-[28rem] text-sm mt-60 md:mb-15 mb-5 md:text-2xl whiten">
                    {[
                        "Global digital design studio partnering with",
                        "brands and businesses that create exceptional",
                        "experiences where people live, work, and unwind.",
                    ].map((item, idx) => (
                        <p key={idx} className="overflow-hidden">
                            <motion.span
                                className="inline-block origin-left"
                                initial={{ y: "80%", rotate: 20 }}
                                animate={{ y: "0", rotate: 0 }}
                                transition={{ duration: .8, ease: [0.33, 1, 0.68, 1], delay: idx * .1, delay: .5 }}
                            >
                                {item}
                            </motion.span>
                        </p>
                    ))}
                </div>
                <div className="text-[16vw] mb-20 leading-none">
                    <h1>Digital</h1>
                    <h1>Design</h1>
                    <h1>Experience</h1>
                </div>
                <p className="md:text-xl text-sm w-[330px] md:w-[355px] md:mb-15 mb-5">
                    We help experience-driven companies thrive by making their audience
                    feel the refined intricacies of their brand and product in the digital
                    space. Unforgettable journeys start with a click.
                </p>
                <a className="border-b-[1px] text-sm " href="#">
                    The Studio
                </a>
            </div>
        </div>
    );
}

export default Landing;
