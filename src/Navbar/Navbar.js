import React, {Component} from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import github32px from './github32px.png'
import linkedinlogo from './In-2C-28px-R.png'

class NavbarComp extends Component {
  render(){
    const linkedInIconSize = {
      'width':'32px',
      'height':'24px'
    }
    const gitHubIconSize = {
      'width':'24px',
      'height':'24px'
    }
    return (
      <Navbar fixedTop>
      
      <Navbar.Header>
      <Navbar.Brand><a href="/"> Johnny Edgett </a></Navbar.Brand>
      <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="mailto:johnny.edgett.25@gmail.com">Contact Me!</NavItem>
          <NavItem eventKey={3} href="https://www.linkedin.com/in/johnny-edgett/"><span><img src={linkedinlogo} alt="Johnny Edgett's Linked Profile" style={linkedInIconSize}></img></span></NavItem>
          <NavItem eventKey={3} href="https://github.com/johnnyedgett"><img src={github32px} alt="Johnny Edgett's Github" style={gitHubIconSize}></img></NavItem>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    )
  }
  }
export default NavbarComp