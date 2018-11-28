import React, { Component } from 'react'
import mejpg from './mejpg.jpg'
import './Sidebar.css'

class Sidebar extends Component { 
  render(){ 
    return (
      <div>
        <p></p>
        <img src={mejpg} class="img-round" alt="Me"></img>
        <div className="center">
        <a href="mailto:johnny.edgett.25@gmail.com"><br/>Contact me!</a>
        </div>
      </div>
    )
  }
}

export default Sidebar