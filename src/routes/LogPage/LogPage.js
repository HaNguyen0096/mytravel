import React, { Component } from 'react'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import {Section} from '../../components/Utils/Utils'



export default class LogPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = LogsContext

   componentDidMount() {
      const {id} = this.props.match.params
      console.log(id)
      this.context.clearError()
    ApiService.getLog(id)
        .then(this.context.setLog)
        .catch(this.context.setError)
   }

  render() {
    const {log} = this.context
    console.log(log)
    return (
      <div className='logPage'>
        {log && log.title}
        {log && log.description}
        {log && log.visited_day}
      </div>
    );
  }
}