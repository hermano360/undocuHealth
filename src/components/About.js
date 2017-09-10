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
      <Navbar brand="OUR AMAZING NAME" left style={{backgroundColor:'#4AB4CB'}}>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>

<h4>
  Our Amazing Name was created by the community for the community.
</h4>

<h5>
  Regardless of your immigration status and or language spoken at home,
  we will find a health center close to you. We will search our database and
  find your nearest health center based on your zip code.
</h5>
