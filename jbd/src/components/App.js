import React, {Component} from 'react'
import  '../index.css'

import {connect} from 'react-redux'
import Footer from './footer'
import Header from './header'


class App extends Component{

render(){
	return (
    <div id="appContainer">
    <Header />
		<div className="interiorDiv">
		
        <img src={require("../../images/profilejpg.jpg")} alt="#"/>
     
    <Footer />
   </div>
   </div>
    )
  }
}


const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(App)