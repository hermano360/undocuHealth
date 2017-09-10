import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button} from 'react-materialize'

import Map from './Map'

var teal = "#4AB4CB";
var red = "#EF4423";
var lightG = '#CCC';
var darkG = '#424242';


class About extends Component {
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
            <Col>
              <h4>
                ABOUT US

              </h4>
            <h5>
              "HEALTHYMENTED was created by the community for the community."
            </h5>


            <h6>
              Healthymented is an organization committed to bridging the gap between uninsured individals and
              health services, regardless of immigration status, income, or primary language. We strive to make
              health easily accessible in order to ensure each individuals capability to thrive in society.
            </h6>

            <h6 style={{marginTop: '30px'}}>
              We developed this website and envisioned it to be self-sustainable. In order to ensure that, we
              encourage you to access our reviews section for your health facility to inform the public about your
              unique experience.
            </h6>
          </Col>
          </Row>

        </div>

      )

  }
}

export default About
