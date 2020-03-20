import { Button } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ViewLogBtn extends Component {
  render(){
    const {id} = this.props
    const path = `/logs/${id}`
    
    return (
      <div>
        <Button type='primary'><Link to={path}>View More</Link></Button>
      </div>
    )
  }
}