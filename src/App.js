import "./AppStyle.jsx";

import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import React, { useState, createContext } from "react";

import { LangBtn } from "./AppStyle.jsx";
import UA from "./assets/ua.svg";
import US from "./assets/us.svg";

export const Context = createContext();
function App() {
  const [lang, setLang] = useState(false);

  return (
    <>
      <Context.Provider value={lang}>
        <LangBtn onClick={() => setLang((prev) => !prev)}>
          {lang ? (
            <img src={UA} alt="українська" />
          ) : (
            <img src={US} alt="english" />
          )}
        </LangBtn>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
