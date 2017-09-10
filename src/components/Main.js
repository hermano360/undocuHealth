import React, {Component} from 'react'
import Map from './Map'


class Main extends Component {
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
          <Map center={location} />
        </div>
      )

  }
}

export default Main
