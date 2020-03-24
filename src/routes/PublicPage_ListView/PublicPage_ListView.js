import React, {Component} from 'react';
import ListView from '../../components/ListView/ListView'
import { Section } from '../../components/Utils/Utils'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import ViewBox from '../../components/ViewBox/ViewBox'
import { getPublicLogs } from '../../components/Utils/Utils'
import './PublicPage_ListView.css'

export default class PublicPage_ListView extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  static contextType = LogsContext


  componentDidMount(){
    ApiService.getLogs()
      .then(this.context.setLogs)
      .catch(this.context.setError)
  }

  renderLogList(){
    const {logs} = this.context 
    const publicLogs = getPublicLogs(logs)
    return publicLogs.map(log =>
      <ListView 
        key = {log.id}
        log = {log}
      />
      )
  }

  render() {
    const viewPath = this.props.match.path
    return (
      <Section >
        <div className='viewTop'>
          <div className='viewBox'><ViewBox  viewPath={viewPath}/></div>
          <div className='pageDescription'><h1>Explore beautiful places that people have visited!</h1></div>
        </div>
        
        {this.renderLogList()}
      </Section>
    )
  }
}

