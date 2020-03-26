import React, { Component } from 'react'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import ValidationError from '../ValidationError/ValidationError'
import { Button, Textarea } from '../Utils/Utils'
import {DatePicker} from 'antd'
import { Link } from 'react-router-dom'
import './AddLog.css'


export default class AddLog extends Component {

  constructor(props){
    super(props)
      this.state = {
        visit_day: '',
        latitude: '',
        longitude: '',
        title: '',
        description: '',
        image: '',
        rating: ''
      }
      this.onDateChange = this.onDateChange.bind(this)
  }

  updateLatitude(latitude){
    this.setState({latitude: latitude})
  }

  updateLongitude(longitude){
    this.setState({longitude: longitude})
  }

  updateTitle(title){
    this.setState({title: title})
  }

  updateDescription(description){
    this.setState({description: description})
  }

  updateImage(image){
    this.setState({image: image})
  }

  updateRating(rating){
    this.setState({rating: rating})
  }
  
  static contextType = LogsContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { latitude, longitude, title, description, image, rating} = this.state
    const {setPrivate} = ev.target
    const lat = this.props.location ? this.props.location.latitude : latitude
    const lng = this.props.location ? this.props.location.longitude : longitude
    const visit_day = this.state.visit_day
    ApiService.postLog(lat, lng, title, description, image, rating, visit_day, setPrivate.value)
      .then(this.context.addLog)
      .catch(this.context.setError)
    this.props.location && this.props.onClose()
  }

  onDateChange = (val) => {
    const visit_day = val.toJSON().toString()
    this.setState({visit_day: visit_day})
  }

  validateLatitude(){
    const lat = this.state.latitude
    if (isNaN(lat) === true){
      return 'Please Enter A Number Between -90 and 90!'
    }
    else if (lat > 90 || lat < -90){
      return 'Invalid Latitude'
    }
  }

  validateLongitude(){
    const lng = this.state.longitude
    if (isNaN(lng) === true){
      return 'Please Enter A Number Between -90 and 90!'
    }
    else if (lng > 90 || lng < -90){
      return 'Invalid Longitude'
    }
  }

  validateRating(){
    const rating = this.state.rating
    if (isNaN(rating) === true){
      return 'Please Enter A Number Between 1 And 10!'
    }
    else if (rating > 10 || rating < 0){
      return 'Invalid Rating'
    }
  }

  validateVisitedDay(){
    const visited_day = this.state.visit_day
    if (!visited_day&&this.state.rating){
      return 'Please Pick a Date'
    }
  }

  render() {
    const latitudeError = this.validateLatitude()
    const longitudeError = this.validateLongitude()
    const ratingError = this.validateRating()
    const visitDayError = this.validateVisitedDay()
    return (
      <form
        className='logForm'
        onSubmit= {this.handleSubmit}        
      >
        <div className='addLog'>
        {!this.props.location &&<div className='addCoordinate'>
            <label htmlFor='coordinate'>Enter the latitude and longitude of the location (number between -90 and 90):</label>
            <div className='addLatitude'>
              <Textarea
                required
                type='number'
                step='0.0000000001'
                aria-label='Latitude...'
                name='latitude'
                id='latitude'
                cols='30'
                rows='2'
                placeholder='insert latitude..'
                onChange={e => this.updateLatitude(e.target.value)}>
              </Textarea>
              <ValidationError message={latitudeError}/>
            </div>
            <div className='addLongitude'>
              <Textarea
                required
                type='number'
                step='0.0000000001'
                aria-label='longitude...'
                name='longitude'
                id='longitude'
                cols='30'
                rows='2'
                placeholder='insert longitude..'
                onChange={e => this.updateLongitude(e.target.value)}>
              </Textarea>
              <ValidationError message={longitudeError}/>
            </div>
          </div>}
          <div className='addTitle'>
            <label htmlFor='title'>Title:</label>
            <Textarea
              required
              aria-label='title...'
              name='title'
              id='title'
              cols='30'
              rows='2'
              placeholder='insert title..'
              onChange={e => this.updateTitle(e.target.value)}>
            </Textarea>
          </div>
          <div className='addDescription'>
            <label htmlFor='description'>Description:</label>
            <Textarea
              required
              aria-label='description...'
              name='description'
              id='description'
              cols='30'
              rows='2'
              placeholder='insert description..'
              onChange={e => this.updateDescription(e.target.value)}>
            </Textarea>
          </div>
          <div className='addImage'>
            <label htmlFor='image'>Image (Please insert a link to your image):</label>
            <Textarea             
              aria-label='image...'
              name='image'
              id='image'
              cols='30'
              rows='2'
              placeholder='insert image..'
              onChange={e => this.updateImage(e.target.value)}>
            </Textarea>
          </div>
          <div className='addRating'>
            <label htmlFor='rating'>Rating (Enter a number between 1 and 10):</label>
            <Textarea
              required
              type='number'
              aria-label='rating...'
              name='rating'
              id='rating'
              cols='30'
              rows='2'
              placeholder='insert rating..'
              onChange={e => this.updateRating(e.target.value)}>
            </Textarea>
            <ValidationError message={ratingError}/>
          </div>
          <div className='addDate'>
            <label htmlFor='visitDate'>Visited Date:</label>
            <DatePicker required={true} className='visitDate' onChange={this.onDateChange} name='visit_day'/>
            <ValidationError message={visitDayError}/>
          </div>
          <div className='privateBox'>
            <label htmlFor='setPrivate'>Set Private:</label>
            <select className='setBox' id='setPrivate' name='setPrivate' 
              required>            
              <option value='true'>Public</option>
              <option value='false'>Private</option>             
            </select> 
          </div>
        </div>
        <Button 
          type='submit' 
          className='postLogBtn'
          disabled={
            this.validateLatitude() ||
            this.validateLongitude() ||
            this.validateRating() ||
            this.validateVisitedDay()
          }
        >
          Add Log
        </Button>
      </form>
    )
  }
}
