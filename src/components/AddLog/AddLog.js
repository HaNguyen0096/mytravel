import React, { Component, useState } from 'react'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import { Button, Textarea } from '../Utils/Utils'
import {DatePicker} from 'antd'
import './AddLog.css'

export default class AddLog extends Component {
  
  static contextType = LogsContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { latitude, longitude, title, description, image, rating } = ev.target

    ApiService.postLog(latitude.value, longitude.value, title.value, description.value, image.value, rating.value)
      .then(this.context.addLog)
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='LogForm'
        onSubmit= {this.handleSubmit}
      >
        <div className='addLog'>
          <div className='addLatitude'>
          <Textarea
            required
            aria-label='Latitude...'
            name='latitude'
            id='latitude'
            cols='30'
            rows='2'
            placeholder='Latitude..'>
          </Textarea>
          </div>
          <div className='addLongitude'>
          <Textarea
            required
            aria-label='longitude...'
            name='longitude'
            id='longitude'
            cols='30'
            rows='2'
            placeholder='longitude..'>
          </Textarea>
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
            required
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
          <DatePicker />
          </div>
        </div>

        <Button type='submit' className='postLogBtn'>
          Add Log
        </Button>
      </form>
    )
  }
}
