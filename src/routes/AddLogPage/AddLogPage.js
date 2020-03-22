import React, { Component } from 'react'
import AddLog from '../../components/AddLog/AddLog'

export default class AddLogPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {  
    return (
      <div className='logPage'>
        <AddLog />
        <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}