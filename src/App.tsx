import React from "react";
import { FiArrowRight } from 'react-icons/fi'

import "./styles/global.css";
import "./styles/pages/landing.css";

import logoImg from "./images/logo.svg";

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>Sorocaba</strong>
            <span>São Paulo</span>
          </div>

          <a href="/" className="enter-app">
            <FiArrowRight />
          </a>
        </main>
      </div>
    </div>
  );
}

export default App;
