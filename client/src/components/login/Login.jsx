import { useState } from 'react';
import './login.css'; // Add styles for the login form
import { useNavigate } from 'react-router-dom';

const Login = ({onclose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // // Handle login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    // // Add your authentication logic here

    // Check credentials
    if (username === 'rahul' && password === 'admin') {
        navigate('/admin'); // Redirect to /admin on successful login
        onclose();
      } else {
        alert('Invalid username or password'); // Show error on invalid credentials
      }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="password"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
