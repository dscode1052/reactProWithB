import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <Link to="/" className="link">
        <img src={Logo} alt="" className="logo" />
      </Link>   
      <Link to="/posts" className="link">Post</Link>
    </div>
  )
}

export default LeftBar
