import React, {Component} from 'react'
import  '../index.css'
import {connect} from 'react-redux'
import {postForm} from '../api/jbDesigns'


class Footer extends Component{
	constructor(props){
		super(props)

		this.state ={
				firstname:'',
				lastname:'',
			}


		}

	


	handleSubmit(e){
		e.preventDefault()
		postForm(this.state.firstname)
		this.setState ={
			firstname: '',
			lastname:''
		}
	}

	handleChange = (e) => {
  		this.setState({
    	[e.target.name]:e.target.value,
  })
}

	render(){
		return(
		<div>	
		  <form onSubmit={this.handleSubmit}>
		   <h2>Contact Me</h2>
		    <label htmlFor="firstname">First Name</label>
		    <input type="text" id="firstname"  onChange={this.handleChange}placeholder="First Name" value={this.state.firstname}/>
		    <label htmlFor="lastname">Last Name</label>
		    <input type="text" id="lastname" onChange={this.handleChange} placeholder="Last Name"value={this.state.lastname}/>
		    <label htmlFor="emailaddy">Email Address</label>
		    <input type="Email" id="emailaddy" onChange={this.handleChange} placeholder="Email Address"/>
		    <label htmlFor="comment">Comments</label>
		    <input type="textarea" id="comment" onChange={this.handleChange}placeholder="Comments Section"/>
		    <button type="submit" id="subButton">Submit</button>
		  </form>
		  <div className="social">    
		    <span className="fa-2x">
		      <a href="https://www.facebook.com/jitterydesigns/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
		      <a href="https://github.com/jacotri77"><i className="fa fa-github" aria-hidden="true"></i></a>
		      <a href="https://www.linkedin.com/in/erik-jacobsen-a027bb27/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
		    </span>
		    </div>
		   </div> 

		)
	}
}

const mapStateToProps = function(appState) {
  return {
    form: appState.form,
    firstname:appState.firstname,
    lastname:appState.lastname
  }
}

export default connect(mapStateToProps)(Footer)
