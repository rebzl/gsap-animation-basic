// useRef = Reference which dom element is going to return in our life cycle
// useRef = Retorna un elemento en el dom
// useRef("algo") = Retorna un objeto con un current: algo
import { useRef, useEffect } from "react";
import logo from "../logo.svg";
import "../App.scss";
import { TweenMax, Power3 } from "gsap";

function Ejercicio1() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeInOut,
    });
    TweenMax.to(textItem, 0.2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeInOut,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img
          // Assigned the element to useRef
          ref={(element) => {
            logoItem = element;
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p
          ref={(el) => {
            textItem = el;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Ejercicio1;
