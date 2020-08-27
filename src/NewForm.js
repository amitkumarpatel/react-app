import React, {Component} from 'react'

class NewForm extends Component{

  constructor(props) {
      super(props);
      
      this.initialState = {
          name: '',
          job: ''
      };

      this.state = this.initialState;
  }

  // handleChange(event){
  // 	const {name, value} = event.target
  // 	this.setState({ [name]: value })
  // }

	handleChange = (event) => {
	  const {name, value} = event.target

	  this.setState({
	    [name]: value,
	  })
	}

	submitForm = (event) => {
    event.preventDefault();

		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}

  render(){
		  const { name, job } = this.state;
  	return(
  		<div>
	  		<h1> Add New </h1>
			  <div className="form-group">
          <form onSubmit={this.submitForm}>
			  		Username:
			  		<input className="form-control" type="text" name="name"  value={name} onChange={this.handleChange}/><br/>
			  		job:
			  		<input className="form-control" type="text" name="job"  value={job}  onChange={this.handleChange}/><br/>
			  		<input className="btn btn-primary" type="submit" />
		  		</form>
		  	</div>	
	  	</div>	
  	)
  };
}
export default NewForm;
