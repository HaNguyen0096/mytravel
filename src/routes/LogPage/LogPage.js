import React, { Component } from 'react'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import  moment  from 'moment-timezone'
import './LogPage.css'

export default class LogPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = LogsContext

  componentDidMount() {
      const {id} = this.props.match.params
      this.context.clearError()
      ApiService.getLog(id)
        .then(this.context.setLog)
        .catch(this.context.setError)
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const {log} = this.context
    
    return (
      <div className='logPage'>
        <div className='logDescription'>
          <h1>{log && log.title}</h1>
          <p>{log && log.description}</p>
          {log && <p>Visited on: {moment(log.visited_day).tz('America/New_York').format('MMMM Do YYYY')}</p>}
          {log && <p>Rating: {log.rating}</p>}
          {log && <p>By: {log.full_name}</p>}
          {log && log.image && <img className='logPage-image' src={log.image} alt={log.title}/>}
        </div>
        <button className='backBtn' onClick={this.goBack}>Back</button>
      </div>
    );
  }
}
                