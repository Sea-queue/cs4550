import React from "react";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Navigation from "./Navigation";

function App() {
  return (
    <HashRouter>
      <div className="ml-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          {/* "/*" allows to nest the routes in this path to break down to multiple pages further */}
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
