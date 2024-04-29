import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Examples from "./views/Examples";

import "./App.css";
import MultiFieldForm from "./components/MultiFieldForm";

export const CounterContext = React.createContext();
export const CounterContextUpdater = React.createContext();

function App() {
  return (
    <CounterContext.Provider value={88}>
      <CounterContextUpdater.Provider value={88}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="examples/form/" element={<MultiFieldForm />} />
            <Route path="examples/:name" element={<Examples />} />
            <Route path="home" element={<Home />} />
            <Route path="examples/:name" element={<Examples />} />
          </Routes>
        </BrowserRouter>
      </CounterContextUpdater.Provider>
    </CounterContext.Provider>
  );
}

export default App;
