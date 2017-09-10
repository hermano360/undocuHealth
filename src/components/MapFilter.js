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
                  <form action="" method="">
                  <input type="text" placeholder="Health Field"/>
                  <input type="text" placeholder="State"/>
                  <input type="text" placeholder="Zip Code"/>
                  <input type="text" placeholder="Status"/>
                  <div style={{textAlign:'center'}}>
                  <Button>Search</Button>
                </div>
                  </form>
                </Col>
              </Row>
            </div>
          </Row>

          <Row>
            <Col s={12} style={{backgroundColor: lightG, width:'100vw', height:'100px', textAlign:'center', marginTop:'30px'}}>
                <div style={{paddingTop:'35px'}}>
                  <a href="#" style={{paddingRight:'5px'}}><img src="facebook.png" style={{width:"40px", height:"40px"}}/></a>
                  <a href="#" style={{paddingRight:'5px'}}><img src="instagram.png" style={{width:"40px", height:"40px"}}/></a>
                  <a href="#"><img src="twitter.png" style={{width:"40px", height:"40px"}}/></a>
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
