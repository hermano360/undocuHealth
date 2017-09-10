import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button} from 'react-materialize'

class Homepage extends Component {
  constructor(){
    super()
    }

  render(){
    const location ={
      lat:33.9866179,
      lng:-118.2168448
    }

      return (
        <div style={{width:'100vw',height:'100vh'}}>
      <Navbar brand="HEALTHYMENTED" right style={{backgroundColor:'#4AB4CB'}}>
        <NavItem href='HOME'>HOME</NavItem>
          <NavItem href='ABOUT'>ABOUT</NavItem>
            <NavItem href='REVIEWS'>REVIEWS</NavItem>
              <NavItem href='CONTACT US'>CONTACT US</NavItem>
                <NavItem href='PARTNERS'>PARTNERS</NavItem>
                  <NavItem href='LOG IN'>LOG IN</NavItem>
                  <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>

                  <Row>
                    <Col s={10} offset='s1' style={{textAlign: 'center', fontSize:'45px', fontSize:'45px', color:'#BBB', fontWeight:'bold', marginTop:'80px', marginBottom:'50px'}}>
                      WELCOME, PLEASE LOG IN
                    </Col>
                  </Row>
                  <Row>
	                   <Input s={6} label="User Name" validate><Icon>account_circle</Icon></Input>
	                    <Input s={6} label="Password" validate type='tel'><Icon>phone</Icon></Input>
                  </Row>
                  <div>
		                  <Button waves='light' node='a' href='http://www.google.com'> LOGIN </Button>
                  </div>
