import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Fact1 from './components/fact1';
import Fact2 from './components/fact2';
import Fact3 from './components/fact3';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Fact1 />} />
            <Route path='/fact2' element={<Fact2 />} />
            <Route path='/fact3' element={<Fact3 />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;