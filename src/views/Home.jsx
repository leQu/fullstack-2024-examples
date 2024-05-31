import React from "react";
import useApi from "../hooks/useApi";

import logo from "../logo.svg";
import WordListComponent from "../components/WordListComponent";
import moment from "moment";

import { useTheme } from "../hooks/useTheme";

import Navbar from "../components/Navbar";

export default function Home() {
  const { data } = useApi(
    "https://dummyjson.com/products?limit=5&select=title,price"
  );

  const [theme, toggleTheme] = useTheme();

  return (
    <div className="App">
      <Navbar />
      <div data-testid="vajavill-app-header" className={`App-header ${theme}`}>
        <h1>Welcome to our amazing site</h1>
        <button onClick={toggleTheme}>Toggle theme</button>
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
          <WordListComponent products={data?.products} />
          Learn React {moment().format("dd YYYY mm")}
        </a>
      </div>
    </div>
  );
}
