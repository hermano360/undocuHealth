import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col} from 'react-materialize'
import Map from '../Map'

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
        <Navbar brand='Our Amazing Name' right style={{backgroundColor:'teal'}}>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>

          <Row>
            <Col s={10} offset='s1' style={{textAlign: 'center', fontSize:'30px'}}>
              Health is the foundation of our community. Search for your nearest health provider
            </Col>
            <div style={{width:'90vh',height:'100px'}}>
              <Map center={location}/>
            </div>
          </Row>
        </div>
      )

  }
}

export default Homepage
