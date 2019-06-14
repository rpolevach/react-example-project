import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import LoginPage from './login/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
} 

export default App;
