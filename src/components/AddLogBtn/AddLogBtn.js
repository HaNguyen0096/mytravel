import { Button } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddLogBtn extends Component {
  render(){
    const path = `/addlog`
    
    return (
      <div>
        <Button type='primary'><Link to={path}>Add New Log</Link></Button>
      </div>
    )
  }
}