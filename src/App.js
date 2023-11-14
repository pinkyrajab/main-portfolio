import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// components
import Home from './components/Home';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
      <Router>
        <ParticlesBackground/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;
