"use client";
import { Typewriter } from "react-simple-typewriter";

function TypeAnimation() {
  return (
    <Typewriter
      words={[
        "TECH ENTHUSIAST",
        "FULLSTACK DEVELOPER",
        "FRONTEND DEVELOPER",
        "BACKEND DEVELOPER",
      ]}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={200}
      deleteSpeed={100}
      delaySpeed={1000}
    />
  );
}

export default TypeAnimation;
