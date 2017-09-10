import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button} from 'react-materialize'
import Map from './Map'

var teal = "#4AB4CB";
var red = "#EF4423";
var lightG = '#CCC';
var darkG = '#424242';


class Review extends Component {
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
            <Row>
              <Col s={12} style={{textAlign:'center', color:red, marginTop:'50px'}}>
                <h1>REVIEW THE CLINIC</h1>
              </Col>
              <Col s={12} style={{textAlign:'center'}}>
                <img src='Stars.png' style={{width:'690px', height:'175px'}}/>
              </Col>

              <Col s={12} style={{textAlign:'center'}}>
                <form action="" method="">
                  <Col s={12} style={{marginBottom:'30px', marginTop:'30px'}}>
                    <input type="text" label="clinic-name" placeholder="Clinic Name"/>
                  </Col>
                  <Col s={6} style={{marginBottom:'30px'}}>
                    <input type="text" label="full name" placeholder="Full Name"/>
                  </Col>
                  <Col s={6} style={{marginBottom:'30px'}}>
                    <input type="text" label="email" placeholder="Email"/>
                  </Col>
                  <Col s={12} style={{marginBottom:'30px'}}>
                    <textarea placeholder="COMMENT" rows="4">

                    </textarea>
                  </Col>
                  <Col s={12} style={{textAlign:'center'}}>
                    <Button>SUBMIT</Button>
                  </Col>
                </form>
              </Col>

          </Row>
        </div>
      )

  }
}

export default Review
