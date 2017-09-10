import React, {
  Component
} from 'react'
import Map from './Map'
import Homepage from './Homepage/Homepage'
import MapFilter from './MapFilter'



class Main extends Component {
  constructor() {
    super()
    this.state = {
      page: 'home',
      clinics: [
      {
        healthField: "Primary Care",
        lat: 34.079325,
        lng: -118.4370447,
        zipcode: 90210,
        status: 'Documented',
        languages: ["Spanish", "English", "Arabic"],
        ratings: 3.4,
        comment: "It was great!",
        name: "Los Angeles Health Center"
      },
      {
        healthField: "Primary Care",
        lat: 34.0651235,
        lng: -118.4161127,
        zipcode: 90210,
        status: 'Documented',
        languages: ["Spanish", "English", "Arabic"],
        ratings: 3.5,
        comment: "It was fine!",
        name: "Los Angeles Health Center"
      },
      {
        healthField: "Primary Care",
        lat: 34.0621016,
        lng: -118.3913506,
        zipcode: 90210,
        status: 'Documented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 3.6,
        comment: "Eh",
        name: "Los Angeles Health Clinic"
      },
      {
        healthField: "Primary Care",
        lat: 34.0703849,
        lng: -118.3670176,
        zipcode: 90210,
        status: 'Undocumented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 3.7,
        comment: "The physician was kind and understanding!",
        name: "Healthy California"
      },
      {
        healthField: "Primary Care",
        lat: 34.0791651,
        lng: -118.393153,
        zipcode: 90210,
        status: 'Undocumented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 3.8,
        comment: "The wait was long.",
        name: "Healthy L.A."
      },
      {
        healthField: "Primary Care",
        lat: 34.0791651,
        lng: -118.383153,
        zipcode: 90210,
        status: 'Undocumented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 3.9,
        comment: "Good! I felt safe.",
        name: "Phillips Graduate Institue Counseling Center"
      },
      {
        healthField: "Primary Care",
        lat: 34.0135333,
        lng: -118.2342806,
        zipcode: 90023,
        status: 'Documented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 4.0,
        comment: "Fine",
        name: "Planned Childhood"
      },
      {
        healthField: "Mental Health",
        lat: 34.0235333,
        lng: -118.2242806,
        zipcode: 90023,
        status: 'Documented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 4.1,
        comment: "Good",
        name: "Health Coporation"
      },
      {
        healthField: "Primary Care",
        lat: 34.0185333,
        lng: -118.2542806,
        zipcode: 90023,
        status: 'Documented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 4.2,
        comment: "Good",
        name: "L.A. Health Coporation"
      },
      {
        healthField: "Reproductive",
        lat: 34.0965883,
        lng: -118.3121293,
        zipcode: 90072,
        status: 'Documented',
        languages: ["Spanish", "English", "Korean"],
        ratings: 4.3,
        comment: "Good",
        name: "CA Health Coporation"
      },
      {
        healthField: "Primary Care",
        lat: 34.0995883,
        lng: -118.3141293,
        zipcode: 90072,
        status: 'Undocumented',
        languages: ["Spanish"],
        ratings: 4.4,
        comment: "I'm undocumented, and there wasn't any danger. Friendly staff",
        name: "Alta Family Health Clinic"
      },
      {
        healthField: "Dental",
        lat: 34.0969883,
        lng: -118.3121203,
        zipcode: 90072,
        status: 'Undocumented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 4.5,
        comment: "I'm undocumented, and there wasn't any danger. Nice staff",
        name: "Ingle Family Health Clinic"
      },
      {
        healthField: "Mental Health",
        lat: 34.1169883,
        lng: -118.3120203,
        zipcode: 90072,
        status: 'Undocumented',
        languages: ["Spanish", "English"],
        ratings: 4.6,
        comment: "I'm undocumented, and there wasn't any danger. Kind staff",
        name: "South Family Health Clinic"
      },
      ,
      {
        healthField: "Reproductive",
        lat: 34.0336902,
        lng: -118.2643032,
        zipcode: 90021,
        status: 'Documented',
        languages: ["Spanish", "English"],
        ratings: 4.7,
        comment: "Low cost and immigrant friendly",
        name: "Blank Medical"
      },
      {
        healthField: "Primary Care",
        lat: 34.0995483,
        lng: -118.2643132,
        zipcode: 90021,
        status: 'Undocumented',
        languages: ["English","Spanish"],
        ratings: 4.8,
        comment: "Safe and reliable staff and center.",
        name: "Wellness Center"
      },
      {
        healthField: "Dental",
        lat: 34.0969883,
        lng: -118.2643932,
        zipcode: 90021,
        status: 'Undocumented',
        languages: ["English"],
        ratings: 4.9,
        comment: "Cool people. Nice vibes.",
        name: "Kim Dental Group"
      },
      {
        healthField: "Mental Health",
        lat: 34.1169283,
        lng: -118.2643012,
        zipcode: 90021,
        status: 'Documented',
        languages: ["Spanish", "English", "Korean", "Arabic"],
        ratings: 4.5,
        comment: "Great experience. Good environment.",
        name: "Happiness Research Center"
      },
      {
        healthField: "Mental Health",
        lat: 33.8814376,
        lng: -118.2909509,
        zipcode: 90247,
        status: 'Undocumented',
        languages: ["English", "Spanish"],
        ratings: 4.3,
        comment: "Good. Didn't ask about citizenship. Only need to provide proof of income.",
        name: "South Bay Family Health Care"
      },
      {
        healthField: "Primary Care",
        lat: 33.8819376,
        lng: -118.2109509,
        zipcode: 90247,
        status: 'Documented',
        languages: ["English", "Spanish", "Korean"],
        ratings: 4.0,
        comment: "Nice people.",
        name: "East Bay Family Health Care"
      },
      {
        healthField: "Dental",
        lat: 33.8619376,
        lng: -118.2109509,
        zipcode: 90247,
        status: 'Undocumented',
        languages: ["English", "Spanish"],
        ratings: 2.0,
        comment: "Rude staff, made snarky comments about my accent.",
        name: "Smith Health Center"
      },
      {
        healthField: "Primary Care",
        lat: 33.8341128,
        lng: -118.3464711,
        zipcode: 90502,
        status: 'Documented',
        languages: ["English"],
        ratings: 4.0,
        comment: "Good.",
        name: "Primary Clinic"
      },
      {
        healthField: "Primary Care",
        lat: 33.8341128,
        lng: -118.3673537,
        zipcode: 90502,
        status: 'Documented',
        languages: ["English"],
        ratings: 3.0,
        comment: "Fine.",
        name: "Torrance Health Center"
      },
      {
        healthField: "Primary Care",
        lat: 34.0659573,
        lng: -118.2581611,
        zipcode: 90012,
        status: 'Undocumented',
        languages: ["English", "Korean"],
        ratings: 3.0,
        comment: "The staff didn't speak Korean very well, so it was difficult.",
        name: "Korean American Health Clinic"
      },
      {
        healthField: "Primary Care",
        lat: 34.0259573,
        lng: -118.2681611,
        zipcode: 90012,
        status: 'Undocumented',
        languages: ["English", "Spanish"],
        ratings: 3.4,
        comment: "There was a long wait.",
        name: "Chinatown Health Center"
      },
      {
        healthField: "Dental",
        lat: 34.0359573,
        lng: -118.2781611,
        zipcode: 90012,
        status: 'Documented',
        languages: ["English", "Arabic"],
        ratings: 4.2,
        comment: "Good service.",
        name: "Banks Wellness Center"
      },
      {
        healthField: "Dental",
        lat: 34.0459573,
        lng: -118.2881611,
        zipcode: 90012,
        status: 'Documented',
        languages: ["English"],
        ratings: 4.2,
        comment: "Good service.",
        name: "TS Wellness Center"
      }]
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
      language:'English',
      
    })
  }

  setPropertyChange(key,value){
    console.log(key,value)
    let stateObject= {}
    switch(key){
      case 'page':
        stateObject['page'] = value
        break;
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
    switch(this.state.page) {
      case 'mapfilter':
        return (
          <MapFilter markers={this.state.clinics} healthField={this.state.healthField} onPropertyChange={this.setPropertyChange} {...this.state}/>
        )
      case 'home':
        return ( <Homepage onSearchClick={this.handleSearchClick}/>
        )
      case 'map':
        return (
          <div style = {
            {
              width: '100vw',
              height: '100vh'
            }
          } >
          <Map center = {location} markers={this.state.clinics}/> </div>
        )
    }



  }
}

export default Main
