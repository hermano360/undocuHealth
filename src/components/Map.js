import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker,InfoWindow } from 'react-google-maps'
import superagent from 'superagent'

class Map extends Component {
  constructor(){
    super()
    this.state = {
      incidents:[],
    }

  }

  render(){
    console.log('test')
    const mapContainer = <div style={{height: '100%', width:'100%'}}></div>
    let that=this;

    return (
      <div style={{height:"100%", width:'100%'}}>
      <GoogleMapLoader
        containerElement = {mapContainer}
        googleMapElement = {
          <GoogleMap
          defaultZoom={10}
          defaultCenter={this.props.center}
          options={{
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DEFAULT,
            position: google.maps.ControlPosition.LEFT_BOTTOM
          }}}
          >
          </GoogleMap>
        } />
        </div>
    )
  }
}

export default Map
