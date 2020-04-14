import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component{

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

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
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    )
  }

  render(){
    
    return (
      <div className='header'>
        <div className='container'>
          <div className='loginNav'>
            <div className='title'>My Travels</div>
            {this.renderLogs()}
          </div>
        </div>
        <nav className='navBar'>
        </nav>
      </div>
    )
  }
}