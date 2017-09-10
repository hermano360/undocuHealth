import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button} from 'react-materialize'

class Homepage extends Component {
  constructor(){
    super()
      this.state={
        page: 'home'
      }
    }

  // onNavBarClick(menuName)  {
  //   switch (menuName) {
  //     case 'home':
  //       this.setState({page: 'home'})
  //       break;
  //     case 'about':
  //       this.setState({page: 'about'})
  //       break;
  //       case 'reviews':
  //         this.setState({page: 'reviews'})
  //         break;
  //         case 'contact us':
  //           this.setState({page: 'contact us'})
  //           break;
  //           case 'partners':
  //             this.setState({page: 'partners'})
  //             break;
  //             case 'log in':
  //               this.setState({page: 'log in'})
  //               break;
  //
  //
  //
  //     default:
  //
  //
  //   }
  // }

  render(){
    const location ={
      lat:33.9866179,
      lng:-118.2168448
    }

      return (
        <div style={{width:'100vw',height:'100vh'}}>
          <Row>
            <Col s={10} offset='s1' style={{textAlign: 'center', fontSize:'45px', fontSize:'45px', color:'#BBB', fontWeight:'bold', marginTop:'80px', marginBottom:'50px'}}>
              Health is the foundation of our community.
              <br></br>Search for your nearest health center.
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
              <h3> We will search our database and find your nearest health center based on your zipcode.
            </h3>
            </Col>

            <Col s={12} m={1} style={{paddingTop:"100px", textAlign:'center'}}>
                <img src={"EQUAL.png"} style={{width:"100px", height:"100px"}}/>
            </Col>

            <Col s={12} m={3} style={{paddingRight:'40px', textAlign:'center'}}>
              <img src={"HealthCenters.png"} style={{width:"300px", height:"300px"}}/>
              <h3> This website is ran by the community for the community.
                Please review the clinics once you visit them to let others know about your experience.
              </h3>
              </Col>

              <Col s={12} m={1} style={{paddingTop:"100px", textAlign:'center'}}>
                  <img src={"EQUAL.png"} style={{width:"100px", height:"100px"}}/>
              </Col>

              <Col s={12} m={3} style={{paddingRight:'40px', textAlign:'center'}}>
                <img src={"HealthCenters.png"} style={{width:"300px", height:"300px"}}/>
                <h3> This website is ran by the community for the community.
                  Please review the clinics once you visit them to let others know about your experience.
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
