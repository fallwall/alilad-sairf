import React, { Component } from 'react';
import Container from './components/Container';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMain: true,
      isAbout: false,
      isWriting: false,
      isSpeaking: false,
      isProject: false
    }
  }

  changeView = (ev) => {
    ev.preventDefault();
    const name = ev.target.attributes.name.value;
    this.setState({
      isMain: false,
      isAbout: false,
      isWriting: false,
      isSpeaking: false,
      isProject: false,
      [name]: true
    })
  }

  render() {
    return (
      <div className="App">
        <Container changeView={this.changeView} state={this.state}/>
      </div>
    )
  }
}

export default App;
