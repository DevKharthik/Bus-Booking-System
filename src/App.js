import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import User from './components/User';
import Admin from './components/Admin';
import PasswordPrompt from './components/PasswordPrompt';
import './App.css';

function App() {
  const [seats, setSeats] = useState(Array(32).fill(null)); // 32 seats
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const bookSeats = (seatIndices, userName) => {
    const updatedSeats = [...seats];
    seatIndices.forEach(index => {
      updatedSeats[index] = userName; // Mark seat with the user's name
    });
    setSeats(updatedSeats);
  };

  const handleAuthenticate = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <div className="App">
        <h1>Kovai to Chennai</h1>
        <nav className="nav">
          <Link to="/user">
            <button>Go to User</button>
          </Link>
          <Link to="/admin">
            <button>Go to Admin</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/user" element={<User seats={seats} bookSeats={bookSeats} />} />
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <Admin seats={seats} />
              ) : (
                <PasswordPrompt onAuthenticate={handleAuthenticate} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/user" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
