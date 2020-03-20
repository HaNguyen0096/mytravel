import React, {Component} from 'react';
import MapView from '../../components/MapView/MapView'
import { Section } from '../../components/Utils/Utils'
import ViewBox from '../../components/ViewBox/ViewBox'
import ApiService from '../../services/api'
import LogsContext from '../../contexts/LogsContext'

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
    return (
      <Section>
        <ViewBox viewPath={viewPath}/>
        <MapView logs={logs}/>
      </Section>
    )
  }
}

