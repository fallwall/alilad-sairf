import React from 'react';
import sunflower from './sunflower.svg'

export default function Header(props) {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <img src={sunflower} style={{ height: "20px" }} />
        </div>
        <div className="nav-nav">
          <div className="nav-nav-nav" onClick={props.changeView} name="isAbout">ABOUT</div>
          <div className="nav-nav-nav" onClick={props.changeView} name="isWriting">WRITING</div>
          <div className="nav-nav-nav" onClick={props.changeView} name="isSpeaking">SPEAKING</div>
          <div className="nav-nav-nav" onClick={props.changeView} name="isProject">PROJECTS</div>
        </div>
      </div>
      <div>
        <a href="#">Dalila Sairf</a>
      </div>
    </div>
  )
}
