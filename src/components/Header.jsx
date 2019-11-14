import React from 'react';
import Spin from 'react-reveal/Spin';
import sunflower from './sunflower.svg'

export default function Header(props) {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <Spin>
            <img src={sunflower} style={{ height: "30px" }} />
          </Spin>
        </div>
        <div className="nav-nav">
          <div className="nav-nav-nav" onClick={props.changeView} name="isAbout">ABOUT</div>
          <div className="nav-nav-nav" onClick={props.changeView} name="isWriting">WRITING</div>
          <div className="nav-nav-nav" onClick={props.changeView} name="isSpeaking">SPEAKING</div>
          <div className="nav-nav-nav" onClick={props.changeView} name="isProject">PROJECTS</div>
        </div>
      </div>
      <div>
        <div className="nav-nav-main" onClick={props.changeView} name="isMain">Dalila Frias</div>
      </div>
    </div>
  )
}
