import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component{

  renderLogs(){
    return (
      <div>
          <Link className='home-nav'
            to='/'>
            Home
          </Link>
          <Link className='public-nav'
            to='/public/mapview'>
            Public Logs
          </Link>
          <Link className='my-nav'
            to='/mylogs/mapview'>
            My Logs
          </Link>
      </div>
    )
  }

  render(){
    
    return (
      <div className='header'>
        <div className='container'>
          <div className="loginNav">
            <div className="title">My Travels</div>
            {this.renderLogs()}
          </div>
        </div>
        <nav className='navBar'>
        </nav>
      </div>
    )
  }
}