import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter, Link} from "react-router-dom";


function Nav() {

  return (
    <ReactBootStrap.Nav variant="pills"  style={{background: "crimson", color:"white"}}>
       <Link to="">
       <ReactBootStrap.NavDropdown title="Products" id="nav-dropdown" >
        <ReactBootStrap.NavDropdown.Item >CMX Sentinel</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >CMX Stream</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </Link>

      <Link to=""   >
      <ReactBootStrap.NavDropdown title="Trendius" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item >Predective Analytics</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Performance Analytics</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </Link>

      <Link to ="">
      <ReactBootStrap.NavDropdown title="Engineering" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item >Acoustics & Pulsation</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Vibration and Noise</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >FMEA</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Intergrity & Reliability</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Surge & Fluid Dynamics</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Fitness for Services</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </Link>
      
      <Link to ="">
      <ReactBootStrap.NavDropdown title="PlantMORE" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item >Turnaround</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Balancing & Alignment</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >O&M</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Commisioning and Startup</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >ESP</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Field Condition Monitoring</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </Link>

      <Link to ="">
      <ReactBootStrap.NavDropdown title="Prespectives" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item >Whitepaper</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Resources</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Blogs</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </Link>

      <Link to ="">
      <ReactBootStrap.NavDropdown title="Company" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item >About Us</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Leadership</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Policies</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Sustanibility</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item >Careers</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </Link>
      
    </ReactBootStrap.Nav>
  );
}

export default Nav;