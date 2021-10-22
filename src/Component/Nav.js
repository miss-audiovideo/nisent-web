import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


function Nav() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <ReactBootStrap.Nav variant="pills" activeKey="1" onSelect={handleSelect} style={{background: "crimson", color:"white"}}>
       
       <ReactBootStrap.NavDropdown title="Products" id="nav-dropdown" >
        <ReactBootStrap.NavDropdown.Item eventKey="1.1">CMX Sentinel</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="1.2">CMX Stream</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>

      <ReactBootStrap.NavDropdown title="Trendius" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item eventKey="2.1">Predective Analytics</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="2.2">Performance Analytics</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>

      
      <ReactBootStrap.NavDropdown title="Engineering" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item eventKey="3.1">Acoustics & Pulsation</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="3.2">Vibration and Noise</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="3.3">FMEA</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="3.4">Intergrity & Reliability</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="3.4">Surge & Fluid Dynamics</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="3.4">Fitness for Services</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      

      <ReactBootStrap.NavDropdown title="PlantMORE" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item eventKey="4.1">Turnaround</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="4.2">Balancing & Alignment</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="4.3">O&M</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="4.4">Commisioning and Startup</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="4.4">ESP</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="4.4">Field Condition Monitoring</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>

      <ReactBootStrap.NavDropdown title="Prespectives" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item eventKey="5.1">Whitepaper</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="5.2">Resources</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="5.3">Blogs</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>

      <ReactBootStrap.NavDropdown title="Company" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item eventKey="6.1">About Us</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="6.2">Leadership</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="6.3">Policies</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="6.4">Sustanibility</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item eventKey="6.4">Careers</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      
    </ReactBootStrap.Nav>
  );
}

export default Nav;