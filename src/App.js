import moment from "moment";

import logo from "./logo.svg";
import MainHeader from "./components/MainHeader";
import WordListComponent from "./components/WordListComponent";
import "./App.css";
import MySmartComponent from "./components/MySmartComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader title="Hej alla" description="Detta är vårt nya projekt" />
        <MainHeader title="Hej Alex" description="Kul med ett nytt projekt" />
        <MySmartComponent initialCount={100} />
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
      </header>
    </div>
  );
}

export default App;
