import React from 'react';
import './header.scss';
import LeftBar from './sections/LeftBar';
import RightBar from './sections/Rightbar';

const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <LeftBar />
      </div>

      <div className="rightHeader">
        <RightBar />
      </div>
    </div>
  )
}

export default Header
