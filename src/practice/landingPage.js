import React, { useEffect, useState } from "react";
import "../styles/home.scss";
//import Water from "./images/Water2.mp4";
//import Bubble from "./images/Bubble.mp4";
import Rain from "../images/Rain.mp4";

const useScrollPosition = () => {
  const [scrollYPosition, setScrollYPosition] = useState(window.pageYOffset);

  const onScroll = () => {
    setScrollYPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollYPosition;
};

export default () => {
  const scrollPosition = useScrollPosition();

  return (
    <div className="page-wrapper">
      <div className="text-parent">
        <h1
          style={{
            transform: `translate3d(-${scrollPosition / 2}px, -${
              scrollPosition * 0.1
            }px, 0px)`,
          }}
        >
          I'm creative Front-End Developer.
        </h1>

        <h1
          style={{
            transform: `translate3d(${scrollPosition / 2}px, -${
              scrollPosition * 0.1
            }px, 0px)`,
          }}
        >
          My name is HaEun-Jo. Nice to meet you.
        </h1>
      </div>

      <video
        autoPlay
        muted
        loop
        src={Rain}
        style={{
          transform: `translate3d(-50%, calc(-${
            scrollPosition * 0.9
          }px - 50%), 0)`,
        }}
      ></video>
      <div className="text-parent">
        <h1
          className="outline"
          style={{
            transform: `translate3d(-${scrollPosition / 2}px, -${
              scrollPosition * 0.1
            }px, 0px)`,
          }}
        >
          I'm creative Front-End Developer.
        </h1>

        <h1
          className="outline"
          style={{
            transform: `translate3d(${scrollPosition / 2}px, -${
              scrollPosition * 0.1
            }px, 0px)`,
          }}
        >
          My name is HaEun-Jo. Nice to meet you.
        </h1>
      </div>
    </div>
  );
};
