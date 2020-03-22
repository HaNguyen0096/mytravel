import React, { Component } from 'react'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
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
        <h1>{log && log.title}</h1>
        <p>{log && log.description}</p>
        <p> {log && log.visited_day}</p>
        {log && log.image && <img className='logPage-image' src={log.image} alt='log.title'/>}
        <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}