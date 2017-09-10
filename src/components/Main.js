import React, {Component} from 'react'
import Map from './Map'
import Homepage from './Homepage/Homepage'
import MapFilter from './MapFilter'
import Review from './Review'
import {Navbar, NavItem, Icon, Row, Col, Button, Input} from 'react-materialize'
import About from './About'
import Partners from './Partners'

var teal = "#4AB4CB";
var red = "#EF4423";
var lightG = '#CCC';
var darkG = '#424242';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home'
    }
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.setPropertyChange = this.setPropertyChange.bind(this)
  }
  handleSearchClick() {
    this.setState({
      page:'mapfilter',
      healthField:'Primary Care',
      state:'National',
      zipcode:'',
      status:'Documented',
      distance: '5',
      language:'English'
    })
  }

  setPropertyChange(key,value){
    console.log(key,value)
    let stateObject= {}
    switch(key){
      case 'page':
        stateObject['page'] = value
        break
      case 'healthField':
        stateObject['healthField'] = value
        break
      case 'state':
        stateObject['state'] = value
        break
      case 'zipcode':
        stateObject['zipcode'] = value
        break
      case 'status':
        stateObject['status'] = value
        break
      case 'distance':
        stateObject['distance'] = value
        break
      case 'language':
        stateObject['language'] = value
        break
      default:
        console.log('state attribute not recognized')
    }
    this.setState(stateObject)
  }

  render() {
    const location = {
      lat: 33.9866179,
      lng: -118.2168448
    }
    let contentChoice = () => {
      switch(this.state.page) {
        case 'mapfilter':
          return (
            <MapFilter healthField={this.state.healthField} onPropertyChange={this.setPropertyChange}/>
          )
        case 'home':
          return ( <Homepage onSearchClick={this.handleSearchClick}/>
          )
        case 'review':
          return ( <Review/>
          )

        case 'about':
          return ( <About/>
          )
          case 'partners':
            return ( <Partners/>
            )
        case 'map':
          return (
            <div style = {
              {
                width: '100vw',
                height: '100vh'
              }
            } >
            <Map center = {
              location
            }/> </div>
          )
      }
    }
      return (
        <div>
          <Navbar brand='HEALTHYMENTED' right style={{backgroundColor:teal, paddingLeft:'15px'}}>
            <NavItem onClick={()=> this.setPropertyChange('page', 'home')}>HOME</NavItem>
            <NavItem onClick={()=> this.setPropertyChange('page', 'mapfilter')}>SEARCH</NavItem>
            <NavItem onClick={()=> this.setPropertyChange('page', 'about')}>ABOUT</NavItem>
            <NavItem onClick={()=> this.setPropertyChange('page', 'review')}>REVIEWS</NavItem>
            <NavItem onClick={()=> this.setPropertyChange('page', 'partners')}>PARTNERS</NavItem>
          </Navbar>
          {contentChoice()}
        </div>
      )






  }
}

export default Main
