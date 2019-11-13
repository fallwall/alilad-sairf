import React from 'react';
import sunflower from './sunflower.svg'

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <img src={sunflower} style={{ height: "20px" }} />
        </div>
        <div className="nav-nav">
          <div className="nav-nav-nav">ABOUT</div>
          <div className="nav-nav-nav">WRITING</div>
          <div className="nav-nav-nav">SPEAKING</div>
          <div className="nav-nav-nav">PROJECTS</div>
        </div>
      </div>
      <div>
        <a href="#">Dalila Sairf</a>
      </div>
    </div>
  )
}
