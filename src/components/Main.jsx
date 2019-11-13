import React from 'react';
import About from './About';
import Writing from './Writing';
import Speaking from './Speaking';
import Project from './Project';
import MainContent from './MainContent';


export default function Main(props) {
  const { isMain, isAbout, isWriting, isSpeaking, isProject } = props.state;
  return (
    <div className="main">
      {isMain &&  <MainContent />}
      {isAbout && <About />}
      {isWriting && <Writing />}
      {isSpeaking && <Speaking />}
      {isProject && <Project />}
    </div>
  )
}
