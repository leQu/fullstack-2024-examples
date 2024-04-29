import React from "react";

import logo from "../logo.svg";
import WordListComponent from "../components/WordListComponent";
import moment from "moment";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WordListComponent words={["banan", "melon", "kiwi", "citron"]} />
        Learn React {moment().format("dd YYYY mm")}
      </a>
    </div>
  );
}
