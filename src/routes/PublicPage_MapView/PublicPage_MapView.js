import React, {Component} from 'react';
import MapView from '../../components/MapView/MapView'
import { Section } from '../../components/Utils/Utils'
import ViewBox from '../../components/ViewBox/ViewBox'
import ApiService from '../../services/api'
import LogsContext from '../../contexts/LogsContext'
import { getPublicLogs } from '../../components/Utils/Utils'
import './PublicPage_MapView.css'

export default class PublicPage_MapView extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = LogsContext

  componentDidMount(){
    ApiService.getLogs()
      .then(this.context.setLogs)
      .catch(this.context.setError)
  }

  render(){
    const viewPath = this.props.match.path
    const {logs} = this.context
    const publicLogs = getPublicLogs(logs)
    return (
      <Section >
        <div className='viewTop'>
          <div className='viewBox'><ViewBox  viewPath={viewPath}/></div>
          <div className='pageDescription'><h1>Click on the pins to see beautiful places that people have visited!</h1></div>
        </div>
        {logs.length>0 && <MapView viewPath={viewPath} logs={publicLogs}/>}
      </Section>
    )
  }
}

