import React, { useState } from "react";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Viewport } from "./Components/Viewport";
import "./App.css";
import { ThemeProvider } from "styled-components";

export const themes = {
  light: {
    bgColor: "#fff",
    fontColor: "#222",
    navbg: "#fff",
    cardbg: "#fff",
    cardborder: "#e5e5e5",
  },
  dark: {
    bgColor: "#222",
    fontColor: "#eee",
    navbg: "#1a1a1a",
    cardbg: "#333",
    cardborder: "#444",
  },
};

const initialTheme = localStorage.getItem("507f1f77bcf86cd799439011") || "dark";

const App = () => {
  const [currTheme, setCurrTheme] = useState(initialTheme);

  const handleTheme = () => {
    if (currTheme === "light") {
      setCurrTheme("dark");
      localStorage.setItem("507f1f77bcf86cd799439011", "dark");
      return;
    }
    setCurrTheme("light");
    localStorage.setItem("507f1f77bcf86cd799439011", "light");
  };

  window.addEventListener("scroll", () => {
    const reveal = document.querySelectorAll(".reveal");

    for (let x = 0; x < reveal.length; x++) {
      let winHeight = window.innerHeight;
      let revealTop = reveal[x].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < winHeight - revealPoint) {
        reveal[x].classList.add("active");
      } else {
        reveal[x].classList.remove("active");
      }
    }
  });

  return (
    <ThemeProvider theme={themes[currTheme]}>
      <div className="App">
        <div>
          <Navbar handleTheme={handleTheme} currTheme={currTheme} />
          <Viewport currTheme={currTheme} />
          <Skills currTheme={currTheme} />
          <Projects currTheme={currTheme} />
          <Contact currTheme={currTheme} />
          <Footer currTheme={currTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
