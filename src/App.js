import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import JumbotronComp from './Jumbotron/Jumbotron';
import CommandTable from './CommandTable/CommandTable'
import Sidebar from './Sidebar/Sidebar'
import {Grid,Row,Col} from 'react-bootstrap'
import Sticky from 'react-stickynode'
import Spam from './Spam/Spam'
import Post from './Blogpost/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <JumbotronComp></JumbotronComp>
      <Grid>
        <Row>
          <Col sm={8} md={3}>
            <Sticky enabled={true} top={50} bottomBoundary={window.length}>
                <Sidebar/>
            </Sticky>
          </Col>
          <Col sm={8}>
          <Post></Post>
          {/* <Spam></Spam> */}
          </Col>
        </Row>
      </Grid>
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <CommandTable></CommandTable> */}
        {/* </header> */}
        {/* <Page></Page> */}

      </div>
    );
  }
}

export default App;
