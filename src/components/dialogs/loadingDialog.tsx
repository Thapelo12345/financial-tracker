import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const time = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

const dotsTimeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

export default function Loanding() {
  useGSAP(() => {
    time.to(".boxes", {
      rotate: 360,
      scale: 0.5,
      translateX: -450,
      duration: 1,
      ease: "back.inOut",
      stagger: 0.5,
    });
    time.to(".boxes", {
      rotate: -360,
      scale: 0.5,
      translateX: 450,
      duration: 1,
      stagger: 0.5,
    });

    time.to(".boxes", {
      rotate: 0,
      scale: 1,
      boxShadow: "0 0 40px white, inset 0 5px 10px currentColor",
      translateX: 0,
      duration: 1,
      ease: "back.inOut",
      stagger: 0.5,
    });

    dotsTimeline.from(".dots", {
      translateX: -90,
      stagger: 0.4,
      repeat: -1,
      delay: 0.1,
      duration: 0.5,
    });
  }, []);

  return (
    <div
      className="shadow-4xl flex flex-col items-center justify-center w-[90%] h-1/2 md:w-1/2  rounded-lg"
      style={{
        backdropFilter: "blur(10px)",
        boxShadow:
          "5px 10px 20px black, 0px 9px 10px white, inset 0 0 10px white",
      }}
    >
      <div
        className="flex flex-row items-center justify-evenly w-1/2 h-1/2 m-2 overflow-hidden"
        style={{
          perspective: 1000,
        }}
      >
        <div
          className="boxes w-8 bg-green-500 rounded-lg aspect-square"
          style={{
            boxShadow: `
      1px 1px 8px currentColor,
      1px 1px 1px green,
      1px 1px 1px currentColor, inset 5px 0 10px white
    `,
          }}
        ></div>

        <div
          className="boxes w-8 bg-red-500 rounded-lg aspect-square"
          style={{
            boxShadow: `
      1px 1px 8px currentColor,
      1px 1px 1px red,
      1px 1px 1px currentColor, inset 5px 0 10px white
    `,
          }}
        ></div>

        <div
          className="boxes w-8 bg-blue-500 rounded-lg aspect-square"
          style={{
            boxShadow: `
      0px 0px 8px currentColor,
      0px 0px 1px blue,
      0px 0px 1px currentColor, inset 5px 0 10px white
    `,
          }}
        ></div>
      </div>

      <div className="w-full p-2 flex flex-row items-center justify-center">
        <h1 className="text-4xl text-white font-medium tracking-widest m-2">
          LOADING
        </h1>

        <div className="flex flex-row items-center h-1/2 w-1/2 overflow-hidden">
          <span className="dots text-white text-[60px] text-2xl ml-2 mb-4">.</span>
          <span className="dots text-white text-[60px] text-2xl ml-2 mb-4">.</span>
          <span className="dots text-white text-[60px] text2xl ml-2 mb-4">.</span>
        </div>
      </div>
    </div>
  );
}
