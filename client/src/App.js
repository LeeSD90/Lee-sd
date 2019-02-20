import React, { Component } from 'react';
import './App.css';
import { Segment, Container, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header as='h1' color='blue'>
            Lee
          </Header>
        </header>
        <Container text text-align='center'>
            <Header as="h2">Stuff</Header>
            <p>
              Text
            </p>
        </Container>
        <Segment>
          Segmented stuff
        </Segment>
      </div>
    );
  }
}

export default App;
