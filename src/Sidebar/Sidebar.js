import React, { Component } from 'react'
import mejpg from './mejpg.jpg'
import './Sidebar.css'
import {Row, Col} from 'react-bootstrap'

class Sidebar extends Component { 
  render(){ 
    return (
      <div>
        <p></p>
        <img src={mejpg} class="img-round" alt="Me"></img>
        <div className="center">
        <a href="/home"><br/>Home</a>
        <a href="/contact"><br/>Contact me!</a>
        <a href="/contact"><br/>Option 3</a>
        <a href="/contact"><br/>Option 4</a>
        <a href="/contact"><br/>Option 5</a>
        </div>
      </div>
    )
  }
}

export default Sidebar