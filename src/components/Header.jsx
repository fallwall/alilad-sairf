import React from 'react';
import sunflower from './sunflower.svg'

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img src={sunflower} style={{height:"20px"}}/>
        <div>ABOUT</div>
        <div>WRITING</div>
        <div>SPEAKING</div>
        <div>PROJECTS</div>
      </div>
      <div>
        <a href="#">Dalila Sairf</a>
      </div>
    </div>
  )
}
