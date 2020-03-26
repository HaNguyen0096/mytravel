import React, {Component} from 'react'
import {Section} from '../../components/Utils/Utils'
import './LandingPage.css'



export default class LandingPage extends Component{

  render(){
    return (
      <div className='landingImage'>
      <Section>
        <div className='landingPage'>
          <div className='welcomeText'>Welcome to My Travels</div>
          <hr className='hrLine'></hr>
          <p className='landingPage-Script'>Let's create your own Travels 
          Logs and explore amazing places around the world!</p>
        </div>
      </Section>      
      </div>
    )
  }
}