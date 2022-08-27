import React, { useState } from 'react';
import './forgetPassword.scss';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ForgetPassword = () => {
  const [ Email, setEmail ] = useState("");
  const [ Password, setPassword ] = useState("");
  const [ ConfirmPassword, setConfirmPassword ] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {    
    e.preventDefault();

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      navigate('/login');
    } catch(error) {
      console.log(error);
    }    
  }; 

  function onChnageEmailHandler(e) {
    setEmail(e.target.value);
  }

  function onChnagePasswordHandler(e) {
    setPassword(e.target.value)
  }

  function onChnageConfirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <div className="pChange">
      <div className="container">
        <div className="pChangeTitle">
          Reset Password
        </div>

        <form className="pChangeForm" onSubmit={onSubmitHandler}>  

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
            label="New Password"
            variant="outlined"            
            value={Password}
            onChange={onChnagePasswordHandler}
            required
          />

          <TextField
            className="mInput"
            type="text"
            label="Confirm New Password"
            variant="outlined"            
            value={ConfirmPassword}
            onChange={onChnageConfirmPasswordHandler}
            required
          />  

          <Button type="submit" variant="contained" size="medium" className="pChangeBtn">
            Change Password
          </Button>        
        </form>
        <div style={{ float: 'left' }}>
          Want to cancel? <Link to="/login" className="lLink">Sign In</Link> 
        </div>
      </div>      
    </div>
  )
}

export default ForgetPassword
