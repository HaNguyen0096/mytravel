import React, {Component} from 'react';
import ListView from '../../components/ListView/ListView'
import { Section } from '../../components/Utils/Utils'
import LogsContext from '../../contexts/LogsContext'
import ApiService from '../../services/api'
import ViewBox from '../../components/ViewBox/ViewBox'
import { getPublicLogs } from '../../components/Utils/Utils'

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
      <Section>
        <ViewBox viewPath={viewPath}/>
        {this.renderLogList()}
      </Section>
    )
  }
}
