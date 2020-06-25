import React from 'react';

import faker from "faker";

import Card from "./Components/Card"

import './App.css';

class App extends React.Component {
 constructor(Card) {
	super(Card);
	this.state = {
	  data : {
	    hide: "false"
	}
	
}
	
}
 

  shouldComponentUpdate(nextProps, nextState) {
     if (nextState.hide == "true") {
	console.log("shouldComponentUpdate");
	return true;

	}
	return false;
  }

  displayChange = () => {
     this.setState({
	data: {
	  hide:true
	}
	})
	
}

  
 render() {
   return (
		
	
	<div class ="ui link cards">
	<div>
	<button onClick={this.displayChange}> Hide </button>
	<Card button/>
	<Card/>
	<Card/>
	</div>
	</div>
	);
}

 
}

export default App;
