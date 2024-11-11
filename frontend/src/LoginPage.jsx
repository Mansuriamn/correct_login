
import axios from 'axios';
import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // New state for the response message
  
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const loginData = { username, password };

  //   axios
  //     .post('http://localhost:5000/login', loginData)
  //     .then((res) => {
  //       if (res.data.success) {
  //         setMessage(res.data.message); // Show success message
  //       } else {
  //         setMessage("Login failed. Please try again."); // Show failure message
  //       }
  //     })
  //     .catch((err) => setMessage(err.response ? err.response.data : err.message)); // Handle errors
  // };
// In your LoginPage component
const handleLogin = (e) => {
  e.preventDefault();
  const loginData = { username, password };

  axios
    .post('/login', loginData)
    .then((res) => {
      if (res.data.success) {
        setMessage(res.data.message);
      } else {
        setMessage(res.data.message || "Login failed. Please try again.");
      }
    })
    .catch((err) => {
      console.error('Error during login:', err);
      setMessage(
        err.response
          ? `Login failed: ${err.response.data.message}`
          : 'An unexpected error occurred. Please try again later.'
      );
    });
};

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {message && <p style={styles.message}>{message}</p>} {/* Display message if exists */}
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '15px',
    color: '#333'
  }
};

export default LoginPage;
