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
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>
          <Row>
            <Col s={10} offset='s1' style={{textAlign: 'center', fontSize:'35px', fontSize:'40px', color:'#BBB', fontWeight:'bold', paddingTop:'20px'}}>
              Health is the foundation of our community.
              <br></br>Search for your nearest health provider
            </Col>
          </Row>


          <Row>
            <Col s={12} m={3} style={{paddingLeft:'40px', textAlign:'center'}}>
              <img src={"People.png"} style={{width:"300px", height:"300px"}}/>
              <h3> Regardless of your immigration status and/or language spoken at home, we will
              find a health center near you.</h3>
            </Col>

            <Col s={12} m={1} style={{paddingTop:"100px", textAlign:'center'}}>
                <img src={"PLUS.png"} style={{width:"100px", height:"100px"}}/>
            </Col>

            <Col s={12} m={4} style={{textAlign:'center'}}>
              <img src={"Location.png"} style={{width:"300px", height:"300px", textAlign:'center'}}/>
              <h3> We will search our database and find your nearest health center based on your zipcode and/or country.
            </h3>
            </Col>

            <Col s={12} m={1} style={{paddingTop:"100px", textAlign:'center'}}>
                <img src={"EQUAL.png"} style={{width:"100px", height:"100px"}}/>
            </Col>

            <Col s={12} m={3} style={{paddingRight:'40px', textAlign:'center'}}>
              <img src={"HealthCenters.png"} style={{width:"300px", height:"300px"}}/>
              <h3> This website is ran by the community for the community.
                Please review the clinics once you visit them to let others know how your experience was.
              </h3>
            </Col>
            <Col s={12} style={{textAlign:"center"}}>
              <Button onClick={this.props.onSearchClick}>Search</Button>
            </Col>
          </Row>
          </div>
        )
  }
}

export default Homepage
