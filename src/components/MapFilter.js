import React, {Component} from 'react'
import {Navbar, NavItem, Icon, Row, Col, Button, Input} from 'react-materialize'
import Map from './Map'

var teal = "#4AB4CB";
var red = "#EF4423";
var lightG = '#CCC';
var darkG = '#424242';

class MapFilter extends Component {
  constructor(){
    super()
    }

  render(){
    const location ={
      lat:33.9866179,
      lng:-118.2168448
    }

      return (
        <div style={{width:'100vw',height:'100vh', padding:'0px'}}>
            <Row>
              <Col m={12} l={9} style={{}}>
                <div style={{width:'72vw',height:'600px', left:'0px'}}>
                  <Map center={location}/>
                </div>
              </Col>
            <div style={{width:'20vh',height:'90px', display:'inline'}}>
              <Row>
                <Col m={12} l={3}>
                  <p></p>
                  <form action="" method="">
                    <Input s={12} type='select' label="Health Field" defaultValue='Primary Care' onChange={(e)=>{
                      this.props.onPropertyChange("healthField", e.target.value)
                    }}>
                  		<option value='Primary Care'>Primary Care</option>
                      <option value='Mental Health'>Mental Health</option>
                  		<option value='Dental'>Dental</option>
                  		<option value='Reproductive'>Reproductive</option>
                  	</Input>
                    <Input s={12} type='select' label="State" defaultValue='National' onChange={(e)=>{
                      this.props.onPropertyChange("state", e.target.value)
                    }}>
                      <option value='National'>National</option>
                      <option value='AZ'>AZ</option>
                      <option value='CA'>CA</option>
                    </Input>
                    <Input s={12} type="select" onChange={(e)=>{
                      this.props.onPropertyChange("status", e.target.value)
                    }}>
                      <option value='Documented'>Documented</option>
                      <option value='Undocumented'>Undocumented</option>

                    </Input>
                    <Input s={12} type='text' label="Zipcode" onChange={(e)=>{
                      this.props.onPropertyChange("zipcode", e.target.value)
                    }}/>
                    <Input s={12} type='text' label="Distance" onChange={(e)=>{
                      this.props.onPropertyChange("distance", e.target.value)
                    }}/>
                    <Input s={12} type='select' label="Language" defaultValue='Language' onChange={(e)=>{
                      this.props.onPropertyChange("language", e.target.value)
                    }}>
                      <option value='English'>English</option>
                      <option value='Spanish'>Spanish</option>
                      <option value='Korean'>Korean</option>
                      <option value='Arabic'>Arabic</option>
                    </Input>

                  {/* <div style={{textAlign:'center'}}>
                  <Button>Search</Button>
                </div> */}
                  </form>
                </Col>
              </Row>
            </div>
          </Row>

          <Row>
            {/* <Col s={12} style={{backgroundColor: red, width:'100vw', height:'100px', textAlign:'center', marginTop:'30px'}}>
                <div style={{paddingTop:'35px'}}>
                  <a href="#" style={{paddingRight:'10px'}}><img src="facebook.png" style={{width:"40px", height:"40px"}}/></a>
                  <a href="#" style={{paddingRight:'10px'}}><img src="instagram.png" style={{width:"40px", height:"40px"}}/></a>
                  <a href="#"><img src="twitter.png" style={{width:"40px", height:"40px"}}/></a>
                </div>
            </Col> */}
            {/* <Col s={12} style={{backgroundColor: darkG, width:'100vw', height:'100px', color:'#FFF', textAlign:'center'}}>
              <br></br>
              <div className="font">ABOUT</div>
              <div className="font">COMMUNITY PARTNERS</div>
              <div className="font">CONTACT</div>
            </Col> */}
          </Row>
          <Button onClick={()=>{this.props.onPropertyChange('page','review')}}>Change to Reviews</Button>
        </div>
      )

  }
}

export default MapFilter
