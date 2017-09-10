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
              <Col s ={12} style={{backgroundColor:teal, textAlign:'center', width:"100vw", textAlign:'center', fontSize:'20px', color: '#FFF'}}>
                <img src={'logo.png'} style={{width:'100px', height:'100px'}}/>
                <div>Our Amazing Name</div>
                <br/>
              </Col>
              <Col s={12}>
                <div style={{width:'100vw',height:'300px', textAlign:'center'}}>
                  <Map center={location}/>
                </div>
              </Col>
            <div style={{width:'20vh',height:'90px', display:'inline'}}>
              <Row>
                <Col s={12}>
                  <p></p>
                  <input type="text" placeholder="Health Fund"/>
                </Col>
                <Col s={12}>
                  <input type="text" placeholder="State"/>
                </Col>
                <Col s={12}>
                  <input type="text" placeholder="Zip Code"/>
                </Col>
                <Col s={12}>
                  <input type="text" placeholder="Status"/>
                </Col>
                <Col s={12} style={{textAlign:"center"}}>
                  <Button>Search</Button>
                </Col>
              </Row>
            </div>
          </Row>

          <Row>
            <Col s={12} style={{backgroundColor: lightG, width:'100vw', height:'100px', textAlign:'center'}}>
                <div style={{paddingTop:'35px'}}>
                  <a href="#"><Icon small>insert_chart</Icon></a>
                  <a href="#"><Icon small>insert_chart</Icon></a>
                  <a href="#"><Icon small>insert_chart</Icon></a>
                  <a href="#"><Icon small>insert_chart</Icon></a>
                  <a href="#"><Icon small>insert_chart</Icon></a>
                </div>
            </Col>
            <Col s={12} style={{backgroundColor: darkG, width:'100vw', height:'100px', color:'#FFF', textAlign:'center'}}>
              <br></br>
              <div class="font">ABOUT</div>
              <div class="font">COMMUNITY PARTNERS</div>
              <div class="font">CONTACT</div>
            </Col>
          </Row>
        </div>
      )

  }
}

export default Homepage
