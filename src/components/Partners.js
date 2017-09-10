import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button} from 'react-materialize'
import Map from './Map'

var teal = "#4AB4CB";
var red = "#EF4423";
var lightG = '#CCC';
var darkG = '#424242';


class Partners extends Component {
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

          <Col s={12} style={{textAlign:'center', marginTop:'100px', color:lightG}}>
            <h2>OUR COMMUNITY PARTNERS</h2>
          </Col>
          <Col s={12} style={{textAlign:'center', marginTop:'100px', fontSize:'25px'}}>
            <p>We are a website build by community for community. We appreciate all of our partners, if you would like to be a community partner please fill out the contact page on the website.</p>
            <p>Thank you!</p>
          </Col>

          <Col>
            <Col s={12} style={{textAlign:'center'}}>
              <img src="ucla.png"/>
            </Col>
            <Col s={12} style={{textAlign:'center', paddingTop: '40px'}}>
              <img src="UndocuMedia.png"/>
            </Col>
            <Col s={12} style={{textAlign:'center'}}>
              <img src="fwd.jpg"/>
            </Col>
          </Col>

        </div>
      )

  }
}

export default Partners
