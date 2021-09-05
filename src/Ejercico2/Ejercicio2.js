import React, { useRef, useEffect, useState } from "react";
import "../App.scss";
import { TweenMax, Power3 } from "gsap";

function Ejercicio2() {
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [expand, setExpand] = useState(false);
  const handleExapand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeInOut,
    });
    setExpand(true);
  };
  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeInOut,
    });
    setExpand(false);
  };
  useEffect(() => {
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue], // elementos a animar
      0.8, // duracion
      { opacity: 0, x: -40, ease: Power3.easeInOut }, // animacion
      0.2 // delay
    );
  }, []);

  return (
    <div>
      <div className="circle-container">
        <div
          ref={(e) => {
            circle = e;
          }}
          className="circle"
        ></div>
        <div
          onClick={expand !== true ? handleExapand : handleShrink}
          ref={(e) => {
            circleRed = e;
          }}
          className="circle red"
        ></div>
        <div
          ref={(e) => {
            circleBlue = e;
          }}
          className="circle blue"
        ></div>
      </div>
    </div>
  );
}

export default Ejercicio2;
