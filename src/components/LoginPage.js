import React, { useState } from 'react';

//import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const localname = localStorage.getItem('formData');
  const parsedData = JSON.parse(localname);
  console.log(parsedData.name);

  //const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if(username===parsedData.name &&password ===parsedData.password){
      alert('login Succesfull')
      window.location.href = 'https://rapidapi.com/DataCrawler/api/tripadvisor16';
    }
    else{
      alert('Invalid Credentials !!')
    }

  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-heading">Log In</h2>
        <label className="login-label">
          Name
          <input
            className="login-input"
            type="text"
            value={username}
            placeholder='Enter Your Name'
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label className="login-label">
          Password
          <input
            className="login-input"
            type="password"
            value={password}
            placeholder='Enter Your Password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className="login-button" type="submit" onClick={handleLogin}>
          Log In
        </button>
        <br />
        <a href="/">if you Don't have Account ? Click here to Signup</a> <br />
      </form>
    </div>
  );
}

export default LoginPage;