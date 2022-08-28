import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightBar = () => {

  return (
    <div className="rightBar">
      <Link to="/login" className="link">
        Sign In
      </Link> 
      
      <Link to="/register" className="link">
        Sign Up
      </Link>  
    </div>
  )
}

export default RightBar
