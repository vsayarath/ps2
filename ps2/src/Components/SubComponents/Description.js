import React from "react"


class Description extends React.Component{

	constructor(props) {
	  super(props);
	  
	  this.state = {

		data : {
		  name: props.name,
		  date: props.date,
		  description: props.description 
		},
	 	copy : {
		name: props.name,
		date: props.date,
		description: props.description
		},
		hide : {
		name: " ",
		date : " ",
		description: " " 
	}
}
	}


	handleChange = () => {
	 this.setState({
	   data: {
		name: "Mackey",
		description: "Super Smash Bros Champion",
		date: "2012"
	  },

	});
 	console.log("Second state" + " " +this.state.data.name)


}

	revert = () => {
		this.setState({
		data : {...this.state.copy} 
	})
}

	hide = () => {
		this.setState({
		data : {...this.state.hide}
	})
}
	render(){
	return(
	<div>
	  <button onClick={this.handleChange}>Mackey Button</button>
	  <button onClick={this.revert}>Revert</button>
	 	  
	<div className="content">
	 <a className="header">{this.state.data.name}</a>
	 <div className="meta">
	   <span className="data"> {this.state.data.date}</span>
	 </div>
	 <div className="description">
           {this.state.data.description}
	  </div>
	  </div>
	 </div>
	)	

}

};



export default Description
