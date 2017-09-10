import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button} from 'react-materialize'
import Map from './Map'

var teal = "#4AB4CB";
var red = "#EF4423";
var lightG = '#CCC';
var darkG = '#424242';


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
          {/* <Navbar brand='Our Amazing Name' right style={{backgroundColor:'teal'}}>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
          </Navbar> */}
            <Row>
              <Col s={12} style={{backgroundColor:teal, textAlign:'center', width:"100vw", textAlign:'center', fontSize:'20px', color: '#FFF'}}>
                <img src={'logo.png'} style={{width:'100px', height:'100px'}}/>
                <div>Our Amazing Name</div>
                <br/>
              </Col>
              <Col>
                <h1>REVIEW THE CLINIC</h1>
              </Col>
          </Row>
        </div>
      )

  }
}

export default Homepage
