import "./style.css";
import Typewriter from "./Typewriter";

const typewriter = new Typewriter(
  document.querySelector(".whitespace") as HTMLDivElement,
  { loop: true, typingSpeed: 10, deletingSpeed: 10 }
);

typewriter
  .typeString("Hello, I want to show you something")
  .pauseFor(1000)
  .typeString("\n\nThis is ho")
  .deleteChars(10)
  .pauseFor(150)
  .deleteAll(10)
  .typeString("Let's change something")
  .pauseFor(1000)
  .typeString("\n\nLet's switch to Polish")
  .pauseFor(1000)
  .typeString("\n\nMoże zbudujemy coś razem?")
  .pauseFor(1000)
  .deleteAll(10)
  .start();
