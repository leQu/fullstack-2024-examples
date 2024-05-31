import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Examples from "./views/Examples";

import { ThemeProvider } from "./hooks/useTheme";

import "./App.css";

export const CounterContext = React.createContext();

function App() {
  return (
    <CounterContext.Provider value={[88]}>
      <ThemeProvider>
        <Router baseName="/fullstack-2024-examples">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="examples/:name" element={<Examples />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CounterContext.Provider>
  );
}

export default App;
