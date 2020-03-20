import React, { Component } from 'react'
import ViewLogBtn from '../ViewLogBtn/ViewLogBtn'
import './ListView.css'

export default class ListView extends Component{
  render(){
    const {log} = this.props
    return (
      <div className='logs'>
        <img className="logImage" src={log.image} alt={log.title}/>
        <hr />
        {log.latitude}
        <hr />
        <ViewLogBtn id={log.id}/>
      </div>
    )
  }
}