import React, {Component} from 'react'
import  '../index.css'
import Carousel from 'nuka-carousel'
import {connect} from 'react-redux'
import Footer from './footer'
import Header from './header'


class App extends Component{

render(){
	return (
    <div id="appContainer">
    <Header />
		<div className="interiorDiv">
		<Carousel>
        <img src={require("../../images/sk8r2.png")} alt="#"/>
        <img src={require("../../images/surfpaddle.png")} alt="#"/>
        <img src={require("../../images/profilejpg.jpg")} alt="#"/>
      </Carousel>
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