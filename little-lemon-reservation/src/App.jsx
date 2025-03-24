import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Confirmation from "./pages/Confirmation";
import Footer from "./components/Footer";

// Optional: Shared layout or navbar can go here

function App() {
  return (
    <>
    <Router>
      <Header/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reservation />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
    <Footer />
      </>
  );
}

export default App;