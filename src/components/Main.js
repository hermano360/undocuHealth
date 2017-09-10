import React, {Component} from 'react'
import Map from './Map'
import Homepage from './Homepage/Homepage'
import MapFilter from './MapFilter'


class Main extends Component {
  constructor(){
    super()
    this.state = {
      page:'mapfilter'
    }
    }

  render(){
    const location ={
      lat:33.9866179,
      lng:-118.2168448
    }
    switch(this.state.page) {
      case 'mapfilter':
        return (
          <MapFilter/>
        )
      case 'home':
        return (
          <Homepage />
        )
      case 'map':
      return (
        <div style={{width:'100vw',height:'100vh'}}>
          <Map center={location} />
        </div>
      )
    }



  }
}

export default Main
