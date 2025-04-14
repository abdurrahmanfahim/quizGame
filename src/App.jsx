import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QuizCategories from "./components/QuizCategories";
import QuizGame from "./components/QuizGame";
import Results from "./components/Results";
import History from "./components/History ";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<QuizCategories />} />
        <Route path="/quiz" element={<QuizGame />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;
