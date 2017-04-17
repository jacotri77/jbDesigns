import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default React.createClass({
  render() {
    return (
    <MuiThemeProvider>
      <h1>Hello world</h1>
    </MuiThemeProvider>
    )
  }
})