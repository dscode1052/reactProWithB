import React, { useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
  const [ Username, setUsername ] = useState("");
  const [ Email, setEmail ] = useState("");
  const [ Password, setPassword ] = useState("");

  const navigate = useNavigate();   

  function onChnageUsernameHandler(e) {
    setUsername(e.target.value);
  }

  function onChnageEmailHandler(e) {
    setEmail(e.target.value);
  }

  function onChnagePasswordHandler(e) {
    setPassword(e.target.value)
  }

  const onSubmitHandler = async (e) => {    
    e.preventDefault();

    let dataToSubmit = {
      username: Username,
      email: Email,
      password: Password
    }

    try {
      // dispatch(registerUser(dataToSubmit));

      setUsername('')
      setEmail('');
      setPassword('');

      navigate('/login');
    } catch(error) {
      console.log(error);
    }    
  };

  return (
    <div className="register">
      <div className="container">
        <div className="registerTitle">
          Sign Up
        </div>
        <form className="registerForm" onSubmit={onSubmitHandler}>
          <TextField
            className="mInput"
            type="text"
            label="Username"
            variant="outlined"            
            value={Username}
            onChange={onChnageUsernameHandler}
            required
          />

          <TextField
            className="mInput"          
            type="email"
            label="Email"
            variant="outlined"            
            value={Email}
            onChange={onChnageEmailHandler}            
            required
          />

          <TextField
            className="mInput"
            type="text"
            label="Password"
            variant="outlined"            
            value={Password}
            onChange={onChnagePasswordHandler}
            required
          />

          <Button type="submit" variant="contained" size="medium" className="registerBtn">
            Register
          </Button>

        </form>
        <div style={{ float: 'left' }}>
          Already have an account? <Link to="/login" className="link">Sign In Now!</Link>
        </div>
      </div>      
    </div>
  )
}

export default Register

