import React from "react";

function Footer() {
    return (
        <div className="h-screen
         w-full bg-[#070707] overflow-hidden">
            <div
                data-scroll
                data-scroll-speed="-.8"
                className="h-full w-[85%] mx-auto flex md:flex-row flex-col items-center gap-20 md:justify-center"
            >
                <div>
                    <div className="text-[#E0CCBB] text-[10vw] leading-none mb-10 md:mt-0 mt-40">
                        <h1>Our</h1>
                        <h1>Story</h1>
                    </div>
                    <p className="text-[2vw] text-[#AB9C90] md:w-[100%] w-60 ">
                        The story behind Exo Ape is one of exploration, creativity and
                        curiosity.
                    </p>
                </div>
                <video
                    muted
                    autoPlay
                    loop
                    className="lg:h-[30%] h-[20%] top-20 right-0 w-[100%] object-cover aspect-video"
                    src="/assets/video.mp4"
                ></video>
            </div>
        </div>
    );
}

export default Footer;
