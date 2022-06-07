import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RegisterPresence from './pages/RegisterPresence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Em breve </h1>} />
          <Route path="/scheduler/:id" element={<RegisterPresence />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
