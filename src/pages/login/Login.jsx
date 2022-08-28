import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const [ Email, setEmail ] = useState("");
  const [ Password, setPassword ] = useState("");

  const navigate = useNavigate();
  
  function onChnageEmailHandler(e) {
    setEmail(e.target.value);
  }

  function onChnagePasswordHandler(e) {
    setPassword(e.target.value)
  }

  const onSubmitHandler = async (e) => {    
    e.preventDefault();

    let dataToSubmit = {
      email: Email,
      password: Password
    }

    try {   
      // Login Test 🌟나중에 삭제 
      if(Email === 'admin@gmail.com' && Password === '12345') {
        // AuthenticationService.loginSuccess(Email, Password);
        // navigate('/main');    
        navigate(`/${Email}`);  
              
        // dispatch(loginUser(dataToSubmit));
      }

      // dispatch(loginUser(dataToSubmit));

      navigate('/');
      setEmail('');
      setPassword('');
      
    } catch(error) {
      console.log(error);
    }    
  }; 


  return (
    <div className="login">
      <div className="container">
        <div className="loginTitle">
          Sign In
        </div>

        <form className="loginForm" onSubmit={onSubmitHandler}>  

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

          <div className="rLink">
            <Link to="/forgetPassword" className="rLinkText">Forgot Password?</Link> 
          </div>

          <Button type="submit" variant="contained" size="medium" className="loginBtn">
            Login
          </Button>        
        </form>
        <div style={{ float: 'left' }}>
          Don't you have an account? <Link to="/register" className="lLink">Sign Up Now!</Link> 
        </div>
      </div>      
    </div>
  )
}

export default Login

