import React, {Component} from 'react'

const LogsContext = React.createContext({
  log: null,
  logs: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLog: () => {},
  setLogs: () => {},
  clearLog: () => {},
  addLog: () => {},
})

export default LogsContext

export class LogsProvider extends Component {

  state = {
    log: null,
    logs: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setLog = log => {
    this.setState({ log })
  }

  setLogs = logs => {
    this.setState({ logs })
  }

  clearLog = () => {
    this.setLog(null)
  }

  addLog = log => {
    this.setLogs([
      ...this.state.logs,
      log
    ])
  }

  render(){
    const value = {
      log: this.state.log,
      logs: this.state.logs,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLog: this.setLog,
      setLogs: this.setLogs,
      clearLog: this.clearLog,
      addLog: this.addLog,
    }
    return (
      <LogsContext.Provider value={value}>
        {this.props.children}
      </LogsContext.Provider>
    )
  }
}