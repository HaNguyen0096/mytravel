import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component{

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    window.location.reload()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        {console.log('logged in')}
        <Link className='logout-nav'
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
        {console.log('not in')}
        <Link className='login-nav'
          to='/login'>
          Log in
        </Link>
        <Link className='register-nav' 
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  renderLogs(){
    return (
      <nav className='myNav'>
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
      </nav>
    )
  }

  render(){
    return (
      <div className='header'>
        <div className='title'>My Travels</div>
        <div className='container'>
          <div className='logStatus'>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
          <div className='navbar'>
            {this.renderLogs()}
          </div>
        </div>
      </div>
    )
  }
}