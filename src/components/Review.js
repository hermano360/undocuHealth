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
          <Navbar brand='HEALTHYMENTED' right style={{backgroundColor:teal}}>
            <NavItem href=''>HOME</NavItem>
            <NavItem href=''>ABOUT</NavItem>
            <NavItem href=''>REVIEWS</NavItem>
            <NavItem href=''>CONTACT US</NavItem>
            <NavItem href=''>PARTNERS</NavItem>
            <NavItem href=''>LOG IN</NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
          </Navbar>
            <Row>
              <Col s={12} style={{backgroundColor:teal, textAlign:'center', width:"100vw", textAlign:'center', fontSize:'20px', color: '#FFF'}}>
                <img src={'logo.png'} style={{width:'100px', height:'100px'}}/>
                <br/>
              </Col>
              <Col s={12} style={{textAlign:'center', color:red}}>
                <h1>REVIEW THE CLINIC</h1>
              </Col>
              <Col s={12} style={{textAlign:'center'}}>
                <div>*****</div>
              </Col>

              <Col>
                <form action="" method="">
                  <Col s={12}>
                    <input type="text" label="name" placeholder="FULL NAME"/>
                  </Col>
                  <Col s={6}>
                    <input type="text" label="email" placeholder="EMAIL"/>
                  </Col>
                  <Col s={6}>
                    <input type="text" label="zipcode" placeholder="ZIP CODE"/>
                  </Col>
                  <Col s={12}>
                    <textarea placeholder="COMMENT">

                    </textarea>
                  </Col>
                  <Col s={12} style={{textAlign:'center'}}>
                    <Button>SUBMIT</Button>
                  </Col>
                </form>
              </Col>

              <Row>
                <Col s={12} style={{backgroundColor: lightG, width:'100vw', height:'100px', textAlign:'center', marginTop:'30px'}}>
                    <div style={{paddingTop:'35px'}}>
                      <a href="#" style={{paddingRight:'5px'}}><img src="facebook.png" style={{width:"40px", height:"40px"}}/></a>
                      <a href="#" style={{paddingRight:'5px'}}><img src="instagram.png" style={{width:"40px", height:"40px"}}/></a>
                      <a href="#"><img src="twitter.png" style={{width:"40px", height:"40px"}}/></a>
                    </div>
                </Col>
                {/* <Col s={12} style={{backgroundColor: darkG, width:'100vw', height:'100px', color:'#FFF', textAlign:'center'}}>
                  <br></br>
                  <div className="font">ABOUT</div>
                  <div className="font">COMMUNITY PARTNERS</div>
                  <div className="font">CONTACT</div>
                </Col> */}
              </Row>

          </Row>
        </div>
      )

  }
}

export default Homepage
