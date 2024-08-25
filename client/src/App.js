import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stats from './stats';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;