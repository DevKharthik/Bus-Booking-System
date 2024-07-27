import React, { useState } from 'react';

function PasswordPrompt({ onAuthenticate }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'dev') {
      onAuthenticate(true);
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div>
      <h2>Enter Admin Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default PasswordPrompt;
