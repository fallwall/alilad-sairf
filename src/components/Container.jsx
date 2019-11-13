import React from 'react';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Social from './Social';

export default function Container(props) {
  return (
    <div>
      <Header changeView={props.changeView}/>
      <Main state={props.state}/>
      <div className="footer">
        <Contact />
        <Social />
      </div>
    </div>
  )
}
