import React, { Component } from 'react'
import ViewLogBtn from '../ViewLogBtn/ViewLogBtn'
import './ListView.css'

export default class ListView extends Component{
  
  render(){
    const {log} = this.props
    console.log(log)
    return (
      <div className='logs'>
        {log.image && <img className='logImage' src={log.image} alt={log.title}/>}
        <h1>{log.title}</h1>
        <div className='Btn'>
          <ViewLogBtn id={log.id}/>
        </div>
        
      </div>
    )
  }
}