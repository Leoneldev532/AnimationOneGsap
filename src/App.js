import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
function App() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(
      ".parent",
      {
        skewY: 7,
        duration: 0.4,
      },
      "+=40%"
    )
      .to(".text22", {
        y: "-12%",
        duration: 0.7,
      })
      .to(".text22", {
        letterSpacing: "14px",
      })
      .to(".emo", {}, "<")
      .to(
        ".text22",
        {
          scale: 0,
          duration: 0.2,
          ease: "sine.in",
        },
        " < "
      )
      .to(".toytoy", {
        backgroundColor: "#000000",
      })
      .to(
        ".text23",
        {
          y: "-120%",
          duration: 1,
        },
        "<"
      )
      .to(".text23", {
        letterSpacing: "14px",
      })
      .to(".text23", {
        scale: 0,
        duration: 0.2,
        ease: "sine.in",
      })
      .to(".toytoy", {
        backgroundColor: "green",
      })
      .to(
        ".text24",
        {
          y: "-180%",
          duration: 0.7,
        },
        "<"
      );
  });

  return (
    <div className="relative toytoy z-30 overflow-hidden flex-col w-full flex justify-center top-0   items-center bg-red-700 h-screen">
      <div className="parent  relative transform overflow-hidden w-full text-center   h-[170px] ">
        <h2 className="text22 text-red-300  text-9xl font-extrabold  translate-y-[200%] ">
          SALUT ✋
        </h2>
        <h2 className="text23 text-gray-400  text-9xl font-extrabold translate-y-[200%] ">
          WHATSAPP
        </h2>
        <h2 className="text24  text-green-400  text-9xl font-extrabold translate-y-[200%] ">
          BON WEEKEND !!! 😊
        </h2>
      </div>
    </div>
  );
}
export default App;
