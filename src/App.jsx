import React from "react";
import {BrowserRouter as Router, Routes, Route}from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return(
    <Router>
      {/* Definir las rutas de la aplicación */}
      <Routes>
        <Route path ="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};
export default App;