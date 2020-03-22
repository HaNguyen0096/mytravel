import {Select} from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ViewBox.css'


const {Option} = Select
export default class ViewBox extends Component {
  publicOption() {
    return (
      <div className='viewBox'>
        <Select defaultValue='MapView' 
        style={{ width: 120 }} 
        onChange={this.handleChange}
      >
        <Option value='mapview'><Link to='/public/mapview'>MapView</Link></Option>
        <Option value='listview'><Link to='/public/listview'>ListView</Link></Option>
      
      </Select> 
      </div>
    )
  } 

  personalOption() {
    return (
      <div className='viewBox'>
        <Select defaultValue='MapView' 
        style={{ width: 120 }} 
        onChange={this.handleChange}
      >
        <Option value='mapview'><Link to='/mylogs/mapview'>MapView</Link></Option>
        <Option value='listview'><Link to='/mylogs/listview'>ListView</Link></Option>
      
      </Select> 
      </div>
    )
  }

  handleChange(value) {
  }

  render(){
    const checkPath=this.props.viewPath.substring(1,7)
    return (
      <div className='view'>
        {
          (checkPath===`public`)
            ? this.publicOption()
            : this.personalOption()
        }
      </div>    
    )
  }
}
