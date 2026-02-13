import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./Components/Login/Login";
import Memories from "./Components/Memories/Memories";
import Navbar from "./Components/Navbar/Navbar";
import Photos from "./Components/Photos/Photos";
import Love from "./Components/Love/Love";
import Future from "./Components/Future/Future";
import Change from "./Components/Change/Change";
import Surprise from "./Components/Surprise/Surprise";
import Words from "./Components/Words/Words";
import Leave from "./Components/Leave/Leave";
import Background from "./Components/Background/Background";

function AppContent() {
  const location = useLocation();
  const showBackground = location.pathname !== '/';

  return (
    <>
      {showBackground && <Background />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/memories" element={<Memories variant={1} />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/love" element={<Love />} />
        <Route path="/words" element={<Words />} />
        <Route path="/future" element={<Future />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/change" element={<Change />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}

export default App;
