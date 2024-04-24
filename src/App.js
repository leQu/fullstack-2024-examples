import React from "react";
import moment from "moment";

import logo from "./logo.svg";
import MainHeader from "./components/MainHeader";
import WordListComponent from "./components/WordListComponent";
import "./App.css";
import MySmartComponent from "./components/MySmartComponent";
import UntrackedComponent from "./components/UntrackedComponent";
import ReducerComponent from "./components/ReducerComponent";
import CustomButton from "./components/CustomButton";
import TitleUpdater from "./components/TitleUpdater";
import ToDoListComponent from "./components/ToDoListComponent";
import MultiFieldForm from "./components/MultiFieldForm";

export const CounterContext = React.createContext();
export const CounterContextUpdater = React.createContext();

function App() {
  const simpleFunction = (event) => {
    console.log("Simple function", event);
  };
  return (
    <CounterContext.Provider value={88}>
      <CounterContextUpdater.Provider value={88}>
        <div className="App">
          <header className="App-header">
            <MainHeader description="Detta är vårt nya projekt" />
            <ToDoListComponent />

            <MultiFieldForm />

            <TitleUpdater />
            <ReducerComponent />
            <UntrackedComponent simpleFunction={simpleFunction} />
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
            <CustomButton customClick={() => console.log("Klick!")}>
              <p>Hej</p>
            </CustomButton>
          </header>
        </div>
      </CounterContextUpdater.Provider>
    </CounterContext.Provider>
  );
}

export default App;
