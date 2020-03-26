import {Select} from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ViewBox.css'


const {Option} = Select
export default class ViewBox extends Component {
  publicOption() {
    return (
      <div className='viewBox'>
        <Select defaultValue='Select View' 
        style={{ width: 120 }} 
        onChange={this.handleChange}
      >
        <Option className='box' value='mapview'><Link className='textBox' to='/public/mapview'>Map View</Link></Option>
        <Option className='box' value='listview'><Link className='textBox' to='/public/listview'>List View</Link></Option>
      
      </Select> 
      </div>
    )
  } 

  personalOption() {
    return (
      <div className='viewBox'>
        <Select defaultValue='Select View' 
        style={{ width: 520 }} 
        onChange={this.handleChange}     
      >
        <Option className='box' value='mapview'><Link className='textBox' to='/mylogs/mapview'>Map View</Link></Option>
        <Option className='box' value='listview'><Link className='textBox' to='/mylogs/listview'>List View</Link></Option>      
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
