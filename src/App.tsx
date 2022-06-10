import React from 'react';
import './App.css';
import RegisterPresence from './pages/RegisterPresence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import SchedulersRoom from './pages/SchedulersRoom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
