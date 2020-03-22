import React, { Component } from 'react'
// import {Select} from 'antd'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import { Button, Textarea } from '../Utils/Utils'
import {DatePicker} from 'antd'
import './AddLog.css'

// const {Option} = Select

export default class AddLog extends Component {

  constructor(props){
    super(props)
      this.state = {visit_day: ''}
      this.onDateChange = this.onDateChange.bind(this)
  }
  
  static contextType = LogsContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { latitude, longitude, title, description, image, rating, publicc} = ev.target
    const lat = this.props.location ? this.props.location.latitude : latitude.value
    const lng = this.props.location ? this.props.location.longitude : longitude.value
    const visit_day = this.state.visit_day
    ApiService.postLog(lat, lng, title.value, description.value, image.value, rating.value, visit_day, publicc.value)
      .then(this.context.addLog)
      .catch(this.context.setError)
    this.props.location && this.props.onClose()
  }

  onDateChange = (val) => {
    const visit_day = val.toJSON().toString()
    this.setState({visit_day: visit_day})
  }

  render() {
    return (
      <form
        className='LogForm'
        onSubmit= {this.handleSubmit}
        
      >
        <div className='addLog'>
          <div className='addLatitude'>
            {!this.props.location && <Textarea
              required
              aria-label='Latitude...'
              name='latitude'
              id='latitude'
              cols='30'
              rows='2'
              placeholder='Latitude..'>
            </Textarea>}
          </div>
          <div className='addLongitude'>
            {!this.props.location && <Textarea
              required
              aria-label='longitude...'
              name='longitude'
              id='longitude'
              cols='30'
              rows='2'
              placeholder='longitude..'>
            </Textarea>}
          </div>
          <div className='addTitle'>
            <Textarea
              required
              aria-label='title...'
              name='title'
              id='title'
              cols='30'
              rows='2'
              placeholder='title..'>
            </Textarea>
          </div>
          <div className='addDescription'>
            <Textarea
              required
              aria-label='description...'
              name='description'
              id='description'
              cols='30'
              rows='2'
              placeholder='description..'>
            </Textarea>
          </div>
          <div className='addImage'>
            <Textarea
              
              aria-label='image...'
              name='image'
              id='image'
              cols='30'
              rows='2'
              placeholder='image..'>
            </Textarea>
          </div>
          <div className='addRating'>
            <Textarea
              required
              aria-label='rating...'
              name='rating'
              id='rating'
              cols='30'
              rows='2'
              placeholder='rating..'>
            </Textarea>
          <DatePicker onChange={this.onDateChange} name='visit_day'/>
          </div>
          <div className='PrivateBox'>
            <select id='publicc' name='publicc' required>            
              <option value='true'>Public</option>
              <option value='false'>Private</option>
              
            </select> 
          </div>
        </div>
        

        <Button type='submit' className='postLogBtn'>
          Add Log
        </Button>
      </form>
    )
  }
}
