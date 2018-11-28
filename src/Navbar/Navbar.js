import React, {Component} from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, NavLink } from 'react-bootstrap'
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
  //     <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top container">
  //       <a class="navbar-brand" href="#">Johnny Edgett</a>
        // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        //     <span class="navbar-toggler-icon"></span>
        // </button>
        
  //       <div class="collapse navbar-collapse" id="navbar">
  //       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  //           <li class="nav-item active">
  //               <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
  //           </li>
  //           <li class="nav-item active">
  //               <a class="nav-link" href="mailto:johnny.edgett.25@gmail.com">Contact<span class="sr-only">(current)</span></a>
  //           </li>
  //       </ul>
  //       <ul class="navbar-nav ml-auto">
  //         <li class="nav-link active">
  //           <a href="https://www.linkedin.com/in/johnny-edgett/">
  //             &nbsp;&nbsp;<img src="In-2C-28px-R.png" alt="Johnny Edgett's LinkedIn Profile"></img>
  //           </a>
  //         </li>
  //         <li class="nav-link active">
  //             <a href="https://github.com/johnnyedgett">
  //                 <img src="github32px.png" alt="Johnny Edgett's GitHub Profile"></img>
  //             </a>
  //         </li>                
  //         </ul>
  //     </div>
  // </nav>
      <Navbar fixedTop>
      
      <Navbar.Header>
      <Navbar.Brand><a href="#"> Johnny Edgett </a></Navbar.Brand>
      <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="mailto:johnny.edgett.25@gmail.com">Contact Me!</NavItem>
          <NavItem eventKey={3} href="https://www.linkedin.com/in/johnny-edgett/"><img src={linkedinlogo} alt="Johnny Edgett's Linked Profile" style={linkedInIconSize}></img></NavItem>
          <NavItem eventKey={3} href="https://github.com/johnnyedgett"><img src={github32px} alt="Johnny Edgett's Github" style={gitHubIconSize}></img></NavItem>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    )
  }
  }
export default NavbarComp