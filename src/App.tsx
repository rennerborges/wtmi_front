import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RegisterPresence from './pages/RegisterPresence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import SchedulersRoom from './pages/SchedulersRoom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Em breve </h1>} />
          <Route path="/scheduler/:id" element={<RegisterPresence />} />
          <Route path="/room/:id/schedulers" element={<SchedulersRoom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
