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
    ApiService.getLogs()
      .then(this.context.setLogs)
      .catch(this.context.setError)
  }

  render(){
    const viewPath = this.props.match.path
    const {logs} = this.context
    return (
      <Section>
        <ViewBox viewPath={viewPath}/>
        <h1 className='personal-mapview-description'>Double click on the pins to add a log</h1>
        {logs.length>0 && <MapView viewPath={viewPath} logs={logs}/>}
      </Section>
    )
  }
}

