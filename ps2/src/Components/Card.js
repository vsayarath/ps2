import React from "react"
import faker from "faker"

import Image from "./SubComponents/image"
import  Description from "./SubComponents/Description";

class Card extends React.Component{
	constructor() {
	  super();
	  this.state = {
	    data: {
		name : faker.name.findName(),
		description : faker.lorem.sentence(),
		source  :faker.image.image()
	   },
	    hide: {
		hide : false,
	}
	}  
	  this.Card = this.Card.bind(this)
	}

	Card() {
	 const {hide} = this.state
	   this.setState( {

		hide: !hide,

	});


	}

	render () {
	const {hide} = this.state;
	var {title} = this.props;

	if(hide){
	    title = "Hide Card";
	}else{
	    title = "Show Card";
	}

	return(
	
	<div className="ui card">	 
	
	
	 <button onClick={this.Card}>{title}</button>
	
	{hide && (
	<div className="ui card">
        <Image source = {this.state.data.source} alt = "image"/>
	 <Description name={this.state.data.name}
         description={this.state.data.description} />
	</div>
	)}
        <div class="extra content">
	
	</div>
    <a>
      
    </a>

</div>

		

);
	
};

}
export default Card
