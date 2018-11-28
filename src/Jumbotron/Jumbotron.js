import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap'
import './JumbotronComp.css'

class JumbotronComp extends Component {
  
  render(){
    const jumboStyle= {
      'height': '50vh',
      'width': '100vw',
      'test-emphasis-color':'black',
      'color':'#ebebeb',
      'text-shadow': '4px 1px 1px #666',
      'background':'url("james-wheeler-1175272-unsplash.jpg")',
      'background-size':'cover',
      'background-repeat': 'no-repeat'
    }
    return (
      <div class="jumbotron">
        
      </div>
    )
  }
}

export default JumbotronComp