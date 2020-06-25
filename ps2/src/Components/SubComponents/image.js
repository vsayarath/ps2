import React from "react";

class image extends React.Component{

	constructor(props) {
	 super(props);
	
	this.state = {
	  data : {
		source: props.source
	 }

	}

	}
	render() {
	return (
	<div className="image">
	<img src={this.state.data.source} alt="image"/>
	</div>

	);
}

}
export default image;
