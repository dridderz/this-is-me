import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Test from './Components/Test/Test';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Test" element={<Test />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
