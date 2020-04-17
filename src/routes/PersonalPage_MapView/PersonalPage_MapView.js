import React, {Component} from 'react';
import MapView from '../../components/MapView/MapView'
import { Section } from '../../components/Utils/Utils'
import ViewBox from '../../components/ViewBox/ViewBox'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import './PersonalPage_MapView.css'

export default class PersonalPage_MapView extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = LogsContext

  componentDidMount(){
    ApiService.getLogsForUser()
      .then(this.context.setLogs)
      .catch(this.context.setError)
  }

  render(){
    const viewPath = this.props.match.path
    const {logs} = this.context
    return (
      <Section>
        <div className='viewTop'>
          <div className='viewBox'><ViewBox viewPath={viewPath}/></div>
          {
            logs.length>0  
          ? <div className='pageDescription'><h1>Double click on the map to add a log</h1></div>
          : <div className='pageDescription'><h1>Please go to list view page and add a new log!</h1></div>
          }
        </div>
        {logs.length>0 && <MapView viewPath={viewPath} logs={logs}/>}
        
      </Section>
    )
  }
}

