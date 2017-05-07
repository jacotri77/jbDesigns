import React, {Component} from 'react'
import  '../index.css'
import {connect} from 'react-redux'
import {postForm} from '../api/jbDesigns'


class Footer extends Component{
	constructor(props){
		super(props)
		this.state ={
			firstName:'',
			lastName:'',
			emailAddress:'',
			comments:''

		}
}
	


	handleSubmit = (e) =>{
		e.preventDefault()
		postForm(this.state.form, this.state.firstName, this.state.lastName, this.state.emailAddress, this.state.comments)
		this.setState({
				firstName:'',
				lastName:'',
				emailAddress:'',
				comments:''
		
		})
	}

	handleChange = (e) => {
  		this.setState({
    	[e.target.name]:e.target.value
  })
}

	render(){
		return(
		<div>	
		  <form onSubmit={this.handleSubmit}>
		   <h2>Contact Me</h2>
		    <label htmlFor="firstname">First Name</label>
		    <input type="text" id="firstname"  name="firstName" onChange={this.handleChange}placeholder="First Name" value={this.props.firstName}/>
		    <label htmlFor="lastname">Last Name</label>
		    <input type="text" id="lastname" name="lastName" onChange={this.handleChange} placeholder="Last Name"value={this.props.lastName}/>
		    <label htmlFor="emailaddy">Email Address</label>
		    <input type="Email" id="emailaddy" name="emailAddress" onChange={this.handleChange} placeholder="Email Address" value={this.props.emailAddress}/>
		    <label htmlFor="comment">Comments</label>
		    <input type="textarea" id="comment" name="comments" onChange={this.handleChange}placeholder="Comments Section"value={this.props.comments}/>
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
    firstName:appState.firstName,
    lastName:appState.lastName,
    emailAddress:appState.emailAddress,
    comments: appState.comments
  }
}

export default connect(mapStateToProps)(Footer)
