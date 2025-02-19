import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

function Video() {
    gsap.registerPlugin(ScrollTrigger);
    const parent = useRef(null);
    const videoDev = useRef(null);
    const videoParent = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": function () {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: parent.current,
                            start: "top top",
                            end: "+=600",
                            pin: true,
                            scrub: 2,
                        }
                    });

                    tl.to(videoDev.current, { width: "100%", duration: 2 }, 0);
                    tl.to(videoParent.current, { gap: "1%", duration: 2 }, 0);
                },

                "(max-width: 767px)": function () {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: parent.current,
                            start: "top -100%",
                            end: "+=500",
                            scrub: 2,
                        }
                    });

                    tl.to(videoDev.current, { width: "80%", duration: 2 }, 0);
                    tl.to(videoParent.current, { gap: "5%", duration: 2 }, 0);
                }
            });
        });

        return () => ctx.revert(); // ✅ Cleanup to avoid memory leaks
    }, []);

    return (
        <div ref={parent} className="h-screen relative w-full bg-black text-white overflow-hidden">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-fit w-full">
                <div className="flex items-center gap-1 py-15 justify-center">
                    <img className="w-3" src="/assets/whiteStar.svg" />
                    <h2 className="text-sm">Work in motion</h2>
                </div>
                <div ref={videoParent} className="text-[10vw] flex items-center justify-center gap-[50%] md:py-20 py-32 relative">
                    <video muted autoPlay loop ref={videoDev} className="aspect-video absolute w-[20%] opacity-40"
                        src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
                    ></video>
                    <h1 className="relative z-10">Play</h1>
                    <h1 className="relative z-10">Reel</h1>
                </div>
                <h3 className="text-sm opacity-70 text-center w-96 mx-auto">
                    Our work is best experienced in motion. Don’t forget to put on your headphones.
                </h3>
            </div>
        </div>
    );
}

export default Video;
